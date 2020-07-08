import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './data';

const store = configureStore({
  reducer: {
    discussions: reducer,
  },
});

export default store;
