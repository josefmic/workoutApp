import styles from "./Exercises.styles";
import {Linking, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../common/colors";
import React, {useEffect, useState} from "react";
import FilterModal from "../modals/FilterModal";

const ExercisesFilter = ({ query, setQuery }) => {

    const [filterModalOpen, setFilterModalOpen] = useState(false)
    const [isFiltered, setIsFiltered] = useState(false);

    useEffect(() => {
        if (query?.muscle || query?.equipment) {
            setIsFiltered(true);
        } else {
            setIsFiltered(false);
        }
    }, [query]);

    return (
        <>
            <View>
                <TouchableOpacity onPress={() => setFilterModalOpen(true)} style={{ paddingTop: 12, paddingLeft: 20 }}>
                    <Icon
                        name="filter"
                        size={30}
                        color={colors.purple}
                        style={isFiltered && styles.filteredIcon}
                    />
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