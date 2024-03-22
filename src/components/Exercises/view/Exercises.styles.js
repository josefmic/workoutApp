import {StyleSheet} from "react-native";
import colors from "../../common/colors";

const styles = StyleSheet.create({
    item: {
        paddingBottom: 8,
        paddingTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey,
    },
    searchInput: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey,
        backgroundColor: colors.lightGrey,
    },
    searchContainer: {
        backgroundColor: colors.lightGrey,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    letterContainer: {
        paddingTop: 20,
        paddingBottom: 0
    },
    letter: {
        fontWeight: 'bold',
        color: colors.purple,
        fontSize: 15
    },
    flatListContainer: {
        flex: 1,
        padding: 10,
    },
    topContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }
});

export default styles