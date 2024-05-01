import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WorkoutSetRow = ({ set }) => {
	return (
		<View style={styles.container}>
			<Text>{set.number}</Text>
			<Text>{set.weight}</Text>
			<Text>{set.reps}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		width: 320,
		padding: 16,
		paddingHorizontal: 16,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		borderBottomWidth: 1,
		borderBottomColor: "#DCDCDC",
	},
});

export default WorkoutSetRow;