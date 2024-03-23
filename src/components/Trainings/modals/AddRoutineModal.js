import {View, Text} from "react-native";
import TopButton from "../../common/buttons/TopButton";
import CustomModal from "../../common/CustomModal";
import styles from "./AddRoutineModal.styles"

const AddRoutineModal = ({ modalVisible, setModalVisible }) => {
    return (
        <CustomModal setModalVisible={setModalVisible} modalVisible={modalVisible} modalId={"add-routine-modal"}>
            <View style={styles.topButtonsContainer}>
                <TopButton onPress={() => setModalVisible(!setModalVisible)} icon="circle-xmark" />
                <TopButton onPress={() => ""} icon="circle-plus" />
            </View>

            <View>

            </View>
        </CustomModal>
    )
}

export default AddRoutineModal