import {StyleSheet} from "react-native";
import colors from "../../common/colors";

const styles = StyleSheet.create({
    filterHeader: {
        color: colors.purple,
        display: "flex",
        flexDirection: "row",
        fontSize: 24,
        fontWeight: "bold",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles