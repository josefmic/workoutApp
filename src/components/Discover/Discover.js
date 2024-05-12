import {View, Text, StyleSheet, ScrollView} from "react-native";
import ComponentHeader from "../common/ComponentHeader";
import globalStyles from "../common/GlobalStyles";

const Discover = () => {
    return (
        <ScrollView style={globalStyles.defaultPadding}>
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