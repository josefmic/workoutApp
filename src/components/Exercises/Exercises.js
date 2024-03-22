import {View, Text, ScrollView} from "react-native";
import ComponentHeader from "../common/ComponentHeader";

const Exercises = () => {
    return (
        <ScrollView>
            <ComponentHeader title={"Exercises"} />
            <View>
                <Text>Test</Text>
            </View>
        </ScrollView>
    )
}

export default Exercises