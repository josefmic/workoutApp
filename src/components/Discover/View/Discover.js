import {View, Text, StyleSheet, ScrollView} from "react-native";
import ComponentHeader from "../../common/ComponentHeader";
import { useSafeAreaStyles } from "../../common/View.styles";
import WorkoutRow from "../helpers/WorkoutRow";
import { popularWorkouts, forBeginners, upperBodyOnly } from "../mockData/mockWorkouts";

const Discover = () => {
    const commonStyles = useSafeAreaStyles();
    const handleAdd = (workoutName) => {
        console.log(`Adding ${workoutName} from Discover page`);
        // Implement add workout logic
    }

    return (
        <ScrollView>
            <View style={commonStyles.headerContainer}>
                <ComponentHeader title={"Discover"} />
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Popular Workouts:</Text>
                {popularWorkouts.map((workout, index) => (
                    <WorkoutRow key={index} workoutName={workout.name} workoutTarget={workout.target} onAdd={() => handleAdd(workout)} />
                ))}
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>For Beginners:</Text>
                {forBeginners.map((workout, index) => (
                    <WorkoutRow key={index} workoutName={workout.name} workoutTarget={workout.target} onAdd={() => handleAdd(workout)} />
                ))}
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Upper-body only:</Text>
                {upperBodyOnly.map((workout, index) => (
                    <WorkoutRow key={index} workoutName={workout.name} workoutTarget={workout.target} onAdd={() => handleAdd(workout)} />
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionContainer: {
        paddingTop: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
});

export default Discover