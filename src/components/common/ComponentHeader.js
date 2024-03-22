import {StyleSheet, Text} from "react-native";

const ComponentHeader = ({ title }) => {
    const styles = StyleSheet.create({
        header: {
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 10
        }
    });

    return (
        <Text style={styles.header}>{title}</Text>
    )
}

export default ComponentHeader