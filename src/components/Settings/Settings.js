import {View, Text, ScrollView} from "react-native";
import ComponentHeader from "../common/ComponentHeader";

const Settings = () => {
    return (
        <ScrollView>
            <ComponentHeader title={"Settings"} />
            <View>
                <Text>Test</Text>
            </View>
        </ScrollView>
    )
}

export default Settings