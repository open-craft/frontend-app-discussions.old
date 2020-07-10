import { configureStore } from '@reduxjs/toolkit';
import { courseThreadsReducer } from './discussions/posts/data';
import { topicsReducer } from './discussions/topics/data';

const store = configureStore({
  reducer: {
    topics: topicsReducer,
    threads: courseThreadsReducer,
  },
});

export default store;
