import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as BackgroundFetch from 'expo-background-fetch';

export async function task() {
	const notificationsActive = await AsyncStorage.getItem('notificationsActive');
	const lastExerciseTimestamp = await AsyncStorage.getItem('lastExerciseTimestamp');
	const inactiveDays = await AsyncStorage.getItem('inactiveDays');

	if (notificationsActive === 'true') {
		const currentTime = Date.now();
		const timeDifference = currentTime - lastExerciseTimestamp;

		if (timeDifference >= inactiveDays * 24 * 60 * 60 * 1000) {
			await Notifications.scheduleNotificationAsync({
				content: {
					title: "Time to exercise",
					body: "You haven't exercised today",
				},
				trigger: {
					seconds: 24 * 60 * 60,
				},
			});
		}
	}

	return BackgroundFetch.BackgroundFetchResult.NewData;
}