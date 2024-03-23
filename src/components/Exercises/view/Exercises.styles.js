import {StyleSheet} from "react-native";
import colors from "../../common/colors";

const styles = StyleSheet.create({
    item: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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
        width: "80%",
    },
    searchContainer: {
        backgroundColor: colors.lightGrey,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        borderRadius: 10
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
        paddingBottom: 25
    },
    topContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 10
    }
});

export default styles