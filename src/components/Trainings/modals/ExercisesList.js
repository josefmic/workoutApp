import {ScrollView, Text, TextInput, View} from 'react-native'
import Button from "../../common/buttons/Button";
import styles from "./AddRoutineModal.styles"
import Exercise from "./Exercise";
import {useDispatch, useSelector} from "react-redux";
import {saveRoutinesToStorage} from "../actions";
import {trainingsSelector} from "../reducer";

const ExercisesList = ({ exercises, setExercises, workoutTitle, setModalVisible }) => {

    const dispatch = useDispatch();

    const trainings = useSelector(trainingsSelector)

    const handleSubmit = () => {
        const title = workoutTitle.trim() === "" ? "Untitled workout routine" : workoutTitle;
        dispatch(saveRoutinesToStorage([
            ...(trainings ?? []),
            {
                title: title,
                exercises: exercises
            }
        ]));

        setModalVisible(false)
    };

    return (
        <View style={styles.exercisesDiv}>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                {exercises.map((exercise, index) => {
                    return (
                        <Exercise key={index} exercise={exercise} exercises={exercises} setExercises={setExercises} />
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