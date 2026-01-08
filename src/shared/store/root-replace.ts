import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './types';

export const rootReplace = createAction<RootState>('ROOT_REPLACE');
export const rootReplaceReducer = (state: RootState, action: PayloadAction<RootState>) => {
    return action.payload;
};
