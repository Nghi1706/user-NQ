import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../../api'

function* fetchPostsSaga(action) {
    try {
        const posts = yield call(api.fetchPosts);
        yield put(actions.getPosts.getPostsSuccess(posts.data));
    } catch (err) {
        console.error(err);
        yield put(actions.getPosts.getPostsFailure(err));
    }
}
function* createSchedule(action) {
    try {
        const schedule = yield call(api.createSchedule, action.payload);
        console.log('[schedule-created]', schedule);
        yield put(actions.createSchedule.createScheduleSuccess(schedule.data));
    } catch (err) {
        console.error(err);
        yield put(actions.createSchedule.createScheduleFailure(err));
    }
}
function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
    yield takeLatest(actions.createSchedule.createScheduleRequest, createSchedule);
}
export default mySaga;