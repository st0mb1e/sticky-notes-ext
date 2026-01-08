import { eventChannel } from 'redux-saga';
import { put, take } from 'typed-redux-saga';

import { ChromeMessage, isStateUpdateMessage } from './types';
import { rootReplace } from '../root-replace';

function createChromeMessagesChannel() {
    return eventChannel<ChromeMessage>((emit) => {
        const handleMessage = (message: unknown, sender: chrome.runtime.MessageSender) => {
            emit({ message, sender });
        };        

        chrome.runtime.onMessage.addListener(handleMessage);

        return () => {
            chrome.runtime.onMessage.removeListener(handleMessage);
        };
    });
}

export function* watchChromeMessages() {
    const channel = createChromeMessagesChannel();

    while (true) {
        const { message, sender } = yield* take(channel);

        if (isStateUpdateMessage(message)) {
            yield* put(rootReplace(message.state));
            continue;
        }
    }
}
