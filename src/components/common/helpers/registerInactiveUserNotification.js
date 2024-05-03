import * as Notifications from 'expo-notifications';

export const scheduleInactiveUserNotification = async (inactiveDays, notificationsActive) => {
	await Notifications.cancelAllScheduledNotificationsAsync();
	if (notificationsActive) {
		console.log("Scheduling notification");
		await Notifications.scheduleNotificationAsync({
			content: {
				title: "Time to exercise",
				body: "Reminding you to start growing muscles!",
			},
			trigger: {
				seconds: inactiveDays * 24 * 60 * 60,
				repeats: true,
			},
		});
	}
};


// Call this after finishing a workout
export const scheduleNotificationAfterWorkoutFinished = async (inactiveDays, notificationsActive) => {
	await Notifications.setBadgeCountAsync(0);
	await scheduleInactiveUserNotification(inactiveDays, notificationsActive);
}