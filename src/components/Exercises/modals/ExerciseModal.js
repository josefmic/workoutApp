import {View, Text, Linking, TouchableOpacity} from "react-native";
import TopButton from "../../common/buttons/TopButton";
import CustomModal from "../../common/CustomModal";
import styles from "./ExerciseModal.styles"
import Icon from "react-native-vector-icons/FontAwesome6";
import ModalInfoText from "./ModalInfoText";

const ExerciseModal = ({ modalVisible, setModalVisible, item }) => {
    return (
        <CustomModal setModalVisible={setModalVisible} modalVisible={modalVisible} modalId={`add-routine-modal-${item?.WorkOut}`}>
            <View style={styles.modalHeader}>
                <TopButton onPress={() => setModalVisible(!modalVisible)} icon="chevron-left" />
                <Text style={styles.modalHeaderText}>{item?.WorkOut}</Text>
                <TopButton onPress={() => ""} icon="" />
            </View>
            <View style={styles.modalContent}>
                {item.Muscles && (
                    <>
                        <ModalInfoText title="Muscle: " body={item.Muscles} />
                        <ModalInfoText title="Equipment: " body={item.Equipment ?? "None"} />
                        <ModalInfoText title="Difficulty: " body={item.Intensity_Level} />
                        <ModalInfoText title="Instructions: " body={item["Long Explanation"]} direction="column" />

                        <TouchableOpacity style={styles.youtubeButton} onPress={() => Linking.openURL(item.Video)}>
                            <Icon name="youtube" size={24} color="red" style={styles.youtubeIcon} />
                            <Text style={styles.youtubeButtonText}>Watch Tutorial</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </CustomModal>
    )
}

export default ExerciseModal