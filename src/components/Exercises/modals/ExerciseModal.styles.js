import { StyleSheet } from "react-native";
import colors from "../../common/colors";

const styles = StyleSheet.create({
    modalHeader: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    modalHeaderText: {
        fontSize: 18,
        fontWeight: "bold",
        flex: 1,
        textAlign: "center",
    },
    modalContent: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 5,
    },
    youtubeButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.lightGrey,
        padding: 10,
        borderRadius: 5,
        marginTop: 30,
        justifyContent: "center",
    },
    youtubeButtonText: {
        color: "black",
        fontSize: 16,
        marginLeft: 5,
        fontWeight: "bold"
    },
    youtubeIcon: {
        marginRight: 5,
    },
    infoTextContainer: {
        display: "flex",
    },
    infoText: {

    },
    infoTextTitle: {
        fontWeight: "bold",
        fontSize: 16,
        paddingBottom: 10
    }
});

export default styles;
