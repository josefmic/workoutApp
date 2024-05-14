import {
    GET_TRAININGS_SUCCESS,
} from './actions';

const STATE_INITIAL = {
    trainings: [],
};

export function TrainingsReducer(state = STATE_INITIAL, action) {
    switch (action.type) {
        case GET_TRAININGS_SUCCESS:
            return {
                ...state,
                trainings: action?.payload
            }
        default:
            return state
    }
}

export const trainingsSelector = (state) => state.trainings?.trainings ?? []