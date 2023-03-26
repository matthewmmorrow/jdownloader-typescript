export enum TriggerType {
    DownloadStarted = 'A Download started',
    DownloadStopped = 'A Download stopped',
    PackageFinished = 'Package finished',
    AnyExtractionEvent = 'Any Extraction Event',
    ArchiveExtractionFinished = 'Archive extraction finished',
    JDownloaderStarted = 'JDownloader started',
    None = 'None',
    RemoteAPIEventFired = 'Remote API Event fired',
    NewFileCreated = 'A new file has been created',
    NewCrawlerJob = 'New Crawler Job',
    NewLinkAdded = 'A new link has been added',
    PackagizerHook = 'Packagizer Hook',
    DownloadControllerPaused = 'Download Controller paused',
    DownloadControllerStarted = 'Download Controller started',
    DownloadControllerStopped = 'Download Controller stopped',
    BeforeReconnect = 'Before a Reconnect',
    AfterReconnect = 'After a Reconnect',
    BeforeCaptchaChallenge = 'Before a Captcha Challenge',
    AfterCaptchaChallenge = 'After a Captcha Challenge',
    Interval = 'Interval',
    ToolbarButtonPressed = 'Toolbar Button Pressed',
    MainMenuButtonPressed = 'Main Menu Button Pressed',
    DownloadlistContextmenuButtonPressed = 'Downloadlist Contextmenu Button Pressed',
    LinkgrabberContextMenuButtonPressed = 'Linkgrabber Contextmenu Button Pressed',
    DownloadlistBottombarButtonPressed = 'Downloadlist Bottombar Button Pressed',
    LinkgrabberBottombarButtonPressed = 'Linkgrabber Bottombar Button Pressed',
    TraymenuButtonPressed = 'Traymenu Button Pressed',
}
declare global {
    const proxy: HTTPProxy; //DownloadStarted, DownloadStopped
    const filePackage: FilePackage; //DownloadStarted, DownloadStopped, PackageFinished
    const downloadLink: DownloadLink; //DownloadStarted, DownloadStopped, PackageFinished, BeforeCaptchaChallenge, AfterCaptchaChallenge 
    const packagizerLink: PackagizerLink; //NewLinkAdded, PackagizerHook
    const extractionEvent: string; //AnyExtractionEvent 
    const remoteEvent: RemoteEvent; //RemoteAPIEventFired
    const archive: Archive; //AnyExtractionEvent, ArchiveExtractionFinished
    const files: string[]; //NewFileCreated
    const caller: string; //NewFileCreated
    const job: CrawlerJob; //NewCrawlerJob 
    const crawledLink: CrawledLink; //NewLinkAdded
    const linkcheckDone: boolean; //PackagizerHook
    const state: string; //PackagizerHook
    const method: string; //BeforeReconnect, AfterReconnect
    const result: string; //AfterReconnect, AfterCaptchaChallenge
    const getCaptchaHost: string; //BeforeCaptchaChallenge, AfterCaptchaChallenge
    const isAccountCheck: boolean; //BeforeCaptchaChallenge, AfterCaptchaChallenge
    const hasPendingJobs: boolean; //BeforeCaptchaChallenge, AfterCaptchaChallenge
    const getCaptchaName: string; //BeforeCaptchaChallenge, AfterCaptchaChallenge
    const solved: boolean; //AfterCaptchaChallenge
    const solver: string[]; //AfterCaptchaChallenge
    const interval: number; //Interval
    const buttonName: string; //ToolbarButtonPressed, MainMenuButtonPressed, DownloadlistContextmenuButtonPressed, LinkgrabberContextMenuButtonPressed, DownloadlistBottombarButtonPressed, LinkgrabberBottombarButtonPressed, TraymenuButtonPressed
    const lgSelection: LinkgrabberSelection; //MainMenuButtonPressed, LinkgrabberContextMenuButtonPressed, LinkgrabberBottombarButtonPressed, TraymenuButtonPressed
    const shortCutString: string; //MainMenuButtonPressed, DownloadlistContextmenuButtonPressed, LinkgrabberContextMenuButtonPressed, DownloadlistBottombarButtonPressed, LinkgrabberBottombarButtonPressed, TraymenuButtonPressed
    const icon: string; //MainMenuButtonPressed, DownloadlistContextmenuButtonPressed, LinkgrabberContextMenuButtonPressed, DownloadlistBottombarButtonPressed, LinkgrabberBottombarButtonPressed, TraymenuButtonPressed
    const dlSelection: DownloadlistSelection; //MainMenuButtonPressed, DownloadlistContextmenuButtonPressed, DownloadlistBottombarButtonPressed, TraymenuButtonPressed
    const menu: string; //MainMenuButtonPressed, DownloadlistContextmenuButtonPressed, LinkgrabberContextMenuButtonPressed, DownloadlistBottombarButtonPressed, LinkgrabberBottombarButtonPressed, TraymenuButtonPressed
}

function safeRename(destVar:string, sourceVar:string) {
    try {
        eval(`${destVar} = ${sourceVar}`);
    } catch {

    }
}

export function getEventTriggerProperties<T extends EventTriggerProperties>(type: { new(): T ;}) : T | undefined {
    //Rename reserved global variables
    safeRename("filePackage", "package");
    safeRename("buttonName", "name");
    safeRename("extractionEvent", "event");
    safeRename("remoteEvent", "event");
    safeRename("downloadLink", "downloadLink");
    safeRename("packagizerLink", "packagizerLink");

    try {
        return new type();
    } catch {
        return undefined;
    }
}

export class EventTriggerProperties {
    eventTriggerType: TriggerType
    constructor(eventTriggerType: TriggerType) {
        this.eventTriggerType = eventTriggerType;
    }
}

export class DownloadStartedEventTriggerProperties extends EventTriggerProperties {
    proxy: HTTPProxy;
    package: FilePackage;
    link: DownloadLink;

    constructor () {
        super(TriggerType.DownloadStarted);
        this.proxy = proxy;
        this.package = filePackage;
        this.link = downloadLink;
    }
}

export class DownloadStoppedEventTriggerProperties extends EventTriggerProperties {
    proxy: HTTPProxy;
    package: FilePackage;
    link: DownloadLink;

    constructor () {
        super(TriggerType.DownloadStopped);
        this.proxy = proxy;
        this.package = filePackage;
        this.link = downloadLink;
    }
}

export class PackageFinishedEventTriggerProperties extends EventTriggerProperties {
    package: FilePackage;
    link: DownloadLink;

    constructor () {
        super(TriggerType.PackageFinished);
        this.package = filePackage;
        this.link = downloadLink;
    }
}

export class AnyExtractionEventEventTriggerProperties extends EventTriggerProperties {
    archive: Archive;
    event: string;

    constructor () {
        super(TriggerType.AnyExtractionEvent);
        this.archive = archive;
        this.event = extractionEvent;
    }
}

export class ArchiveExtractionFinishedEventTriggerProperties extends EventTriggerProperties {
    archive: Archive;

    constructor () {
        super(TriggerType.ArchiveExtractionFinished);
        this.archive = archive;
    }
}

// This Event will never be triggered.
export class JDownloaderStartedEventTriggerProperties extends EventTriggerProperties {
    constructor () {
        super(TriggerType.JDownloaderStarted);
    }
}

// This Event will never be triggered.
export class NoneEventTriggerProperties extends EventTriggerProperties {
    constructor () {
        super(TriggerType.None);
    }
}


export class RemoteAPIEventFiredEventTriggerProperties extends EventTriggerProperties {
    event: RemoteEvent;

    constructor () {
        super(TriggerType.RemoteAPIEventFired);
        this.event = remoteEvent;
    }
}

export class NewFileCreatedEventTriggerProperties extends EventTriggerProperties {
    files: string[];
    caller: string; /*Who created the files*/

    constructor () {
        super(TriggerType.NewFileCreated);
        this.files = files;
        this.caller = caller;
    }
}

export class NewCrawlerJobEventTriggerProperties extends EventTriggerProperties {
    job: CrawlerJob;

    constructor () {
        super(TriggerType.NewCrawlerJob);
        this.job = job;
    }
}

export class NewLinkAddedEventTriggerProperties extends EventTriggerProperties {
    link: PackagizerLink;
    crawledLink: CrawledLink;

    constructor () {
        super(TriggerType.NewLinkAdded);
        this.link = packagizerLink;
        this.crawledLink = crawledLink;
    }
}

export class PackagizerHookEventTriggerProperties extends EventTriggerProperties {
    linkcheckDone: boolean;
    link: PackagizerLink;
    state: string;

    constructor () {
        super(TriggerType.PackagizerHook);
        this.linkcheckDone = linkcheckDone;
        this.link = packagizerLink;
        this.state = state;
    }
}

export class DownloadControllerPausedEventTriggerProperties extends EventTriggerProperties {
    constructor () {
        super(TriggerType.DownloadControllerPaused);
    }
}

export class DownloadControllerStartedEventTriggerProperties extends EventTriggerProperties {
    constructor () {
        super(TriggerType.DownloadControllerStarted);
    }
}

export class DownloadControllerStoppedEventTriggerProperties extends EventTriggerProperties {
    constructor () {
        super(TriggerType.DownloadControllerStopped);
    }
}

export class BeforeReconnectEventTriggerProperties extends EventTriggerProperties {
    method: string;

    constructor () {
        super(TriggerType.BeforeReconnect);
        this.method = method;
    }
}

export class AfterReconnectEventTriggerProperties extends EventTriggerProperties {
    result: string;
    method: string;

    constructor () {
        super(TriggerType.AfterReconnect);
        this.result = result;
        this.method = method;
    }
}

export class BeforeCaptchaChallengeEventTriggerProperties extends EventTriggerProperties {
    getCaptchaHost: string;
    link: DownloadLink;
    isAccountCheck: boolean;
    hasPendingJobs: boolean;
    getCaptchaName: string;

    constructor () {
        super(TriggerType.BeforeCaptchaChallenge);
        this.getCaptchaHost = getCaptchaHost;
        this.link = downloadLink;
        this.isAccountCheck = isAccountCheck;
        this.hasPendingJobs = hasPendingJobs;
        this.getCaptchaName = getCaptchaName;
    }
}

export class AfterCaptchaChallengeEventTriggerProperties extends EventTriggerProperties {
    result: string;
    getCaptchaHost: string;
    link: DownloadLink;
    isAccountCheck: boolean;
    solved: boolean;
    hasPendingJobs: boolean;
    getCaptchaName: string;
    solver: string[];

    constructor () {
        super(TriggerType.AfterCaptchaChallenge);
        this.result = result;
        this.getCaptchaHost = getCaptchaHost;
        this.link = downloadLink;
        this.isAccountCheck = isAccountCheck;
        this.solved = solved;
        this.hasPendingJobs = hasPendingJobs;
        this.getCaptchaName = getCaptchaName;
        this.solver = solver;
    }
}

export class IntervalEventTriggerProperties extends EventTriggerProperties {
    interval: number;

    constructor () {
        super(TriggerType.Interval);
        this.interval = interval;
    }
}

export class ToolbarButtonPressedEventTriggerProperties extends EventTriggerProperties {
    name: string;

    constructor () {
        super(TriggerType.ToolbarButtonPressed);
        this.name = buttonName;
    }
}

export class MainMenuButtonPressedEventTriggerProperties extends EventTriggerProperties {
    lgSelection: LinkgrabberSelection;
    shortCutString: string;
    name: string;
    icon: string;
    dlSelection: DownloadlistSelection;
    menu: string;

    constructor () {
        super(TriggerType.MainMenuButtonPressed);
        this.lgSelection = lgSelection;
        this.name = buttonName;
        this.shortCutString = shortCutString;
        this.icon = icon;
        this.dlSelection = dlSelection;
        this.menu = menu;
    }
}

export class DownloadlistContextmenuButtonPressedEventTriggerProperties extends EventTriggerProperties {
    shortCutString: string;
    name: string;
    icon: string;
    dlSelection: DownloadlistSelection;
    menu: string;

    constructor () {
        super(TriggerType.DownloadlistContextmenuButtonPressed);
        this.name = buttonName;
        this.shortCutString = shortCutString;
        this.icon = icon;
        this.dlSelection = dlSelection;
        this.menu = menu;
    }
}

export class LinkgrabberContextMenuButtonPressedEventTriggerProperties extends EventTriggerProperties {
    lgSelection: LinkgrabberSelection;
    shortCutString: string;
    name: string;
    icon: string;
    menu: string;

    constructor () {
        super(TriggerType.LinkgrabberContextMenuButtonPressed);
        this.lgSelection = lgSelection;
        this.name = buttonName;
        this.shortCutString = shortCutString;
        this.icon = icon;
        this.menu = menu;
    }
}

export class DownloadlistBottombarButtonPressedEventTriggerProperties extends EventTriggerProperties {
    shortCutString: string;
    name: string;
    icon: string;
    dlSelection: DownloadlistSelection;
    menu: string;

    constructor () {
        super(TriggerType.DownloadlistBottombarButtonPressed);
        this.name = buttonName;
        this.shortCutString = shortCutString;
        this.icon = icon;
        this.dlSelection = dlSelection;
        this.menu = menu;
    }
}

export class LinkgrabberBottombarButtonPressedEventTriggerProperties extends EventTriggerProperties {
    lgSelection: LinkgrabberSelection;
    shortCutString: string;
    name: string;
    icon: string;
    menu: string;

    constructor () {
        super(TriggerType.LinkgrabberBottombarButtonPressed);
        this.lgSelection = lgSelection;
        this.name = buttonName;
        this.shortCutString = shortCutString;
        this.icon = icon;
        this.menu = menu;
    }
}

export class TraymenuButtonPressedEventTriggerProperties extends EventTriggerProperties {
    lgSelection: LinkgrabberSelection;
    shortCutString: string;
    name: string;
    icon: string;
    dlSelection: DownloadlistSelection;
    menu: string;

    constructor () {
        super(TriggerType.TraymenuButtonPressed);
        this.lgSelection = lgSelection;
        this.name = buttonName;
        this.shortCutString = shortCutString;
        this.icon = icon;
        this.dlSelection = dlSelection;
        this.menu = menu;
    }
}

export enum PRIORITIES {
    HIGHEST = "HIGHEST", 
    HIGHER = "HIGHER",
    HIGH = "HIGH",
    DEFAULT = "DEFAULT",
    LOW = "LOW",
    LOWER = "LOWER",
    LOWEST = "LOWEST"
}
