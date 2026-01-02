import { all, spawn } from 'typed-redux-saga';
import { rootExtSaga } from './ext/sagas';

export function* rootSaga() {
    yield* all([
        spawn(rootExtSaga),
    ]);
}