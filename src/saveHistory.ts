import { 
  getEventTriggerProperties,
  DownloadlistContextmenuButtonPressedEventTriggerProperties,
  DownloadStoppedEventTriggerProperties
} from './eventTriggers';

var BASE_PATH = getPath(JD_HOME + '\\History');
var NEWLINE = getEnvironment().getNewLine();

export function saveHistoryContextMenuEvent () {
  //Get properties of correct type
  const eventTriggerProps = getEventTriggerProperties(DownloadlistContextmenuButtonPressedEventTriggerProperties);
  if(!eventTriggerProps) return;

  //Check preconditions
  if(eventTriggerProps.name != "Save to history" && eventTriggerProps.name != "Save to history (Include unfinished)") return;
  const includeUnfinished = (eventTriggerProps.name == "Save to history (Include unfinished)");

  //Do action
  let savedLinkCount = savePackagesToHistory(eventTriggerProps.dlSelection.getPackages(), includeUnfinished);
  alert("Finished saving links to history. Count: " + savedLinkCount);
}

export function saveHistoryDownloadStoppedEvent () {
  //Get properties of correct type
  const eventTriggerProps = getEventTriggerProperties(DownloadStoppedEventTriggerProperties);
  if(!eventTriggerProps) return;

  //Check preconditions
  if(!eventTriggerProps.link.isFinished()) return;
  const includeUnfinished = false;

  //Do action
  saveLinkToHistory(eventTriggerProps.link, includeUnfinished);
}


function savePackagesToHistory(filePackages:FilePackage[], includeUnfinished:boolean):number {
  if(!BASE_PATH.exists()) {
    BASE_PATH.mkdirs();
  }

  var savedLinkCount = 0;
  for(var i = 0; i < filePackages.length; ++i) {
    var filePackage = filePackages[i];
    savedLinkCount += savePackageToHistory(filePackage, includeUnfinished);
  }
  return savedLinkCount;
}

function savePackageToHistory(filePackage:FilePackage, includeUnfinished:boolean):number {
  var savedLinkCount = 0;
  var downloadLinks = filePackage.getDownloadLinks();
  for(var i = 0; i < downloadLinks.length; ++i){
    savedLinkCount += saveLinkToHistory(downloadLinks[i], includeUnfinished);
  }
  return savedLinkCount;
}

function saveLinkToHistory(downloadLink:DownloadLink, includeUnfinished:boolean):number {
  var linkHost = downloadLink.getDownloadHost();
  var linkUrl = getShortURL(downloadLink);

  if(!includeUnfinished && !downloadLink.isFinished()) {
    return 0;
  }

  var hosterFilePath = getPath(BASE_PATH + '\\' + linkHost + '.txt')

  return addUrlsToFile([linkUrl], hosterFilePath);
}

function addUrlsToFile(linkUrls:string[], filePath:FilePath):number {
  if(filePath.exists()){
    const oldLinkUrlsString = readFile(filePath.toString());
    const oldLinkUrls = oldLinkUrlsString.split(NEWLINE);
    linkUrls = linkUrls.filter(linkUrl => (oldLinkUrls.indexOf(linkUrl) == -1))
  }
  if(linkUrls.length == 0) return 0;

  let fileText = linkUrls.join(NEWLINE)
  if (filePath.exists()) fileText = NEWLINE + fileText;
  writeFile(filePath.toString(), fileText, true);
  return linkUrls.length;
}

function getShortURL(link:DownloadLink) {
  var url = link.getPluginURL();
  return url.replace(/(^(https?|ftp):\/\/[^\/]+\/)/, '').replace(/.+:\/\//, '');
}