import {
    GET_ROUTINES_SUCCESS,
} from './actions';

const STATE_INITIAL = {
    routines: [],
};

export function TrainingsReducer(state = STATE_INITIAL, action) {
    switch (action.type) {
        case GET_ROUTINES_SUCCESS:
            return {
                ...state,
                routines: action.data
            }
        default:
            return state
    }
}

export const routinesSelector = (state) => state.routines