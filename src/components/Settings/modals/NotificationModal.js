import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import CustomModal from "../../common/CustomModal";
import colors from "../../common/colors";
import NotificationRow from "../helpers/NotificationRow";
import { Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import { scheduleInactiveUserNotification } from "../../common/helpers/registerInactiveUserNotification";

const NotificationsModal = ({ modalVisible, setModalVisible, notificationsActive, setNotificationsActive, inactiveDays, setInactiveDays }) => {
	const closeModal = () => {
		setModalVisible(false);
	}

	const handleNotificationToggle = async (value) => {
		if (value) {
			const { status } = await Notifications.getPermissionsAsync();
			if (status !== 'granted') {
				Alert.alert(
					"Enable Notifications",
					"To receive notifications, please enable them in your system settings.",
					[
						{ text: "Cancel" },
						// cannot open notification settings directly since the iOS doesn't provide a URL for that
						{ text: "Settings", onPress: () => Linking.openURL('app-settings:') }
					]
				);
			} else {
				console.log("Notifications enabled")
				setNotificationsActive(value);
				await scheduleInactiveUserNotification(inactiveDays, true);
			}
		} else {
			setNotificationsActive(value);
			await Notifications.cancelAllScheduledNotificationsAsync();
			await Notifications.setBadgeCountAsync(0);
		}
	}

	const handleInactiveDaysChange = async (value) => {
		setInactiveDays(value);
		await scheduleInactiveUserNotification(value, notificationsActive);
	}

	return (
		<CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
			<View style={styles.container}>
				<TouchableOpacity onPress={closeModal}>
					<MaterialIcons name="arrow-back" size={24} color={colors.purple} />
				</TouchableOpacity>
				<Text style={styles.title}>Notifications</Text>
				<View />
			</View>
			<View style={styles.sectionContainer}>
				<Text style={styles.sectionTitle}>System default</Text>
				<NotificationRow
					text="Activate notifications"
					isSwitch={true}
					switchValue={notificationsActive}
					onSwitchValueChange={handleNotificationToggle} />
				<NotificationRow
					text="Inactive days until notification"
					isNumberPicker={true}
					numberPickerValue={inactiveDays}
					onNumberPickerValueChange={handleInactiveDaysChange} />
			</View>

		</CustomModal>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 20,
		marginBottom: 20,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	sectionContainer: {
		marginBottom: 40,
	},
	sectionTitle: {
		color: '#828282',
		fontFamily: 'Poppins',
		fontSize: 10,
		fontStyle: 'normal',
		fontWeight: '400',
		lineHeight: 20,
		textTransform: 'uppercase',
	}
});

export default NotificationsModal;