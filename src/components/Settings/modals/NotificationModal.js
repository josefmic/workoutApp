// NotificationsModal.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CustomModal from "../../common/CustomModal";
import colors from "../../common/colors";
import NotificationRow from "../helpers/NotificationRow";

const NotificationsModal = ({ modalVisible, setModalVisible, notificationsActive, setNotificationsActive, inactiveDays, setInactiveDays }) => {
	const closeModal = () => {
		setModalVisible(false);
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
				<NotificationRow text="Activate notifications" isSwitch={true} switchValue={notificationsActive} onSwitchValueChange={setNotificationsActive} />
				<NotificationRow text="Inactive days until notification" isNumberPicker={true} numberPickerValue={inactiveDays} onNumberPickerValueChange={setInactiveDays} />
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