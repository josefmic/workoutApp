import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../common/buttons/Button';
import colors from "../../common/colors";
import { StyleSheet } from "react-native";

const WorkoutRow = ({ workoutName, workoutTarget, onAdd }) => {
	return (
		<View style={styles.container}>
			<View style={styles.leftSide}>
				<Text style={styles.workoutName}>{workoutName}</Text>
				<Text style={styles.workoutTarget}>{workoutTarget}</Text>
			</View>
			<Button title="Add" onClick={onAdd} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 8,
		borderBottomWidth: 1,
		borderBottomColor: "#D8D8D8",
	},
	workoutName: {
		fontSize: 18,
	},
	workoutTarget: {
		fontSize: 14,
		color: "#737373",
	},
	leftSide: {
		display: "flex",
		flexDirection: "column",
		gap: 4,
	},

});

export default WorkoutRow;
