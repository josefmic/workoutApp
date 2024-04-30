import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from "../../common/colors";

const UnitSetRow = ({ icon, text, onRowPress }) => {
	return (
		<TouchableOpacity style={styles.row} onPress={onRowPress}>
			<Text style={styles.text}>{text}</Text>
			{icon && <MaterialIcons name={icon} size={24} color={colors.purple} />}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	row: {
		display: 'flex',
		flexDirection: 'row',
		padding: 10,
		paddingTop: 20,
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
});

export default UnitSetRow;