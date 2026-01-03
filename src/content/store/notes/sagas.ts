import { all, put, takeEvery } from 'typed-redux-saga';
import { activateAddingNoteEvent } from '../shared';
import { setIsAddingNoteActive } from './slice';

function* handleActivateAddingNote() {
    yield* put(setIsAddingNoteActive(true));
}

export function* notesRootSaga() {
    yield* all([
        takeEvery(activateAddingNoteEvent, handleActivateAddingNote),
    ]);
}
