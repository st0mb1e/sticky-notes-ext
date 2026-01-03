export enum ChromeEventType {
    ACTIVATE_ADDING_NOTE = 'ACTIVATE_ADDING_NOTE',
}

interface ChromeEventBase {
    sender: chrome.runtime.MessageSender;
    sendResponse: (response?: any) => void; 
}

export interface ChromeEvent extends ChromeEventBase {
    message: unknown;
}

interface ActivateAddingNoteMessage {
    type: ChromeEventType.ACTIVATE_ADDING_NOTE;
}

export interface ActivateAddingNoteEvent extends ChromeEventBase {
    message: ActivateAddingNoteMessage;
}

export function isActivateAddingNoteMessage(message: unknown): message is ActivateAddingNoteMessage {
    return typeof message === 'object' &&
        message !== null &&
        'type' in message &&
        typeof message.type === 'string' &&
        message.type === ChromeEventType.ACTIVATE_ADDING_NOTE;
}
