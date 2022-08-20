import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import searchReducer from './reducers/searchSlice';
import { SearchApi } from './api/searchWord';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
    [SearchApi.reducerPath]: SearchApi.reducer
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
