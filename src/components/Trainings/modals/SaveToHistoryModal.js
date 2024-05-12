import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import TopButton from "../../common/buttons/TopButton";
import CustomModal from "../../common/CustomModal";
import colors from "../../common/colors";
import Button from "../../common/buttons/Button";
import {useState} from "react";
import {launchCamera, launchImageLibrary} from "react-native-image-picker";
import {saveHistoryToStorage} from "../actions";
import {useDispatch, useSelector} from "react-redux";
import {historySelector} from "../reducer";

const SaveToHistoryModal = ({ modalVisible, setModalVisible, setStartExerciseModalVisible, historyObject }) => {
    const dispatch = useDispatch();
    const historyData = useSelector(historySelector);
    const [photo, setPhoto] = useState(null);

    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setPhoto(imageUri);
            }
        });
    };

    const finalHistoryObject = {
        ...historyObject,
        photo: photo ?? null,
    }

    const saveHistory = () => {
        dispatch(saveHistoryToStorage([
            ...historyData,
            finalHistoryObject
        ]))
    }

    return (
        <CustomModal
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
            modalId={"save-to-history-modal"}
        >
            <View style={styles.topButtonsContainer}>
                <TopButton
                    onPress={() => {
                        setStartExerciseModalVisible(false)
                    }}
                    size={24}
                    icon="trash"
                />
                <Text style={styles.boldText}>
                    {historyObject?.routineName ?? "Untitled routine"}
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        saveHistory()
                        setStartExerciseModalVisible(false)
                    }}>
                    <Text style={styles.boldPurpleText}>
                        Save
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <Text style={styles.boldText}>
                    Workout details
                </Text>
                <View style={styles.dataRow}>
                    <Text style={styles.boldText}>
                        Start time
                    </Text>
                    <Text style={styles.boldPurpleText}>
                        {historyObject?.start}
                    </Text>
                </View>
                <View style={styles.dataRow}>
                    <Text style={styles.boldText}>
                        End time
                    </Text>
                    <Text style={styles.boldPurpleText}>
                        {historyObject?.finish}
                    </Text>
                </View>
                <Button title={"Take a Photo"} onPress={openImagePicker} />
            </View>
        </CustomModal>
    )
}

const styles = StyleSheet.create({
    topButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    boldText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    normalText: {
        fontSize: 16,
    },
    boldPurpleText: {
        color: colors.purple,
        fontSize: 16,
        fontWeight: "bold",
    },
    body: {
        display: "flex",
        flexDirection: "column",
        gap: 20,
        marginTop: 20,
    },
    dataRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
})

export default SaveToHistoryModal