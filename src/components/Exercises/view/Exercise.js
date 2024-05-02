import styles from "./Exercises.styles";
import {Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../common/colors";
import {useState} from "react";
import ExerciseModal from "../modals/ExerciseModal";
import capitalizeFirstLetter from "../../common/helpers/capitalizeFirstLetter";

const Exercise = ({ item, onClick }) => {
    const [exModalOpen, setExModalOpen] = useState(false)

    onClick = onClick || (() => setExModalOpen(true))

    return (
        <>
            <TouchableOpacity
                onPress={onClick}
            >
                <View style={styles.item} >
                        <Text>{capitalizeFirstLetter(item?.name)}</Text>
                    <TouchableOpacity
                        onPress={() => setExModalOpen(true)}
                    >
                        <Icon size={24} color={colors.purple} name="chevron-right" />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

            <ExerciseModal modalVisible={exModalOpen} setModalVisible={setExModalOpen} item={item} />
        </>
    )
}

export default Exercise