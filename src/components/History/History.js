import {View, Text, ScrollView} from "react-native";
import ComponentHeader from "../common/ComponentHeader";
import globalStyles from "../common/GlobalStyles";

const History = () => {
    return (
        <ScrollView style={globalStyles.defaultPadding}>
            <ComponentHeader title={"History"} />
            <View>
                <Text>Test</Text>
            </View>
        </ScrollView>
    )
}

export default History