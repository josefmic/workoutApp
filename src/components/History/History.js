import {View, Text, ScrollView} from "react-native";
import ComponentHeader from "../common/ComponentHeader";

const History = () => {
    return (
        <ScrollView>
            <ComponentHeader title={"History"} />
            <View>
                <Text>Test</Text>
            </View>
        </ScrollView>
    )
}

export default History