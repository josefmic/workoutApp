import {ScrollView, Text, TextInput, View} from 'react-native'
import Button from "../../common/buttons/Button";
import styles from "./AddRoutineModal.styles"
import Exercise from "./Exercise";

const ExercisesList = ({ exercises }) => {
    return (
        <ScrollView contentContainerStyle={styles.exercisesDiv}>
                {exercises.map((e, index) => {
                    return (
                        <Exercise key={index} e={e} />
                    )
                })}
            <View style={{ marginTop: 15 }}>
                <Button
                    title="Add to workout routine"
                    onClick={() => console.log("test")}
                />
            </View>
        </ScrollView>
    )
}

export default ExercisesList