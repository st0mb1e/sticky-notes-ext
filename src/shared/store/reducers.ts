import { combineReducers, createReducer } from '@reduxjs/toolkit';

import { notesReducer } from './notes';
import { rootReplace, rootReplaceReducer } from './root-replace';
import { RootState } from './types';

export const appReducer = combineReducers({
    notes: notesReducer,
});

export const rootReducer = createReducer<RootState>(
    {} as RootState,
    (builder) => {
        builder.addCase(rootReplace, rootReplaceReducer);
        builder.addDefaultCase(appReducer);
    },
);
