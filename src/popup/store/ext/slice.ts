import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExtState } from './types';

const initialState: ExtState = {
    isAddingNoteActive: false,
};

const extSlice = createSlice({
    name: 'ext',
    initialState,
    reducers: {
        setIsAddingNoteActive(state, action: PayloadAction<boolean>) {
            state.isAddingNoteActive = action.payload;
        },
    },
});

export const extReducer = extSlice.reducer;
export const { setIsAddingNoteActive } = extSlice.actions;
export const activateAddingNote = createAction('ext/activateAddingNote');
