import {Text, TextInput, View} from 'react-native'
import Button from "../../common/buttons/Button";
import styles from "./AddRoutineModal.styles"
import {useState} from "react";
import { Table, Row } from 'react-native-table-component';
import colors from "../../common/colors";
import Icon from "react-native-vector-icons/FontAwesome6";
import globalStyles from "../../common/GlobalStyles";
import Exercise from "./Exercise";

const ExercisesList = ({ exercises }) => {




    return (
        <View style={styles.exercisesDiv}>
            {exercises.map((e, index) => {
                return (
                    <Exercise key={index} e={e} />
                )
            })}
            <Button
                title="Add to workout routine"
                onClick={() => console.log("test")}
            />
        </View>
    )
}

export default ExercisesList