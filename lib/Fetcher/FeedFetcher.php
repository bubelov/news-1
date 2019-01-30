<?php
/**
 * Nextcloud - News
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author    Alessandro Cosentino <cosenal@gmail.com>
 * @author    Bernhard Posselt <dev@bernhard-posselt.com>
 * @copyright 2012 Alessandro Cosentino
 * @copyright 2012-2014 Bernhard Posselt
 */

namespace OCA\News\Fetcher;

use DateTime;
use Favicon\Favicon;
use FeedIo\Feed\ItemInterface;
use FeedIo\FeedInterface;
use FeedIo\FeedIo;
use OCP\Http\Client\IClientService;

use OCP\IL10N;

use OCA\News\Db\Item;
use OCA\News\Db\Feed;
use OCA\News\Utility\Time;

class FeedFetcher implements IFeedFetcher
{

    private $faviconFactory;
    private $reader;
    private $l10n;
    private $time;
    private $clientService;

    public function __construct(
        FeedIo $fetcher,
        Favicon $favicon,
        IL10N $l10n,
        Time $time,
        IClientService $clientService
    ) {
        $this->faviconFactory = $favicon;
        $this->reader         = $fetcher;
        $this->time           = $time;
        $this->l10n           = $l10n;
        $this->clientService  = $clientService;
    }


    /**
     * This fetcher handles all the remaining urls therefore always returns true.
     *
     * @param string $url The URL to check
     *
     * @return bool
     */
    public function canHandle($url)
    {
        return true;
    }


    /**
     * Fetch a feed from remote
     *
     * @param string  $url          Remote url of the feed
     * @param boolean $getFavicon   If the favicon should also be fetched,
     *                              defaults to true
     * @param string  $lastModified A last modified value from an http header
     *                              defaults to false. If lastModified matches
     *                              the header from the feed no results are fetched
     * @param string  $user         If given, basic auth is set for this feed
     * @param string  $password     If given, basic auth is set for this feed.
     *                              Ignored if user is null or an empty string.
     *
     * @return array an array containing the new feed and its items, first
     * element being the Feed and second element being an array of Items
     */
    public function fetch($url, $getFavicon = true, $lastModified = null, $user = null, $password = null)
    {
        if ($user !== null && trim($user) !== '') {
            $url = explode('://', $url);
            $url = $url[0] . '://' . $user . ':' . $password . '@' . $url[1];
        }
        $resource = $this->reader->readSince($url, new DateTime($lastModified));

        if (!$resource->getResponse()->isModified()) {
            return [null, null];
        }

        $location     = $resource->getUrl();
        $parsedFeed   = $resource->getFeed();
        $feed = $this->buildFeed(
            $parsedFeed,
            $url,
            $getFavicon,
            $location
        );

        $items = [];
        foreach ($parsedFeed as $item) {
            $items[] = $this->buildItem($item, $parsedFeed);
        }

        return [$feed, $items];
    }

    /**
     * Decode the string twice
     *
     * @param string $string String to decode
     *
     * @return string
     */
    private function decodeTwice($string)
    {
        return html_entity_decode(
            html_entity_decode(
                $string,
                ENT_QUOTES | ENT_HTML5,
                'UTF-8'
            ),
            ENT_QUOTES | ENT_HTML5,
            'UTF-8'
        );
    }

    /**
     * Check if a feed is RTL or not
     *
     * @param FeedInterface $parsedFeed The feed that was parsed
     *
     * @return bool
     */
    protected function determineRtl($parsedFeed)
    {
        $language = $parsedFeed->getLanguage();

        $language = strtolower($language);
        $rtl_languages = array(
            'ar', // Arabic (ar-**)
            'fa', // Farsi (fa-**)
            'ur', // Urdu (ur-**)
            'ps', // Pashtu (ps-**)
            'syr', // Syriac (syr-**)
            'dv', // Divehi (dv-**)
            'he', // Hebrew (he-**)
            'yi', // Yiddish (yi-**)
        );
        foreach ($rtl_languages as $prefix) {
            if (strpos($language, $prefix) === 0) {
                return true;
            }
        }
        return false;
    }

    /**
     * Build an item based on a feed.
     *
     * @param ItemInterface $parsedItem The item to use
     * @param FeedInterface $parsedFeed The feed to use
     *
     * @return Item
     */
    protected function buildItem($parsedItem, $parsedFeed)
    {
        $item = new Item();
        $item->setUnread(true);
        $item->setUrl($parsedItem->getLink());
        $item->setGuid($parsedItem->getPublicId());
        $item->setGuidHash($item->getGuid());

        $pubDT = $parsedItem->getLastModified();
        if ($parsedItem->getValue('pubDate') !== null) {
            $pubDT = new DateTime($parsedItem->getValue('pubDate'));
        } elseif ($parsedItem->getValue('published') !== null) {
            $pubDT = new DateTime($parsedItem->getValue('published'));
        }

        $item->setPubDate(
            $pubDT->getTimestamp()
        );
        $item->setLastModified(
            $parsedItem->getLastModified()->getTimestamp()
        );
        $item->setRtl($this->determineRtl($parsedFeed));

        // unescape content because angularjs helps against XSS
        $item->setTitle($this->decodeTwice($parsedItem->getTitle()));
        $item->setAuthor($this->decodeTwice($parsedItem->getAuthor()));

        // purification is done in the service layer
        $body = $parsedItem->getDescription();
        $body = mb_convert_encoding(
            $body,
            'HTML-ENTITIES',
            mb_detect_encoding($body)
        );
        $item->setBody($body);

        if ($parsedItem->hasMedia()) {
            // TODO: Fix multiple media support
            foreach ($parsedItem->getMedias() as $media) {
                if (!$item->isSupportedMime($media->getType())) {
                    continue;
                }
                $item->setEnclosureMime($media->getType());
                $item->setEnclosureLink($media->getUrl());
            }
        }

        $item->generateSearchIndex();

        return $item;
    }

    /**
     * Build a feed based on provided info
     *
     * @param FeedInterface $feed       Feed to build from
     * @param string        $url        URL to use
     * @param bool          $getFavicon To get the favicon
     * @param string        $location   String base URL
     *
     * @return Feed
     */
    protected function buildFeed($feed, $url, $getFavicon, $location)
    {
        $newFeed = new Feed();

        // unescape content because angularjs helps against XSS
        $title = strip_tags($this->decodeTwice($feed->getTitle()));
        $newFeed->setTitle($title);
        $newFeed->setUrl($url);  // the url used to add the feed
        $newFeed->setLocation($location);  // the url where the feed was found
        $newFeed->setLink($feed->getLink());  // <link> attribute in the feed
        $newFeed->setLastModified($feed->getLastModified()->getTimestamp());
        $newFeed->setAdded($this->time->getTime());

        if (!$getFavicon) {
            return $newFeed;
        }
        $favicon = $this->faviconFactory->get($url);
        $newFeed->setFaviconLink($favicon);

        return $newFeed;
    }
}
