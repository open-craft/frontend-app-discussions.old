import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCourseTopics } from '../data/thunks';
import { DiscussionsHome } from './discussions-home';


export default function DiscussionsHomeContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    // The courseId from the URL is the course we WANT to load.
    dispatch(fetchCourseTopics('course-v1:edX+DemoX+2020_01'));
  }, []);
  return (
    <DiscussionsHome/>
  );
};
