import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ComponentHeader from '../../common/ComponentHeader';
import CustomModal from '../../common/CustomModal';
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../common/colors";
import { useSafeAreaStyles } from "../../common/View.styles";
import { StyleSheet } from "react-native";
import WorkoutSetRow from "../helpers/WorkoutSetRow";

const WorkoutDetailModal = ({ modalVisible, setModalVisible, workout }) => {
	const commonStyles = useSafeAreaStyles();

	return (
		<CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
			<View style={commonStyles.headerContainer}>
				<TouchableOpacity style={{marginBottom: 10}} onPress={() => setModalVisible(false)}>
					<MaterialIcons name="arrow-back" size={24} color={colors.purple} />
				</TouchableOpacity>
				<ComponentHeader title={"Workout Routine"} />
			</View>
			<View style={styles.descContainer}>
				<Text style={styles.workoutName}>{workout.name}</Text>
				<Text style={styles.workoutTarget}>{workout.target}</Text>
			</View>

			{workout.exercises.map((exercise, index) => (
				<View key={index}>
					<Text style={styles.exerciseName}>{exercise.name}</Text>
					<View style={styles.setsContainer}>
						<WorkoutSetRow set={{number: "SET", weight: "WEIGHT", reps: "REPS"}} />
						{exercise.sets.map((set, index) => (
							<WorkoutSetRow set={set} key={index}/>
						))}
					</View>
				</View>
			))}
		</CustomModal>
	);
};

const styles = StyleSheet.create({
	descContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: "flex-end",
		gap: 20,
	},
	workoutName: {
		fontSize: 24,
		fontWeight: 'bold',
		color: colors.purple,
	},
	workoutTarget: {
		fontSize: 18,
		color: colors.grey,
	},
	exerciseName: {
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 20,
		marginBottom: 10,
		marginLeft: 20,
	},
	setsContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginBottom: 20,
	},
});

export default WorkoutDetailModal;