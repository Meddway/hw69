import { configureStore } from '@reduxjs/toolkit';
import showsReducer from './showsSlice';

const store = configureStore({
  reducer: showsReducer,
});

export { store };
