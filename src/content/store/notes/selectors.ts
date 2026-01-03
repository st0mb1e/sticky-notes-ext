import { RootState } from '../types';

export const selectIsAddingNote = (state: RootState) =>
    state.notes.isAddingNote;
