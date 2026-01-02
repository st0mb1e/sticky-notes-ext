import { all, call, put, takeLatest } from 'typed-redux-saga';
import { activateAddingNote, setIsAddingNoteActive } from './slice';

function* activateAddingNoteSaga() {
    const tabs = (yield* call([chrome.tabs, chrome.tabs.query], {
        active: true,
        currentWindow: true
    })) as chrome.tabs.Tab[];

    console.log('tabs', tabs);

    if (!tabs.length) {
        console.error('No active tabs found');
        return;
    }

    const activeTab = tabs[0];
    if (!activeTab.id) {
        console.error('No active tab id found');
        return;
    }

    yield* call([chrome.tabs, chrome.tabs.sendMessage], activeTab.id, { type: 'ACTIVATE_ADDING_NOTE' });
    yield* put(setIsAddingNoteActive(true));
}

export function* rootExtSaga() {
    yield* all([
        takeLatest(activateAddingNote, activateAddingNoteSaga),
    ]);
}