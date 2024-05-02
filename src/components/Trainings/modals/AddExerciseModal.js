import {View} from "react-native";
import TopButton from "../../common/buttons/TopButton";
import Exercises from "../../Exercises/view/Exercises";
import CustomModal from "../../common/CustomModal";
import {cloneDeep} from "lodash";

const AddExerciseModal = ({setExercisesOpen, exercisesOpen, exercises, setExercises}) => {

    const handleAddExercise = (exercise) => {
        setExercises([...exercises, cloneDeep(exercise)])
        setExercisesOpen(false)
    }

    return (
        <CustomModal
            setModalVisible={setExercisesOpen}
            modalVisible={exercisesOpen}
            modalId="exercises-modal"
            animation="Up"
        >
            <View style={{ marginBottom: 12 }}>
                <TopButton onPress={() => setExercisesOpen(false)} icon="chevron-left" />
            </View>
            <Exercises onClick={(exercise) => handleAddExercise(exercise)} />
        </CustomModal>
    )
}

export default AddExerciseModal