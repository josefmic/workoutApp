import { View, Text } from "react-native";
import React from "react";
import styles from "./ExerciseModal.styles";

const ModalInfoText = ({ title, body, direction = "row" }) => {
    const renderBody = () => {
        if (Array.isArray(body)) {
            return (
                <View>
                    {body.map((item, index) => (
                        <View style={{ marginVertical: 5 }} key={`exercise-text-${index}`}>
                            <Text key={index} style={styles.numberedList}>
                                <Text style={{ fontWeight: "bold" }}>{`${index + 1}. `}</Text>
                                {item}
                            </Text>
                        </View>
                    ))}
                </View>
            );
        } else {
            return <Text>{body}</Text>;
        }
    };

    return (
        <View style={{ ...styles.infoTextContainer, flexDirection: direction }}>
            <Text style={styles.infoTextTitle}>{title}</Text>
            {renderBody()}
        </View>
    );
};

export default ModalInfoText;
