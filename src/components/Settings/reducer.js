const initialState = {
	isNotificationEnabled: false,
	weightUnit: 'kg',
	inactiveDays: 5,
};

const settingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_NOTIFICATION_ENABLED':
			return { ...state, isNotificationEnabled: action.payload };
		case 'SET_WEIGHT_UNIT':
			console.log('New state after setting weight unit: ', { ...state, weightUnit: action.payload });
			return { ...state, weightUnit: action.payload };
		case 'SET_INACTIVE_DAYS':
			return { ...state, inactiveDays: action.payload };
		default:
			return state;
	}
};

export default settingsReducer;