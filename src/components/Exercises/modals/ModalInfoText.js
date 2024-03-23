import {View,Text} from "react-native";
import styles from "./ExerciseModal.styles"

const ModalInfoText = ({ title, body, direction = "row" }) => {
    return (
        <View style={{ ...styles.infoTextContainer, flexDirection: direction }}>
            <Text style={styles.infoTextTitle}>
                {title}
            </Text>
            <Text>
                {body}
            </Text>
        </View>
    )
}

export default ModalInfoText