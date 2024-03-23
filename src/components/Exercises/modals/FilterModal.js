import {Text, View} from "react-native";
import CustomModal from "../../common/CustomModal";
import colors from "../../common/colors";
import styles from "./FilterModal.styles"
import Icon from "react-native-vector-icons/FontAwesome6";

const FilterModal = ({ modalVisible, setModalVisible, query, setQuery }) => {
    return (
        <CustomModal
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
            modalId={`exercise-filter-modal`}
            animation="Up"
            height={0.5}
            customStyles={{
                borderRadius: 10,
                borderWidth: 2,
                borderColor: colors.lightGrey
            }}
        >
            <View style={styles.container}>
                <Text style={styles.filterHeader}>
                    <Icon size={24} color={colors.purple} name="filter" /> Filter
                </Text>
            </View>
        </CustomModal>
    )
}

export default FilterModal