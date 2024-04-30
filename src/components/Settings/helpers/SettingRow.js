import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from "../../common/colors";

const SettingRow = ({ icon, text, onRowPress, arrowVisible, rightText }) => {
	return (
		<TouchableOpacity style={styles.row} onPress={onRowPress}>
			<View style={styles.iconTextWrapper}>
				<MaterialIcons name={icon} size={24} color={colors.purple} />
				<Text style={styles.text}>{text}</Text>
			</View>
			<View style={styles.rightSection}>
				{rightText && <Text style={styles.text}>{rightText}</Text>}
				{arrowVisible && <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />}
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	row: {
		display: 'flex',
		flexDirection: 'row',
		paddingTop: 20,
		paddingBottom: 10,
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomColor: '#D8D8D8',
	},
	text: {
		color: "#0A0615",
		fontFamily: "Poppins",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "400",
		lineHeight: 20,
	},
	iconTextWrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
	},
	rightText: {
		color: '#737373',
		fontFamily: 'Poppins',
		fontSize: 16,
		fontStyle: 'normal',
		fontWeight: '400',
		lineHeight: 20,
	},
	rightSection: {
		display: "flex",
		flexDirection: "row",
	}
});

export default SettingRow;