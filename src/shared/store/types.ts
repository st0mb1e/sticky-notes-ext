import { type appReducer } from './reducers';

export type RootState = ReturnType<typeof appReducer>
