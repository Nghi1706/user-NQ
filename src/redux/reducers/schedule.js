import { INIT_STATE } from "../../constant";
import { createSchedule, getType } from "../actions";

export default function scheduleReducer(state = INIT_STATE.posts, action) {
    switch (action.type) {
        case getType(createSchedule.createScheduleRequest):
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case getType(createSchedule.createScheduleSuccess):
            return {
                ...state,
                isLoading: false,
                data: [...state.data, action.payload],
            };
        case getType(createSchedule.createScheduleFailure):
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
}