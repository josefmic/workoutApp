import AsyncStorage from "@react-native-async-storage/async-storage";
import {handleResponse} from "../../api/response";

const ROUTINES_KEY = 'routines';

export const SAVE_ROUTINES_LOADING = 'SAVE_ROUTINES_LOADING';
export const SAVE_ROUTINES_SUCCESS = 'SAVE_ROUTINES_SUCCESS';
export const SAVE_ROUTINES_FAILURE = 'SAVE_ROUTINES_FAILURE';
export const saveRoutinesToStorage = (routines) => async (dispatch) => {
    dispatch({
        type: SAVE_ROUTINES_LOADING
    })

    try {
        await AsyncStorage.setItem(ROUTINES_KEY, JSON.stringify(routines));

        dispatch({ type: SAVE_ROUTINES_SUCCESS });
        dispatch({ type: GET_TRAININGS_SUCCESS, payload: routines });
    } catch (error) {
        console.error('Error saving routines: ', error);
        dispatch({ type: SAVE_ROUTINES_FAILURE, payload: error });
    }
}

export const GET_TRAININGS_LOADING = 'GET_TRAININGS_LOADING';
export const GET_TRAININGS_SUCCESS = 'GET_TRAININGS_SUCCESS';
export const GET_TRAININGS_FAILURE = 'GET_TRAININGS_FAILURE';

export const getTrainingsFromStorage = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_TRAININGS_LOADING
        });

        try {
            const response = await AsyncStorage.getItem(ROUTINES_KEY);
            if (response !== null) {
                const data = JSON.parse(response);
                dispatch({ type: GET_TRAININGS_SUCCESS, payload: data });
            } else {
                dispatch({ type: GET_TRAININGS_SUCCESS, payload: [] });
            }
        } catch (error) {
            console.error('Error getting routines from storage: ', error);
            dispatch({ type: GET_TRAININGS_FAILURE, payload: error.message });
        }
    };
};

export const ADD_TRAINING = 'ADD_TRAINING';
export const addTraining = (newTraining) => {
    return async (dispatch) => {
        const response = await AsyncStorage.getItem(ROUTINES_KEY);
        const currentTrainings = response !== null ? JSON.parse(response) : [];

        const updatedTrainings = [...currentTrainings, newTraining];

        dispatch(saveRoutinesToStorage(updatedTrainings));
    };
};
