import { all, call, put, takeLatest } from 'typed-redux-saga';
import { activateAddingNote, setIsAddingNoteActive } from './slice';

function* activateAddingNoteSaga() {
    yield* put(setIsAddingNoteActive(true));
    yield* call([chrome.runtime, chrome.runtime.sendMessage], {
        type: 'ACTIVATE_ADDING_NOTE',
    });
}

export function* rootExtSaga() {
    yield* all([
        takeLatest(activateAddingNote, activateAddingNoteSaga),
    ]);
}