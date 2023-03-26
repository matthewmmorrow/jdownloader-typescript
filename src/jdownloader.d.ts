/* =============== Global API =============== */
/* =========  Methods =========*/
declare function alert(myObject:any[]):void; /*Show a Message Box*/
/* Example: */ //alert(JD_HOME);
declare function callAPI(myString:string, myString:string, myObject:any[]):any; /*Call the MyJDownloader API*/
/* Example: */ //callAPI("downloadsV2", "queryLinks", { "name": true})
declare function callAsync(myFunction:function, myString:string[]):void; /*Call a local Process asynchronous*/
/* Example: */ //callAsync(function(exitCode,stdOut,errOut){ alert("Closed Notepad");},"notepad.exe",JD_HOME+"\\license.txt");
declare function callSync(myString:string[]):string;/*Call a local Process. Blocks Until the process returns*/
/* Example: */ //var pingResultString = callSync("ping","jdownloader.org");
declare function deleteFile(myString:string/*path*/, myBoolean:boolean/*recursive*/):boolean;/*Delete a file or a directory*/
/* Example: */ //var myBoolean:boolean:booleanResult=deleteFile(JD_HOME+"/mydirectory/",false);
declare function disablePermissionChecks():void;/*disable permission checks*/
declare function doReconnect():boolean;/*Perform a reconnect and wait for it*/
/* Example: */ //var success= doReconnect();
declare function enablePermissionChecks():void;/*enable permission checks*/
declare function experimental_proxybanlist():string;/*(experimental) Get proxy banlist*/
/* Example: */ //experimental_proxybanlist();
declare function experimental_proxylist():string;/*(experimental) Get proxy list*/
/* Example: */ //experimental_proxylist();
declare function getAllCrawledLinks():CrawledLink[];/*Get a list of all crawledlinks*/
declare function getAllCrawledPackages():CrawledPackage[];/*Get a list of all crawledpackages*/
declare function getAllDownloadLinks():DownloadLink[];/*Get a list of all downloadlinks*/
declare function getAllFilePackages():FilePackage[];/*Get a list of all packages*/
declare function getAverageSpeed():number;/*Get current average Download Speed in bytes/second*/
declare function getBrowser():Browser;/*Get an Browser Object*/
declare function getChecksum(myString:string, myString:string):string;/*Create a Checksum for a file. Types: e.g. CRC32, MD5, SHA-1, SHA-256*/
declare function getCrawledLinkByUUID(myLong:number/*uuid*/):CrawledLink;/*Get a CrawledLink Link by it's uuid*/
declare function getCrawledPackageByUUID(myLong:number/*uuid*/):CrawledPackage;/*Get a CrawledLink Package by it's uuid*/
declare function getCurrentTimeStamp():number;/*Get current timestamp in ms*/
declare function getDownloadLinkByUUID(myLong:number/*uuid*/):DownloadLink;/*Get a DownloadList Link by it's uuid*/
declare function getDownloadPackageByUUID(myLong:number/*uuid*/):FilePackage;/*Get a DownloadList Package by it's uuid*/
declare function getEnv(myString:string/*environment variable*/):string;/*Gets the value of the specified environment variable*/
declare function getEnvironment():Environment;/*Get an Environment Object*/
declare function getModifyLock(myString:string/*"key"*/):ModifyLock;/*Get a ModifyLock.*/
/* Example: */ //var lock=getModifyLock("lockID");
declare function getPage(myString:string/*URL*/):string;/*Loads a website (Method: GET) and returns the source code*/
/* Example: */ //var myhtmlSourceString=getPage("http://jdownloader.org");
declare function getPath(myString:string/*Path to a file or folder*/):FilePath;/*Get a FilePath Object*/
declare function getPathSeparator():string;/*Get the current path separator / or \*/
declare function getProperty(myString:string/*"key"*/, myBoolean:boolean/*global(boolean)*/):any;/*Get a Property. Set global to true if you want to access a global property*/
/* Example: */ //var value=getProperty("myObject", false);
declare function getRunningDownloadLinks():DownloadLink[];/*Get a list of all running downloadlinks*/
declare function getRunningDownloadPackages():FilePackage[];/*Get a list of all running packages*/
declare function getStringChecksum(myString:string, myString:string):string;/*Create a Checksum for a String. Types: e.g. CRC32, MD5, SHA-1, SHA-256*/
declare function getTotalSpeed():number;/*Get current total Download Speed in bytes/second*/
declare function isDownloadControllerIdle():boolean;/*Check if Download Controller is in IDLE State*/
declare function isDownloadControllerPaused():boolean;/*Check if Download Controller is in PAUSE State*/
declare function isDownloadControllerRunning():boolean;/*Check if Download Controller is in RUNNING State*/
declare function isDownloadControllerStopping():boolean;/*Check if Download Controller is in STOPPING State (Still running, but stop has been pressed)*/
declare function isSynchronous():boolean;/*is current script run in synchronous mode?*/
declare function log(myObject:any[]):void;/*Log to stderr and to JDownloader Log Files*/
declare function openURL(myString:string/*URL*/):void;/*Open a website or path in your default browser/file explorer*/
/* Example: */ //openURL("http://jdownloader.org");
declare function playWavAudio(myString:string/*myFilePathOrUrl*/):void;/*Play a Wav Audio file*/
/* Example: */ //playWavAudio(JD_HOME+"/themes/standard/org/jdownloader/sounds/captcha.wav");
declare function postPage(myString:string/*URL*/, myString:string/*PostData*/):string;/*Loads a website (METHOD: POST) and returns the source code*/
/* Example: */ //var myhtmlSourceString=postPage("http://support.jdownloader.org/index.php","searchquery=captcha");
declare function readFile(myString:string/*filepath*/):string;/*Read a text file*/
/* Example: */ //var myString:string=readFile(JD_HOME+"/license.txt");
declare function refreshAccounts(myBoolean:boolean/*true|false (Wait for account checks)*/, myBoolean:boolean/*true|false (Force Check)*/):void;/*Refresh all premium accounts*/
/* Example: */ //refreshAccounts(true,true);
declare function removeCrawledLinkByUUID(myString:string):boolean;/*Remove a crawledlink by uuid*/
declare function removeCrawledPackageByUUID(myString:string):boolean;/*Remove a crawledpackage by uuid*/
declare function removeDownloadLinkByUUID(myString:string):boolean;/*Remove a downloadlink by uuid*/
declare function removeFilePackageByUUID(myString:string):boolean;/*Remove a package by uuid*/
declare function requestReconnect():void;/*Request a reconnect*/
/* Example: */ //requestReconnect();
declare function require(myString:string/*myFilePathOrUrl*/):void;/*Loads a Javascript file or url. ATTENTION. The loaded script can access the API as well.*/
/* Example: */ //require("https://raw.githubusercontent.com/douglascrockford/JSON-js/master/json.js");
declare function setAdvancedAlert(myBoolean:boolean):void;/*enable/disable alert with textbox and copy&paste*/
declare function setDisableOnException(myBoolean:boolean):void;/*enable/disable script on exceptions*/
declare function setDownloadsPaused(myBoolean:boolean):void;/*Pause/Unpause Downloads*/
declare function setNotifyOnException(myBoolean:boolean):void;/*enable/disable notification on exceptions*/
declare function setProperty(myString:string/*"key"*/, myObject:any/*anyValue*/, myBoolean:boolean/*global(boolean)*/):any;/*Set a Property. This property will be available until JD-exit or a script overwrites it. if global is true, the property will be available for al scripts*/
/* Example: */ //var oldValue=setProperty("myObject:any", { "name": true}, false);
declare function setSpeedlimit(myInt:number/*speedlimit in bytes/second*/):void;/*Set the Speedlimit in bytes/second. Values<=0 -> Disable Limiter*/
declare function sleep(myInt:number/*milliseconds*/):void;/*Perform a sleep and wait for x milliseconds*/
/* Example: */ //sleep(1000);
declare function startDownloads():void;/*Start Downloads*/
declare function stopDownloads():void;/*Stop Downloads*/
declare function writeFile(myString:string/*filepath*/, myString:string/*myText*/, myBoolean:boolean/*append*/):void;/*Write a text file*/
/* Example: */ //writeFile(JD_HOME+"/log.txt",JSON.stringify(this)+"\r\n",true);
/* =========  Properties =========*/
//JDownloader Installation Directory;
declare const JD_HOME:string;
/* =============== Classes =============== */
/* === Archive === */
/* =========  Methods =========*/
interface Archive {
    getArchiveFiles():ArchiveFile[]
    getArchiveID():string
    getArchiveType():string
    getDownloadLinks():DownloadLink[];/*DEPRECATED, this method may be removed in future version*/
    getExtractToFolder():string
    getExtractedFilePaths():FilePath[]
    getExtractedFiles():string[]
    getExtractionLog():string;/*DEPRECATED, this method may be removed in future version*/
    getFolder():string
    getInfo():any
    getLastArchiveFile():ArchiveFile
    getName():string
    getParentArchive():Archive
    getPasswords():any[]
    getRootArchive():Archive
    getSettingsID():string
    getUsedPassword():string
    isPasswordProtected():boolean
    setPasswords(myList:any[]):void;
}
/* === ArchiveFile === */
interface ArchiveFile {
    exists():boolean
    exists(myBoolean:boolean):boolean
    getArchiveID():string
    getCrawledLinks():CrawledLink[]
    getDownloadLinks():DownloadLink[]
    getFilePath():string
    getFileSize():number
    getName():string
    getPath():FilePath
    invalidateExists():void;
    isComplete():boolean
    isMissingArchiveFile():boolean
    isPartOfAnArchive():boolean
};
/* === Browser === */
interface Browser {
    cloneBrowser():Browser
    getConnectTimeout():number
    getContentLength():number
    getContentType():string
    getCookie(myString:string, myString:string):string
    getDefaultSSLTrustALL():boolean
    getDownload(myString:string, myString:string):void;
    getHTML():string
    getLoadLimit():number
    getPage(myString:string):string
    getReadTimeout():number
    getRedirectLocation():string
    getRequestMethod():string
    getRequestTime():number
    getResponseCode():number
    getResponseHeader(myString:string):string
    getResponseHeaders():Map
    getURL():string
    headPage(myString:string):string
    isFollowingRedirects():boolean
    isSSLTrustALL():boolean
    postPage(myString:string, myString:string):string
    setConnectTimeout(myInt:number):void;
    setCookie(myString:string, myString:string, myString:string):void;
    setDefaultSSLTrustALL(myBoolean:boolean):void;
    setFollowRedirects(myBoolean:boolean):void;
    setHeader(myString:string, myString:string):void;
    setLoadLimit(myInt:number):void;
    setProxy(myString:string):boolean
    setReadTimeout(myInt:number):void;
};
/* === ConditionalSkipReason === */
interface ConditionalSkipReason {
    getClassName():string
    getDownloadLinkCondition():DownloadLink
    getMessage():string
    getTimeOutLeft():number
    getTimeOutTimeStamp():number
    getWaitingSkipReason():string
    isConditionReached():boolean
    isDownloadLinkCondition():boolean
    isTimeOutCondition():boolean
};
/* === CrawledLink === */
/* The context linkgrabber list link*/
/* =========  Methods =========*/
interface CrawledLink {
    getAddedDate():number
    getArchive():Archive
    getArchiveID():string
    getAvailableState():string
    getBytesTotal():number
    getBytesTotalVerified():number
    getComment():string
    getContainerURL():string
    getContentURL():string
    getDownloadHost():string
    getDownloadLink():DownloadLink
    getDownloadPath():string
    getFinalName():string
    getForcedName():string
    getHashInfo():string
    getHost():string
    getLinkID():string
    getLinkInfo():LinkInfo
    getName():string
    getOriginURL():string
    getPackage():CrawledPackage
    getPluginURL():string
    getPriority():string
    getProperties():Map
    getProperty(myString:string):any
    getReferrerURL():string
    getSessionProperty(myString:string):any
    getSourceJob():CrawlerJob
    getUUID():string
    getUrl():string
    isEnabled():boolean
    isNameSet():boolean
    isPartOfAnArchive():boolean
    remove():boolean
    setComment(myString:string):void;
    setEnabled(myBoolean:boolean):void;
    setName(myString:string/*new Name*/):void;/*Sets a new filename*/
    setPriority(myString:string):void;
    setProperty(myString:string, myObject:any):void;
    setSessionProperty(myString:string, myObject:any):void;
    toString():string
};
/* === CrawledPackage === */
/* The context linkgabber list package*/
/* =========  Methods =========*/
interface CrawledPackage {
    getAddedDate():number
    getArchives():Archive[]
    getBytesTotal():number
    getComment():string
    getDownloadFolder():string
    getDownloadLinks():CrawledLink[]
    getModifiedDate():number
    getName():string
    getPriority():string
    getUUID():string
    indexOf(myCrawledLinkSandbox:CrawledLink):number
    isExpanded():boolean
    remove():boolean
    setComment(myString:string):void;
    setDownloadFolder(myString:string):void;
    setExpanded(myBoolean:boolean):void;
    setName(myString:string):void;
    setPriority(myString:string):void;
    toString():string;
}
/* === CrawlerJob === */
/* =========  Methods =========*/
interface CrawlerJob {
    getArchivPasswords():List
    getOrigin():string
    getPassword():string
    getSourceUrl():string
    getText():string
    getUUID():string
    isAssignJobID():boolean
    isDeepAnalysisEnabled():boolean
    setAssignJobID(myBoolean:boolean):void;
    setDeepAnalysisEnabled(myBoolean:boolean):void;
    setPassword(myString:string):void;
    setText(myString:string):void;
}
/* === DownloadLink === */
/* The context download list link*/
/* =========  Methods =========*/
interface DownloadLink {
    abort():void;
    getAddedDate():number
    getArchive():Archive
    getArchiveID():string
    getAvailableState():string
    getBytesLoaded():number
    getBytesTotal():number
    getBytesTotalVerified():number
    getComment():string
    getConditionalSkipReason():ConditionalSkipReason
    getContainerURL():string
    getContentURL():string
    getDownloadDuration():number
    getDownloadHost():string
    getDownloadPath():string
    getDownloadProxy():HTTPProxy
    getDownloadSessionDuration():number
    getDownloadTime():number
    getEta():number
    getExtractionStatus():string
    getFinalLinkStatus():string
    getFinalName():string
    getFinishedDate():number
    getForcedName():string
    getHashInfo():string
    getHost():string
    getLinkID():string
    getLinkInfo():LinkInfo
    getName():string
    getOriginURL():string
    getPackage():FilePackage
    getPluginURL():string
    getPriority():string
    getProperties():Map
    getProperty(myString:string):any
    getReferrerURL():string
    getSessionProperty(myString:string):any
    getSkippedReason():string
    getSpeed():number
    getStatus():string
    getTempProperties():Map
    getTempProperty(myString:string):any
    getUUID():string
    getUrl():string
    isAborting():boolean
    isActive():boolean
    isEnabled():boolean
    isFinished():boolean
    isPartOfAnArchive():boolean
    isResumeable():boolean
    isRunning():boolean
    isSkipped():boolean
    remove():boolean
    reset():void;
    resume():void;
    setComment(myString:string):void;
    setEnabled(myBoolean:boolean):void;
    setName(myString:string/*new Name*/):void;/*Sets a new filename*/
    setPriority(myString:string):void;
    setProperty(myString:string, myObject:any):void;
    setSessionProperty(myString:string, myObject:any):void;
    setSkipped(myBoolean:boolean):void;
    setTempProperty(myString:string, myObject:any):void;
    toString():string
}
;/* === DownloadlistSelection === */
/* =========  Methods =========*/
interface DownloadlistSelection {
    getContextLink():DownloadLink
    getContextPackage():FilePackage
    getDownloadLinks():DownloadLink[];/*DEPRECATED, this method may be removed in future version*/
    getLinks():DownloadLink[]
    getPackages():FilePackage[]
    isLinkContext():boolean
    isPackageContext():boolean
}
;/* === Environment === */
/* =========  Methods =========*/
interface Environment{
    getARCHFamily():string
    getJavaVersion():number
    getNewLine():string
    getOS():string
    getOSFamily():string
    getPathSeparator():string
    is64BitArch():boolean
    is64BitJava():boolean
    is64BitOS():boolean
    isBSD():boolean
    isHeadless():boolean
    isLinux():boolean
    isMac():boolean
    isWindows():boolean
}
;/* === FilePackage === */
/* The context download list package*/
/* =========  Methods =========*/
interface FilePackage {
    getAddedDate():number
    getArchives():Archive[]
    getBytesLoaded():number
    getBytesTotal():number
    getComment():string
    getDownloadFolder():string
    getDownloadLinks():DownloadLink[]
    getFinishedDate():number
    getModifiedDate():number
    getName():string
    getPriority():string
    getProperties():Map
    getProperty(myString:string):any
    getUUID():string
    indexOf(myDownloadLinkSandBox:DownloadLink):number
    isExpanded():boolean
    isFinished():boolean
    remove():boolean
    setComment(myString:string):void;
    setDownloadFolder(myString:string):void;
    setExpanded(myBoolean:boolean):void;
    setName(myString:string):void;
    setPriority(myString:string):void;
    setProperty(myString:string, myObject:any):void;
    toString():string
};
/* === FilePath === */
/* =========  Methods =========*/
interface FilePath {
    copyTo(myString:string):boolean
    copyTo(myString:string, myString:string, myBoolean:boolean):boolean
    delete():boolean
    deleteRecursive():boolean
    exists():boolean
    getAbsolutePath():string
    getChildren():FilePath[]
    getCreatedDate():number
    getExtension():string
    getFreeDiskSpace():number
    getLinkInfo():LinkInfo
    getModifiedDate():number
    getName():string
    getParent():FilePath
    getPath():string
    getPathSeparator():string
    getReservedDiskSpace():number
    getSize():number
    isDirectory():boolean
    isFile():boolean
    mkdirs():boolean
    moveTo(myString:string):boolean
    rename(myString:string):FilePath
    renameName(myString:string):FilePath
    renamePath(myString:string):FilePath
    renameTo(myString:string):boolean
    toString():string
};
/* === HTTPProxy === */
/* =========  Methods =========*/
interface HTTPProxy {
    getHost():string
    getPassword():string
    getPort():number
    getType():string
    getUsername():string
    indexOf():number
    isEnabled():boolean
    remove():boolean
    setEnabled(myBoolean:boolean):void;
    toExportString():string
}
;/* === LinkInfo === */
/* =========  Methods =========*/
interface LinkInfo {
    getDesc():string
    getGroup():string
    getPartNum():number
    name():string
}
;/* === ModifyLock === */
/* =========  Methods =========*/
interface ModifyLock {
    readLock():boolean
    readUnlock(myBoolean:boolean):void;
    writeLock():void;
    writeUnlock():void;
}

/* === Event === */
/* The Event Object*/
interface RemoteEvent {
    getData():string;
    getId():string;
    getPublisher():string;
}

/* === PackagizerLink === */
interface PackagizerLink {
    getBytesTotal():number
    getChunks():number
    getComment():string
    getCrawledLink():CrawledLink
    getDownloadFolder():string
    getHost():string
    getLinkState():string
    getName():string
    getPackageName():string
    getPriority():string/*Get the Link Priority (HIGHEST|HIGHER|HIGH|DEFAULT|LOWER)*/
    getProperties():Map
    getProperty(myString:string):Object
    getSourceUrls():string[]
    getURL():string
    isAutoConfirmEnabled():boolean/*If true, the link will automove to the downloadlist*/
    isAutoStartEnabled():boolean/*If true, the link will autostart download after beeing confirmed*/
    isEnabled():boolean
    setAutoConfirmEnabled(myBoolean:boolean):void;/*If true, the link will automove to the downloadlist*/
    setAutoStartEnabled(myBoolean:boolean):void;/*If true, the link will autostart download after beeing confirmed*/
    setChunks(myInt:number):void;
    setComment(myString:string):void;
    setDownloadFolder(myString:string):void;
    setEnabled(myBoolean:boolean):void;
    setName(myString:string):void;
    setPackageName(myString:string):void;
    setPriority(myString:string/*HIGHEST|HIGHER|HIGH|DEFAULT|LOWER*/):void;/*Sets the Link Priority*/
    setProperty(myString, myObject:any):void;
}

/* === LinkgrabberSelection === */
interface LinkgrabberSelection {
    getContextLink():CrawledLink
    getContextPackage():CrawledPackage
    getLinks():CrawledLink[]
    getPackages():CrawledPackage[]
    isLinkContext():boolean
    isPackageContext():boolean
}