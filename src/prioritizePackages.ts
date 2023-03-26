import { getEventTriggerProperties, ToolbarButtonPressedEventTriggerProperties, PRIORITIES, IntervalEventTriggerProperties} from './eventTriggers';

export function prioritizePackagesButtonEvent() {
    //Get properties of correct type
    const eventTriggerProps = getEventTriggerProperties(ToolbarButtonPressedEventTriggerProperties);
    if(!eventTriggerProps) return;

    //Check preconditions
    if(eventTriggerProps.name != "Prioritize Packages") return;

    //Do action
    let changedPackageCount = prioritizePackages();
    alert("Finished prioritizing packages. Changed: " + changedPackageCount);
}

export function prioritizePackagesIntervalEvent() {
    //Get properties of correct type
    const eventTriggerProps = getEventTriggerProperties(IntervalEventTriggerProperties);
    if(!eventTriggerProps) return;

    //Check preconditions

    //Do action
    let changedPackageCount = prioritizePackages();
}

function prioritizePackages():number {
    const filePackages = getAllFilePackages();
    let changedPackageCount = 0;
    for(var i = 0; i < filePackages.length; ++i) {
        if(prioritizePackage(filePackages[i])){
            ++changedPackageCount;
        }
    }
    return changedPackageCount;
}

function prioritizePackage(filePackage:FilePackage) {
    if(filePackage.isFinished()) {
        return false;
    }

    var priority = filePackage.getPriority();
    switch(priority) {
        case PRIORITIES.HIGHEST:
        case PRIORITIES.HIGHER:
        case PRIORITIES.LOWEST:
            //Skip if not in the middle priorities
            return false;
    }

    var links = filePackage.getDownloadLinks();
    var finishedLinks = 0;
    for(var i = 0; i < links.length; ++i) {
        if(links[i].isFinished()) {
            ++finishedLinks;
        }
    }

    var remainingLinks = links.length - finishedLinks;
    if(remainingLinks < 10) {
        filePackage.setPriority(PRIORITIES.HIGH);
    } else if (remainingLinks < 100) {
        filePackage.setPriority(PRIORITIES.DEFAULT);
    } else if (remainingLinks < 1000) {
        filePackage.setPriority(PRIORITIES.LOW);
    } else {
        filePackage.setPriority(PRIORITIES.LOWER);
    }

    var changedPriority = priority != filePackage.getPriority();
    if(changedPriority || true) {
        for(var i = 0; i < links.length; ++i) {
            if(!links[i].isFinished()) {
                links[i].setPriority(PRIORITIES.DEFAULT);
            }
        }
    }
    return changedPriority;
}