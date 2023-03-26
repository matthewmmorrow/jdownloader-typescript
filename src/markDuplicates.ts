import {
    getEventTriggerProperties,
    NewLinkAddedEventTriggerProperties
} from './eventTriggers';

var BASE_PATH = getPath(JD_HOME + '\\History');
var NEWLINE = getEnvironment().getNewLine();

export function markDuplicatesNewLinkEvent() {
    //Get properties of correct type
    const eventTriggerProps = getEventTriggerProperties(NewLinkAddedEventTriggerProperties);
    if (!eventTriggerProps) return;

    //Check preconditions
    if (!eventTriggerProps.crawledLink) return;

    //Do action
    markDuplicateLink(eventTriggerProps.crawledLink);
}

function markDuplicateLink(crawledLink: CrawledLink) {
    log(["Searching for duplicates", crawledLink.getDownloadHost(), getShortURL(crawledLink)])
    crawledLink.setComment("Searching for duplicates...");
    if(checkLinkExists(crawledLink)) {
        crawledLink.setComment("duplicate");
        crawledLink.setEnabled(false);
    } else {
        downloadLink.setComment("unique");
    }
}

function checkLinkExists(crawledLink: CrawledLink): boolean {
    var linkHost = crawledLink.getDownloadHost();
    var linkUrl = getShortURL(crawledLink);

    var hosterFilePath = getPath(BASE_PATH + '\\' + linkHost + '.txt')
    if(!hosterFilePath.exists()) {
        log(["No history file", hosterFilePath.toString()]);
        return false;
    }

    let fileText = readFile(hosterFilePath.toString());
    let fileLines = fileText.split(NEWLINE);
    log(["History file stats", hosterFilePath.toString(), fileText.length, fileLines.length]);
    for(let fileLine of fileLines){
        //log(["...", fileLine, linkUrl]);
        if(fileLine === linkUrl) {
            log(["Found!", fileLine, linkUrl]);
            return true;
        }
    }
    return false;
}

function getShortURL(link: CrawledLink) {
    var url = link.getPluginURL();
    return url.replace(/(^(https?|ftp):\/\/[^\/]+\/)/, '').replace(/.+:\/\//, '');
}