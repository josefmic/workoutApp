import {Text, View} from "react-native";
import CustomModal from "../../common/CustomModal";
import colors from "../../common/colors";
import styles from "./FilterModal.styles"
import Icon from "react-native-vector-icons/FontAwesome6";
import {Dropdown} from "react-native-element-dropdown";
import {useState} from "react";
import {equipmentOptions, muscleOptions} from "../helpers/exerciseFilterOptions";
import Button from "../../common/buttons/Button";


const FilterModal = ({ modalVisible, setModalVisible, setQuery, query }) => {
    const [muscle, setMuscle] = useState()
    const [equipment, setEquipment] = useState()

    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
                {item.value === muscle || item.value === equipment ? (
                    <Icon
                        style={styles.icon}
                        color={colors.purple}
                        name="circle-check"
                        size={20}
                    />
                ) : null}
            </View>
        );
    };

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
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={muscleOptions}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select muscle"
                    searchPlaceholder="Search..."
                    value={muscle}
                    onChange={item => {
                        setMuscle(item.value);
                    }}
                    renderRightIcon={() => (
                        <Icon style={styles.icon} color={colors.purple} name="caret-down" size={20} />
                    )}
                    renderItem={renderItem}
                    dropdownPosition="top"
                />
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={equipmentOptions}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select equipment"
                    searchPlaceholder="Search..."
                    value={equipment}
                    onChange={item => {
                        setEquipment(item.value);
                    }}
                    renderRightIcon={() => (
                        <Icon style={styles.icon} color={colors.purple} name="caret-down" size={20} />
                    )}
                    renderItem={renderItem}
                    dropdownPosition="top"
                />
                <View style={styles.buttonsContainer}>
                    <Button title="Reset" onClick={
                        () => {
                            setEquipment(null)
                            setMuscle(null)
                        }
                    }/>

                    <Button title="Apply" onClick={
                        () => {
                            setQuery({
                                muscle: muscle,
                                equipment: equipment
                            })

                            setModalVisible(false)
                        }
                    }/>
                </View>
            </View>
        </CustomModal>
    )
}

export default FilterModal