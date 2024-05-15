import {View} from "react-native";
import Routine from "./Routine";
import {useSelector} from "react-redux";
import {trainingsSelector} from "../reducer";

const RoutineList = () => {
    const routines = useSelector(trainingsSelector)

    return (
        <View>
            {routines.map(((routine, index) =>
                <Routine
                    key={`routine-list-${index}`}
                    routine={routine}
                />
            ))}
        </View>
    )
}

export default RoutineList