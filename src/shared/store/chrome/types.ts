import { MessageType } from '../../types/message-type';
import { RootState } from '../types';

export interface ChromeMessage {
    message: unknown;
    sender: chrome.runtime.MessageSender;
}

interface ChromeTypedMessage {
    type: MessageType;
}

export interface StateUpdatedMessage {
    type: MessageType.STATE_UPDATE;
    state: RootState;
}

function isChromeTypedMessage(message: unknown): message is ChromeTypedMessage {
    return typeof message === 'object' &&
        message !== null &&
        'type' in message &&
        typeof message.type === 'string';
}

export function isStateUpdateMessage(message: unknown): message is StateUpdatedMessage {
    return isChromeTypedMessage(message) &&
        message.type === MessageType.STATE_UPDATE;
}
