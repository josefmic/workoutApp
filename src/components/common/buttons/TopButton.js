import {TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import colors from "../colors";

const TopButton = ({ onPress, icon }) => {
    return (
        <TouchableOpacity
            style={{paddingTop: 10, paddingBottom: 10}}
            onPress={() => onPress()}
        >
            <Icon name={icon} size={35} color={colors.purple} />
        </TouchableOpacity>
    );
}

export default TopButton