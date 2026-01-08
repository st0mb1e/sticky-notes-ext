import { all, spawn } from 'typed-redux-saga';
import { watchChromeMessages } from '../../../shared/store/chrome';

export function* rootSaga() {
    yield* all([
        spawn(watchChromeMessages),
    ]);
}
