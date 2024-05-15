import {
    GET_TRAININGS_SUCCESS,
    GET_HISTORY_SUCCESS,
} from './actions';

const STATE_INITIAL = {
    trainings: [],
    history: [],
};

export function TrainingsReducer(state = STATE_INITIAL, action) {
    switch (action.type) {
        case GET_TRAININGS_SUCCESS:
            return {
                ...state,
                trainings: action?.payload
            }
        case GET_HISTORY_SUCCESS:
            return {
                ...state,
                history: action?.payload
            }
        default:
            return state
    }
}

export const trainingsSelector = (state) => state.trainings?.trainings ?? []
export const historySelector = (state) => state.trainings?.history ?? []