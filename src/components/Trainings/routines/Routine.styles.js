import {StyleSheet} from "react-native";
import colors from "../../common/colors";

const styles = StyleSheet.create({
    container: {
        padding: 25,
        borderStyle: "solid",
        borderColor: colors.lightGrey,
        borderWidth: 1.5,
        borderRadius: 15
    },
    title: {
        color: colors.purple,
        fontWeight: "500",
        fontSize: 20,
        marginBottom: 5,
    }
});

export default styles