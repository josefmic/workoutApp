import colors from "../colors";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.purple,
        paddingVertical: 15,
        paddingHorizontal: 25,
        margin: 10,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 16,
        color: "white"
    },
});

export default styles