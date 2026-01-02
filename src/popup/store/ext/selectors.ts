import { RootState } from '../types';

export const selectIsAddingNoteActive = (state: RootState) =>
    state.ext.isAddingNoteActive;
