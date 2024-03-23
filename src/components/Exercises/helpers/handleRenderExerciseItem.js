import {Text, TouchableOpacity, View} from "react-native";
import styles from "../view/Exercises.styles";
import Exercise from "../view/Exercise";
import React from "react";

const handleRenderExerciseItem = ({item, onClick}) => {
    if (item.isLetter) {
        return (
            <View style={styles.letterContainer}>
                <Text style={styles.letter}>{item.letter}</Text>
            </View>
        );
    } else {
        return (
            <Exercise item={item} onClick={onClick} />
        );
    }
};

export default handleRenderExerciseItem