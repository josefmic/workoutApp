import {View, Text, Image, ScrollView} from "react-native";
import TopButton from "../../common/buttons/TopButton";
import CustomModal from "../../common/CustomModal";
import styles from "./ExerciseModal.styles"
import ModalInfoText from "./ModalInfoText";
import capitalizeFirstLetter from "../../common/helpers/capitalizeFirstLetter";

const ExerciseModal = ({ modalVisible, setModalVisible, item }) => {
    return (
        <CustomModal setModalVisible={setModalVisible} modalVisible={modalVisible} modalId={`add-routine-modal-${item?.name}`}>
            <View style={styles.modalHeader}>
                <TopButton onPress={() => setModalVisible(!modalVisible)} icon="chevron-left" />
                <Text style={styles.modalHeaderText}>{capitalizeFirstLetter(item?.name ?? "")}</Text>
                <TopButton onPress={() => ""} icon="" />
            </View>
            <ScrollView style={styles.modalContent} showsVerticalScrollIndicator={false}>
                {item.target && (
                    <>
                        <ModalInfoText title="Muscle: " body={capitalizeFirstLetter(item.target)} />
                        <ModalInfoText title="Equipment: " body={capitalizeFirstLetter(item?.equipment ?? "None")} />
                        <ModalInfoText title="Instructions: " body={capitalizeFirstLetter(item?.instructions ?? "")} direction="column" />

                        <Image source={{ uri: item?.gifUrl }} style={{width: 300, height: 300}} />
                    </>
                )}
            </ScrollView>
        </CustomModal>
    )
}

export default ExerciseModal