import { createAction } from '@reduxjs/toolkit';
import { ActivateAddingNoteEvent, ChromeEventType } from './types';

export const activateAddingNoteEvent = createAction<ActivateAddingNoteEvent>(ChromeEventType.ACTIVATE_ADDING_NOTE);
