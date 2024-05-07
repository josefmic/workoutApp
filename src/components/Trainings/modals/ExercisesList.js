import {ScrollView, View} from 'react-native'
import Button from "../../common/buttons/Button";
import styles from "./AddRoutineModal.styles"
import Exercise from "./Exercise";
import {useDispatch, useSelector} from "react-redux";
import {saveRoutinesToStorage} from "../actions";
import {trainingsSelector} from "../reducer";

const ExercisesList = ({ exercises, setExercises, workoutTitle, setModalVisible, routineId }) => {

    const dispatch = useDispatch();

    const trainings = useSelector(trainingsSelector)

    const handleSubmit = () => {
        const title = workoutTitle.trim() === "" ? "Untitled workout routine" : workoutTitle;
        const creationDate = new Date();

        // Check if routine with the same title already exists
        const existingRoutineIndex = trainings.findIndex(routine => routine.id === routineId);

        let updatedTrainings;
        if (existingRoutineIndex !== -1) {
            // If routine exists, update it
            updatedTrainings = [...trainings];
            updatedTrainings[existingRoutineIndex] = {
                ...updatedTrainings[existingRoutineIndex],
                exercises: exercises,
                creationDate: creationDate.toString()
            };
        } else {
            // If routine doesn't exist, add it
            updatedTrainings = [
                ...(trainings ?? []),
                {
                    title: title,
                    exercises: exercises,
                    creationDate: creationDate.toString(),
                    id: Date.now().toString()
                }
            ];
        }

        dispatch(saveRoutinesToStorage(updatedTrainings));
        setModalVisible(false)
    };

    return (
        <View style={styles.exercisesDiv}>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                {exercises.map((exercise, index) => {
                    return (
                        <Exercise key={`exercise-${index}`} exercise={exercise} exercises={exercises} setExercises={setExercises} />
                    )
                })}
                <View style={{ marginTop: 15 }}>
                    <Button
                        title="Add to workout routine"
                        onClick={() => handleSubmit()}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default ExercisesList