import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducers';
import { sendToBackgroundMiddleware } from './send-to-background-middleware';

export const createStore = (...runSagaArgs: Parameters<ReturnType<typeof createSagaMiddleware>['run']>) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({ thunk: false })
                .concat(sagaMiddleware)
                .concat(sendToBackgroundMiddleware),
    });

    sagaMiddleware.run(...runSagaArgs);

    return store;
};
