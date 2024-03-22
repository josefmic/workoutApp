import AsyncStorage from "@react-native-async-storage/async-storage";

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
    } catch (error) {
        console.error('Error saving routines: ', error);
        dispatch({ type: SAVE_ROUTINES_FAILURE, payload: error });
    }
}

export const GET_ROUTINES_LOADING = 'GET_ROUTINES_LOADING';
export const GET_ROUTINES_SUCCESS = 'GET_ROUTINES_SUCCESS';
export const GET_ROUTINES_FAILURE = 'GET_ROUTINES_FAILURE';
export const getRoutinesFromStorage = async (dispatch) => {

    dispatch({
        type: GET_ROUTINES_LOADING
    })

    try {
        const routines = await AsyncStorage.getItem(ROUTINES_KEY);
        dispatch({ type: GET_ROUTINES_SUCCESS, payload: routines ? JSON.parse(routines) : [] });
    } catch (error) {
        console.error('Error retrieving routines: ', error);
        dispatch({ type: GET_ROUTINES_FAILURE, payload: error });
    }
};