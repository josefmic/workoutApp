import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import colors from "../../common/colors";

const Tick = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <TouchableOpacity style={[styles.tickBackground, isClicked ? styles.tickBackgroundClicked : styles.tickBackgroundDefault]} onPress={handleClick}>
            <Icon name="check" size={10} style={isClicked ? styles.tickClicked : styles.tick} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tick: {
        padding: 5,
        color: colors.purple,
    },
    tickClicked: {
        padding: 5,
        color: 'white',
    },
    tickBackground: {
        width: 24,
        height: 24,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    tickBackgroundDefault: {
        borderWidth: 1.5,
        borderColor: colors.purple,
    },
    tickBackgroundClicked: {
        backgroundColor: 'green',
    },
});

export default Tick;