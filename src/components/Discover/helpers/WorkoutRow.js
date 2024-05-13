import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import Button from '../../common/buttons/Button';
import colors from "../../common/colors";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const WorkoutRow = ({ workout, onAdd, onClick, isAdded }) => {
	const handleAdd = (e) => {
		//stop event from bubbling up
		e.stopPropagation();
		onAdd();
	}

	return (
		<TouchableOpacity onPress={onClick}>
			<View style={styles.container}>
				<View style={styles.leftSide}>
					<Text style={styles.workoutName}>{workout.title}</Text>
					<Text style={styles.workoutTarget}>{workout.target}</Text>
				</View>
				{isAdded ? (
					<View style={styles.iconWrapper}>
						<MaterialIcons name="check" size={24} color="green" style={styles.icon}/>
						<Text style={{color: "green"}}>Added</Text>
					</View>
				) : (
					<Button title="Add" onClick={handleAdd} />
				)}
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
		borderBottomWidth: 1,
		borderBottomColor: "#D8D8D8",
		height: 80,
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
	iconWrapper: {
		padding: 8,
		marginVertical: 15,
		marginHorizontal: 15,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default WorkoutRow;
