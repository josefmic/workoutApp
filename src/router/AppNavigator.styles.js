import {StyleSheet} from "react-native";
import colors from "../components/common/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10
    },
    bottomNavigation: {
        shadowOffset: { width: 0, height: -2 },
        paddingTop: 5,
    },
});

export default styles