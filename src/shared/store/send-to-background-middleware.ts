import { Middleware } from '@reduxjs/toolkit';
import { deepEqual } from 'fast-equals';
import { MessageType } from '../types/message-type';

export const sendToBackgroundMiddleware: Middleware = (store) => (next) => (action) => {
    const prevState = store.getState();    
    const result = next(action);
    const currState = store.getState();

    if (!deepEqual(prevState, currState)) {
        chrome.runtime.sendMessage({ type: MessageType.STATE_UPDATE, state: currState });
    }

    return result;
};
