import * as Notifications from 'expo-notifications';

export const finishWorkoutNotificationTasks = async (inactiveDays, notificationsActive) => {
	if (notificationsActive) {
		await Notifications.setBadgeCountAsync(0);

		await Notifications.cancelAllScheduledNotificationsAsync();

		await Notifications.scheduleNotificationAsync({
			content: {
				title: "Time to exercise",
				body: `You haven't exercised for ${inactiveDays} days`,
			},
			trigger: {
				seconds: inactiveDays * 24 * 60 * 60,
			},
		});
	}
};