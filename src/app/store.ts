import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cherkerReducer from '../features/checker/checkerSlice';

export const store = configureStore({
  reducer: {
    checker: cherkerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
