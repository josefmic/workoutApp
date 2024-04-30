import React from 'react';
import { View, Text, StyleSheet, Switch, TextInput } from 'react-native';
import colors from "../../common/colors";

const NotificationRow = ({ text, isSwitch, switchValue, onSwitchValueChange, isNumberPicker, numberPickerValue, onNumberPickerValueChange }) => {
	return (
		<View style={styles.row}>
			<Text style={styles.text}>{text}</Text>
			{isSwitch && <Switch value={switchValue} onValueChange={onSwitchValueChange} trackColor={{ false: "#767577", true: colors.purple }} />}
			{isNumberPicker && <TextInput style={styles.numberPicker} keyboardType='numeric' value={numberPickerValue.toString()} onChangeText={onNumberPickerValueChange} />}
		</View>
	);
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		padding: 10,
		paddingTop: 20,
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomColor: '#D8D8D8',
	},
	text: {
		fontSize: 16,
		fontWeight: "400",
	},
	numberPicker: {
		width: 50,
		height: 30,
		textAlign: 'center',
		color: colors.purple,
		fontWeight: "400",
		fontSize: 16,
	}
});

export default NotificationRow;