import {View, Text, StyleSheet, ScrollView} from "react-native";
import ComponentHeader from "../common/ComponentHeader";

const Discover = () => {
    return (
        <ScrollView>
            <ComponentHeader title={"Discover"} />
            <View>
                <Text>Test</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Discover