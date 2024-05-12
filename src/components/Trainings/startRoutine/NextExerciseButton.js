import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const NextExerciseButton = ({ children, action }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={action}>
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "auto",
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "#F3F3F3",
        borderRadius: 8,
        marginBottom: 20,
    },
});

export default NextExerciseButton;