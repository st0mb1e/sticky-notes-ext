import { type store } from './redux';

export type RootState = ReturnType<typeof store.getState>;
