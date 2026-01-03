import { all, spawn } from 'typed-redux-saga';
import { sharedRootSaga } from './shared';
import { notesRootSaga } from './notes/sagas';

export function* rootSaga() {
    yield* all([
        spawn(sharedRootSaga),
        spawn(notesRootSaga),
    ]);
}
