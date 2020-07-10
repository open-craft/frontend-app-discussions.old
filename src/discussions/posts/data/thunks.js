import { logError } from '@edx/frontend-platform/logging';
import { getCourseThreads } from './api';
import { fetchCourseThreadsFailed, fetchCourseThreadsRequest, fetchCourseThreadsSuccess } from './slices';

export function fetchCourseThreads(courseId) {
  return async (dispatch) => {
    try {
      dispatch(fetchCourseThreadsRequest({ courseId }));
      const data = await getCourseThreads(courseId);
      dispatch(fetchCourseThreadsSuccess(data));
    } catch (error) {
      dispatch(fetchCourseThreadsFailed());
      logError(error);
    }
  };
}
