import {View, Text, ScrollView} from "react-native";
import styles from "./Trainings.styles"
import ComponentHeader from "../common/ComponentHeader";
import RoutineList from "./routines/RoutineList";

const Trainings = () => {
    return (
        <ScrollView>
            <ComponentHeader title={"Workout Routines"} />
            <View>
                <RoutineList />
            </View>
        </ScrollView>
    )
}

export default Trainings