import { eventChannel } from 'redux-saga';
import { all, fork, put, take } from 'typed-redux-saga';
import { ChromeEvent, isActivateAddingNoteMessage } from './types';
import { activateAddingNoteEvent } from './actions';

function createMessageChannel() {
    return eventChannel<ChromeEvent>((emit) => {
        const handleMessage = (
            message: unknown,
            sender: chrome.runtime.MessageSender,
            sendResponse: (response?: any) => void
        ) => {
            emit({ message, sender, sendResponse });
        }       

        chrome.runtime.onMessage.addListener(handleMessage);

        return () => {
            chrome.runtime.onMessage.removeListener(handleMessage);
        };
    });
}

function* messageWatcher() {
    const channel = createMessageChannel();

    while (true) {
        const { message, ...evt } = yield* take(channel);

        if (isActivateAddingNoteMessage(message)) {
            yield* put(activateAddingNoteEvent({ message, ...evt }));
            continue;
        }
    }
}

export function* sharedRootSaga() {
    yield* all([
        fork(messageWatcher),
    ]);
}
