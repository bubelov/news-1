OC.L10N.register(
    "news",
    {
    "Request failed, network connection unavailable!" : "Non se realizou a solicitude, a conexión de rede non está dispoñíbel!",
    "Request unauthorized. Are you logged in?" : "Solicitude non autorizada. Está vostede autenticado?",
    "Request forbidden. Are you an admin?" : "Solicitude prohibida. É vostede un administrador?",
    "Token expired or app not enabled! Reload the page!" : "Ou ben caducou o testemuño ou a aplicación non está activada. Volva cargar a páxina!",
    "Internal server error! Please check your data/nextcloud.log file for additional information!" : "Produciuse un erro interno do servidor! Verifique o ficheiro data/nextcloud.log para obter máis información!",
    "Request failed, Nextcloud is in currently in maintenance mode!" : "Produciuse un fallo na solicitude, Nexcloud esta actualmente en modo mantemento!",
    "Can not add feed: Unable to parse feed" : "Non é posíbel engadir a fonte: Non é posíbel analizala",
    "Can not add feed: Exists already" : "Non é posíbel engadir a fonte: xa existe",
    "Articles without feed" : "Artigos sen fonte",
    "Can not add folder: Exists already" : "Non é posíbel engadir o cartafol: xa existe",
    "News" : "Novas",
    "An RSS/Atom feed reader" : "Un lector de fontes RSS/Atom",
    "The News app is an RSS/Atom feed reader for Nextcloud which can be synced with many mobile devices. A list of all clients and requirements can be found [in the README](https://github.com/nextcloud/news)\n\nBefore you update to a new version, [check the changelog](https://github.com/nextcloud/news/blob/master/CHANGELOG.md) to avoid surprises.\n\n**Important**: To enable feed updates you will need to enable either [Nextcloud system cron](https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron) or use [an updater](https://github.com/nextcloud/news-updater) which uses the built in update API and disable cron updates. More information can be found [in the README](https://github.com/nextcloud/news)." : "A aplicación de Novas é un lector de fontes RSS/Atom para o Nextcloud que pode sincronizarse con moitos dispositivos móbiles. Hai dispoñíbel unha lista de todos os clientes e requisitos [no ficheiro LÉEME](https://github.com/nextcloud/news)\n\nAntes de actualizar a unha nova versión, [comprobe o rexistro de cambios](https://github.com/nextcloud/news/blob/master/CHANGELOG.md) para evitar sorpresas\n\n.**Importante**: para activar a actualización das fontes terá que activar [o cron do sistema do Nextcloud](https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron) ou empregar [un actualizador](https://github.com/nextcloud/news-updater) que emprega a API de actualización incorporada e desactiva as acactualizaciónso cron. Hai máis información dispoñíbel [no ficheiro LÉEME](https://github.com/nextcloud/news).",
    "Use system cron for updates" : "Use o cron do sistema para as actualizacións",
    "Disable this if you run a custom updater such as the Python updater included in the app." : "Desactive isto se vostede executa un actualizador automático tal como o Python updater incluído na aplicación.",
    "Purge interval" : "Intervalo de depuración",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored." : "Cantidade mínima de segundos após eliminar as fontes e cartafoles da base de datos; os valores menores de 60 segundos son ignorados.",
    "Maximum read count per feed" : "Conta máxima de lidos por fonte",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off." : "Define o número máximo de artigos que pode ler por fonte os cales non serán eliminados polo traballo de limpeza; se os artigos antigos reaparecen após lidos, incremente este valor; os valores negativos como -1 desactivan esta función.",
    "Maximum redirects" : "Redireccionamentos máximos",
    "How many redirects the feed fetcher should follow." : "Cantos redirecionamentos debe seguir o recuperador de fontes.",
    "Maximum feed page size" : "Tamaño máximo da páxina da fonte",
    "Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted." : "Tamaño máximo da fonte en bytes. Se a páxina RSS/Atom é maior que este valor, a actualización cancelarase.",
    "Feed fetcher timeout" : "Caducidade do recuperador",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted." : "Número máximo de segundos agardando por unha fonte RSS ou Atom para cargar; se lle leva máis tempo a actualización será cancelada.",
    "Explore Service URL" : "Examinar o URL de servizo",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty." : "Se é fornecido, este URL de servizo requirirase para amosar as fontes na sección de exame da fonte. Para amparar co servizo de exame propio, deixe baldeira esta entrada.",
    "For more information check the wiki." : "Para obter máis información consulte a wiki.",
    "Update interval" : "Intervalo de actualización",
    "Interval in seconds in which the feeds will be updated." : "Intervalo, en segundos, no que se actualizarán as fontes.",
    "Saved" : "Gardado",
    "Download" : "Descargar",
    "Close" : "Pechar",
    "filter" : "filtro",
    "Language" : "Idioma",
    "Subscribe" : "Subscribirse",
    "Got more awesome feeds? Share them with us!" : "Ten máis fontes moi interesantes? Compártaas connosco!",
    "No articles available" : "Non hai artigos dispoñíbeis",
    "No unread articles available" : "Non hai artigos sen ler dispoñíbeis",
    "Open website" : "Abrir o sitio web",
    "Star article" : "Marcar artigo",
    "Unstar article" : "Desmarcar artigo",
    "Keep article unread" : "Manter o artigo como non lido",
    "Remove keep article unread" : "Retirar a marca de artigo sen ler",
    "by" : "por",
    "from" : "dende",
    "Play audio" : "Reproducir son",
    "Download audio" : "Descargar son",
    "Download video" : "Descargar video",
    "Keyboard shortcut" : "Atallo de teclado",
    "Description" : "Descrición",
    "right" : "dereita",
    "Jump to next article" : "Ir ao seguinte artigo",
    "left" : "esquerda",
    "Jump to previous article" : "Saltar ao artigo anterior",
    "Toggle star article" : "Marcar/desmarcar os artigos con estrela",
    "Star article and jump to next one" : "Destacar o artigo e ir ao seguinte",
    "Toggle keep current article unread" : "Manter/retirar o artigo actual como non lido",
    "Open article in new tab" : "Abrir o artigo nunha nova lapela",
    "Toggle expand article in compact view" : "Expandir/contraer o artigo en vista compacta",
    "Refresh" : "Actualizar",
    "Load next feed" : "Cargar a seguinte fonte",
    "Load previous feed" : "Cargar a fonte anterior",
    "Load next folder" : "Cargar o seguinte cartafol",
    "Load previous folder" : "Cargar o cartafol anterior",
    "Scroll to active navigation entry" : "Desprazar ata a entrada de navegación activa",
    "Focus search field" : "Campo de busca en foco",
    "Mark current article's feed/folder read" : "Marcar o actual artigo de fonte/cartafol como lido",
    "Ajax or webcron mode detected! Your feeds will not be updated!" : "Detectouse o modo Ajax ou webcron! As súas fontes non van ser actualizadas!",
    "How to set up the operating system cron" : "Cómo configurar o cron do sistema operativo",
    "Install and set up a faster parallel updater that uses the News app's update API" : "Instala e configura un actualizador paralelo máis rápido que utiliza a API de actualización da aplicación Novas",
    "Web address" : "Enderezo web",
    "Feed exists already!" : "Esta fonte de novas xa existe!",
    "Folder" : "Cartafol",
    "No folder" : "Sen cartafol",
    "New folder" : "Novo cartafol",
    "Folder name" : "Nome do cartafol",
    "Go back" : "Volver",
    "Folder exists already!" : "Xa existe o cartafol!",
    "Credentials" : "Credenciais",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "As credenciais para HTTP Basic Auth deben estar gardadas sen cifrar! Calquera persoa con acceso ao servidor poderá acceder a elas!",
    "Username" : "Nome de usuario",
    "Password" : "Contrasinal",
    "New Folder" : "Novo cartafol",
    "Create" : "Crear",
    "Explore" : "Examinar",
    "Update failed more than 50 times" : "A actualización fallou máis de 50 veces.",
    "Deleted feed" : "Fonte eliminada",
    "Undo delete feed" : "Desfacer a eliminación da fonte",
    "Rename" : "Renomear",
    "Menu" : "Menú",
    "Mark read" : "Marcar como lido",
    "Unpin from top" : "Soltar de enriba",
    "Pin to top" : "Fixar enriba",
    "Newest first" : "Primeiro o máis recente",
    "Oldest first" : "Primeiro o máis antigo",
    "Default order" : "Orde predeterminado",
    "Enable full text" : "Activar o texto completo",
    "Disable full text" : "Desactivar o texto completo",
    "Unread updated" : "Actualización non lida",
    "Ignore updated" : "Ignorar actualizados",
    "Open feed URL" : "Abrir o URL da fonte",
    "Delete" : "Eliminar",
    "Dismiss" : "Rexeitar",
    "Collapse" : "Contraer",
    "Deleted folder" : "Eliminar cartafol",
    "Undo delete folder" : "Desfacer a eliminación do cartafol",
    "Starred" : "Destacado",
    "Unread articles" : "Artigos sen ler",
    "All articles" : "Todos os artigos",
    "Settings" : "Axustes",
    "Disable mark read through scrolling" : "Desactivar o marcado como lido co desprazamento",
    "Compact view" : "Vista compacta",
    "Expand articles on key navigation" : "Expandir artigos na tecla de navegación",
    "Show all articles" : "Amosar todos os artigos",
    "Reverse ordering (oldest on top)" : "Ordenado inverso (máis vellos enriba)",
    "Subscriptions (OPML)" : "Subscricións (OPML)",
    "Import" : "Importar",
    "Export" : "Exportar",
    "Error when importing: File does not contain valid OPML" : "Erro durante a importación: O ficheiro non contén OPML correcto",
    "Error when importing: OPML is does neither contain feeds nor folders" : "Produciuse un erro ao importar: OPML non contén fontes ou cartafoles",
    "Unread/Starred Articles" : "Artigos destacados ou sen ler",
    "Error when importing: file does not contain valid JSON" : "Produciuse un erro ao importar: o ficheiro non contén un JSON correcto",
    "Help" : "Axuda",
    "Keyboard shortcuts" : "Atallos de teclado",
    "Documentation" : "Documentación",
    "Report a bug" : "Informar dun fallo"
},
"nplurals=2; plural=(n != 1);");
