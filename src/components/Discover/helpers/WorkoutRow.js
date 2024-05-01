import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import Button from '../../common/buttons/Button';
import colors from "../../common/colors";
import { StyleSheet } from "react-native";

const WorkoutRow = ({ workout, onAdd, onClick }) => {
	const handleAdd = (e) => {
		//stop event from bubbling up
		e.stopPropagation();
		onAdd();
	}

	return (
		<TouchableOpacity onPress={onClick}>
			<View style={styles.container}>
				<View style={styles.leftSide}>
					<Text style={styles.workoutName}>{workout.name}</Text>
					<Text style={styles.workoutTarget}>{workout.target}</Text>
				</View>
				<Button title="Add" onClick={handleAdd} />
			</View>
		</TouchableOpacity>
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
