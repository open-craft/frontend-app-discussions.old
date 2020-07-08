import { logError } from '@edx/frontend-platform/logging';
import { getCourseTopics } from './api';
import { fetchCourseTopicsRequest, fetchCourseTopicsSuccess, fetchCourseTopicsFailed } from './slices/course_topics';

export function fetchCourseTopics(courseId) {
  return async (dispatch) => {
    try {
      dispatch(fetchCourseTopicsRequest({ courseId }));
      const data = await getCourseTopics(courseId);
      dispatch(fetchCourseTopicsSuccess(data));
    } catch (error) {
      dispatch(fetchCourseTopicsFailed());
      logError(error);
    }
  };
}
