import {
    GET_EXERCISES_SUCCESS,
} from './actions';

const STATE_INITIAL = {
    exercises: [],
};

export function ExercisesReducer(state = STATE_INITIAL, action) {
    switch (action.type) {
        case GET_EXERCISES_SUCCESS:
            return {
                ...state,
                exercises: action.payload || []
            }
        default:
            return state
    }
}

export const exercisesSelector = (state) => state.exercises.exercises