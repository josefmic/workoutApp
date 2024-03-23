import styles from "./Exercises.styles";
import {Linking, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../common/colors";
import React, {useState} from "react";
import FilterModal from "../modals/FilterModal";

const ExercisesFilter = ({ query, setQuery }) => {

    const [filterModalOpen, setFilterModalOpen] = useState(false)

    return (
        <>
            <View>
                <TouchableOpacity onPress={() => setFilterModalOpen(true)} style={{ paddingTop: 12 }}>
                    <Icon name="filter" size={30} color={colors.purple} style={{ paddingLeft: 20 }} />
                </TouchableOpacity>
                <FilterModal
                    setModalVisible={setFilterModalOpen}
                    modalVisible={filterModalOpen}
                    query={query}
                    setQuery={setQuery}
                />
            </View>
        </>
    )
}

export default ExercisesFilter