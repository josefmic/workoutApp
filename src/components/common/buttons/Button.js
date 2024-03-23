import {TouchableOpacity, Text} from "react-native";
import styles from "./Button.styles"

const Button = ({ title, onClick, ...rest }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onClick} {...rest}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Button