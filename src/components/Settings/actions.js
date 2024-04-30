import AsyncStorage from "@react-native-async-storage/async-storage";

export const SET_NOTIFICATION_ENABLED = 'SET_NOTIFICATION_ENABLED';
export const SET_WEIGHT_UNIT = 'SET_WEIGHT_UNIT';
export const SET_INACTIVE_DAYS = 'SET_INACTIVE_DAYS';

const SETTINGS_KEY = 'settings';

export const loadSettings = () => async (dispatch) => {
	try {
		const settings = await AsyncStorage.getItem(SETTINGS_KEY);
		if (settings) {
			const { isNotificationEnabled, weightUnit, inactiveDays } = JSON.parse(settings);
			dispatch(setNotificationEnabled(isNotificationEnabled));
			dispatch(setWeightUnit(weightUnit));
			dispatch(setInactiveDays(inactiveDays));
		}
	} catch (error) {
		console.error('Error loading settings: ', error);
	}
};

export const setNotificationEnabled = (value) => async (dispatch) => {
	dispatch({
		type: SET_NOTIFICATION_ENABLED,
		payload: value,
	});
	await saveSettings();
};

export const setWeightUnit = (value) => async (dispatch) => {
	console.log('Setting weight unit to: ', value);
	dispatch({
		type: SET_WEIGHT_UNIT,
		payload: value,
	});
	await saveSettings();
};

export const setInactiveDays = (value) => async (dispatch) => {
	dispatch({
		type: SET_INACTIVE_DAYS,
		payload: value,
	});
	await saveSettings();
};

const saveSettings = () => async (dispatch, getState) => {
	try {
		const settings = getState().settings;
		await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
	} catch (error) {
		console.error('Error saving settings: ', error);
	}
};