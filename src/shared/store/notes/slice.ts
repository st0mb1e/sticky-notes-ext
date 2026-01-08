import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotesState } from './types';

const initialState: NotesState = {
    isAddingNote: false,
};

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setIsAddingNoteActive(state, action: PayloadAction<boolean>) {
            state.isAddingNote = action.payload;
        },
    },
});

export const notesReducer = notesSlice.reducer;
export const { setIsAddingNoteActive } = notesSlice.actions;
