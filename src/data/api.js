/* eslint-disable import/prefer-default-export */
import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';

const API_BASE_URL = getConfig().LMS_BASE_URL;

function getDiscussionAPIUrl(name, courseId, ...params) {
  const path = {
    follow_discussion: `/courses/${courseId}/discussion/${params[0]}/follow`,
    unfollow_discussion: `/courses/${courseId}/discussion/${params[0]}/unfollow`,
    create_thread: `/courses/${courseId}/discussion/${params[0]}/threads/create`,
    update_thread: `/courses/${courseId}/discussion/threads/${params[0]}/update`,
    create_comment: `/courses/${courseId}/discussion/threads/${params[0]}/reply`,
    delete_thread: `/courses/${courseId}/discussion/threads/${params[0]}/delete`,
    flagAbuse_thread: `/courses/${courseId}/discussion/threads/${params[0]}/flagAbuse`,
    unFlagAbuse_thread: `/courses/${courseId}/discussion/threads/${params[0]}/unFlagAbuse`,
    flagAbuse_comment: `/courses/${courseId}/discussion/comments/${params[0]}/flagAbuse`,
    unFlagAbuse_comment: `/courses/${courseId}/discussion/comments/${params[0]}/unFlagAbuse`,
    upvote_thread: `/courses/${courseId}/discussion/threads/${params[0]}/upvote`,
    downvote_thread: `/courses/${courseId}/discussion/threads/${params[0]}/downvote`,
    pin_thread: `/courses/${courseId}/discussion/threads/${params[0]}/pin`,
    un_pin_thread: `/courses/${courseId}/discussion/threads/${params[0]}/unpin`,
    undo_vote_for_thread: `/courses/${courseId}/discussion/threads/${params[0]}/unvote`,
    follow_thread: `/courses/${courseId}/discussion/threads/${params[0]}/follow`,
    unfollow_thread: `/courses/${courseId}/discussion/threads/${params[0]}/unfollow`,
    update_comment: `/courses/${courseId}/discussion/comments/${params[0]}/update`,
    endorse_comment: `/courses/${courseId}/discussion/comments/${params[0]}/endorse`,
    create_sub_comment: `/courses/${courseId}/discussion/comments/${params[0]}/reply`,
    delete_comment: `/courses/${courseId}/discussion/comments/${params[0]}/delete`,
    upvote_comment: `/courses/${courseId}/discussion/comments/${params[0]}/upvote`,
    downvote_comment: `/courses/${courseId}/discussion/comments/${params[0]}/downvote`,
    undo_vote_for_comment: `/courses/${courseId}/discussion/comments/${params[0]}/unvote`,
    upload: `/courses/${courseId}/discussion/upload`,
    users: `/courses/${courseId}/discussion/users`,
    search: `/courses/${courseId}/discussion/forum/search`,
    retrieve_discussion: `/courses/${courseId}/discussion/forum/${params[0]}/inline`,
    retrieve_single_thread: `/courses/${courseId}/discussion/forum/${params[0]}/threads/${params[1]}`,
    openclose_thread: `/courses/${courseId}/discussion/threads/${params[0]}/close`,
    user_profile: `/courses/${courseId}/discussion/forum/users/${params[0]}`,
    followed_threads: `/courses/${courseId}/discussion/forum/users/${params[0]}/followed`,
    threads: `/courses/${courseId}/discussion/forum/`,
    enable_notifications: '/notification_prefs/enable/',
    disable_notifications: '/notification_prefs/disable/',
    notifications_status: '/notification_prefs/status/',
    general_metadata: `/api/discussion/v1/courses/${courseId}`,
  }[name];
  return new URL(`${getConfig().LMS_BASE_URL}${path}`);
}


export async function getCourseThreads(
  courseId, {
    page, pageSize, topicIds, textSearch, orderBy, following, view, requestedFields,
  } = {},
) {
  const url = new URL(`${API_BASE_URL}/api/discussion/v1/threads/`);
  const paramsMap = {
    page,
    page_size: pageSize,
    topic_id: topicIds.join(','),
    text_search: textSearch,
    order_by: orderBy,
    following,
    view,
    requested_fields: requestedFields,
  };
  url.searchParams.append('course_id', courseId);
  Object.keys(paramsMap)
    .forEach(
      (param) => {
        const paramValue = paramsMap[param];
        if (paramValue) {
          url.searchParams.append(param, paramValue);
        }
      },
    );

  const { data } = await getAuthenticatedHttpClient()
    .get(url);
  return data;
}

export async function getCourseTopics(courseId, topicIds) {
  const url = new URL(`${API_BASE_URL}/api/discussion/v1/course_topics/${courseId}`);
  if (topicIds) {
    url.searchParams.append('topic_id', topicIds.join(','));
  }
  const { data } = await getAuthenticatedHttpClient()
    .get(url);
  return data;
}

export function aa(m) {
  getCourseThreads('course-v1:edX+DemoX+Demo_Course')
    .then(
      x => console.log(x)
    );
  getCourseTopics('course-v1:edX+DemoX+Demo_Course')
    .then(
      x => console.log(x)
    );
}
