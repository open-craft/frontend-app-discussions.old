/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus } from '../../../data/constants';


const courseThreadsSlice = createSlice({
  name: 'courseThreads',
  initialState: {
    status: LoadingStatus.LOADING,
    page: null,
    threads: [],
    totalPages: null,
    totalThreads: null,
  },
  reducers: {
    fetchCourseThreadsRequest: (state) => {
      state.status = LoadingStatus.LOADING;
    },
    fetchCourseThreadsSuccess: (state, { payload }) => {
      state.status = LoadingStatus.LOADED;
      state.threads = payload.results;
      state.page = payload.pagination.page;
      state.totalPages = payload.pagination.num_pages;
      state.totalThreads = payload.pagination.count;
    },
    fetchCourseThreadsFailed: (state) => {
      state.status = LoadingStatus.FAILED;
    },
    fetchCourseThreadsDenied: (state) => {
      state.status = LoadingStatus.DENIED;
    },
  },
});

export const {
  fetchCourseThreadsRequest,
  fetchCourseThreadsSuccess,
  fetchCourseThreadsFailed,
} = courseThreadsSlice.actions;

export const courseThreadsReducer = courseThreadsSlice.reducer;
