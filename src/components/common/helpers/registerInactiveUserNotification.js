import * as Notifications from 'expo-notifications';

export const scheduleInactiveUserNotification = async (inactiveDays, notificationsActive) => {
	await Notifications.cancelAllScheduledNotificationsAsync();
	if (notificationsActive) {
		console.log("Scheduling notification for: ", inactiveDays + " days");
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


// ONLY for testing purposes
export const scheduleTestingNotification = async (inactiveDays, notificationActive) => {
	await Notifications.cancelAllScheduledNotificationsAsync();
	if (notificationActive) {
		console.log("Scheduling notification for: ", inactiveDays, " minutes");
		await Notifications.scheduleNotificationAsync({
			content: {
				title: "Time to exercise",
				body: "Reminding you to start growing muscles!",
			},
			trigger: {
				seconds: inactiveDays * 60, // inactiveDays are number of minutes in testing cases
				repeats: true,
			},
		});
	}
}