/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus } from '../constants';


const courseTopicsSlice = createSlice({
  name: 'courseTopics',
  initialState: {
    status: LoadingStatus.LOADING,
    topics: {},
  },
  reducers: {
    fetchCourseTopicsRequest: (state) => {
      state.status = LoadingStatus.LOADING;
    },
    fetchCourseTopicsSuccess: (state, { payload }) => {
      state.status = LoadingStatus.LOADED;
      state.topics = payload;
    },
    fetchCourseTopicsFailed: (state) => {
      state.status = LoadingStatus.FAILED;
    },
    fetchCourseTopicsDenied: (state) => {
      state.status = LoadingStatus.DENIED;
    },
  },
});

export const {
  fetchCourseTopicsRequest,
  fetchCourseTopicsSuccess,
  fetchCourseTopicsFailed,
} = courseTopicsSlice.actions;

export const courseTopicsReducer = courseTopicsSlice.reducer;
