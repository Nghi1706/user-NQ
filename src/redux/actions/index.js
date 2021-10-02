import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type;
}
export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostsSuccess: (payload) => payload,
    getPostsFailure: (err) => err,
});
export const createSchedule = createActions({
    createScheduleRequest: (payload) => payload,
    createScheduleSuccess: (payload) => payload,
    createScheduleFailure: (err) => err,
});