import {View, Text, StyleSheet, ScrollView} from "react-native";
import ComponentHeader from "../../common/ComponentHeader";
import { useSafeAreaStyles } from "../../common/View.styles";
import WorkoutRow from "../helpers/WorkoutRow";
import { popularWorkouts, forBeginners, upperBodyOnly } from "../mockData/mockWorkouts";
import styles from "./Discover.styles";
import { useState } from "react";
import WorkoutDetailModal from "../modals/WorkoutDetailModal";

const Discover = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedWorkout, setSelectedWorkout] = useState(null);

    const commonStyles = useSafeAreaStyles();
    const handleAdd = (workoutName) => {
        console.log(`Adding ${workoutName} from Discover page`);
        // Implement add workout logic
    }

    const handleWorkoutClick = (workout) => {
        setSelectedWorkout(workout);
        setModalVisible(true);
    }

    return (
        <ScrollView>
            <View style={commonStyles.headerContainer}>
                <ComponentHeader title={"Discover"} />
            </View>
            <Text style={styles.helperText}>Click on workout to see the details!</Text>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Popular Workouts:</Text>
                {popularWorkouts.map((workout, index) => (
                    <WorkoutRow
                        key={index}
                        workout={workout}
                        onAdd={() => handleAdd(workout)}
                        onClick={() => handleWorkoutClick(workout)}
                    />
                ))}
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>For Beginners:</Text>
                {forBeginners.map((workout, index) => (
                    <WorkoutRow
                        key={index}
                        workout={workout}
                        onAdd={() => handleAdd(workout)}
                        onClick={() => handleWorkoutClick(workout)}
                    />
                ))}
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Upper-body only:</Text>
                {upperBodyOnly.map((workout, index) => (
                    <WorkoutRow
                        key={index}
                        workout={workout}
                        onAdd={() => handleAdd(workout)}
                        onClick={() => handleWorkoutClick(workout)}
                    />
                ))}
            </View>
            {modalVisible && <WorkoutDetailModal modalVisible={modalVisible} setModalVisible={setModalVisible} workout={selectedWorkout} />}
        </ScrollView>
    )
}

export default Discover