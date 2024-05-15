import React, {useState} from 'react';
import {FlatList, TextInput, View} from 'react-native';
import ComponentHeader from '../../common/ComponentHeader';
import styles from "./Exercises.styles"
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../common/colors";
import {useSelector} from "react-redux";
import {exercisesSelector} from "../reducer";
import ExercisesFilter from "./ExercisesFilter";
import handleFilterExercises from "../helpers/handleFilterExercises";
import handleRenderExerciseItem from "../helpers/handleRenderExerciseItem";
import globalStyles from "../../common/GlobalStyles";
import {useSafeAreaStyles} from "../../common/View.styles";

const Exercises = ({ onClick }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterQuery, setFilterQuery] = useState(null);

    const data = useSelector(exercisesSelector)
    const filteredExercises = handleFilterExercises(data, searchQuery, filterQuery)
    const commonStyles = useSafeAreaStyles()

    return (
        <View style={globalStyles.defaultPadding}>
            {!onClick &&
                <View style={commonStyles.headerContainer}>
                    <ComponentHeader title={"Exercises"} />
                </View>
            }
            <View style={styles.topContainer}>
                <View style={styles.searchContainer}>
                    <Icon name="search" size={24} color={colors.purple} style={{ paddingHorizontal: 10 }} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search exercises..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>
                <ExercisesFilter query={filterQuery} setQuery={setFilterQuery} />
            </View>
            <View>
                <FlatList
                    data={filteredExercises}
                    renderItem={({ item }) => handleRenderExerciseItem(item, onClick)}
                    keyExtractor={(item, index) => {
                        if (item.isLetter) {
                            return `letter-${item.letter}-${index}`;
                        } else {
                            return `exercise-${item.name}-${index}`;
                        }
                    }}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={<View style={{ height: 350 }} />}
                />
            </View>
        </View>
    );
};

export default Exercises;
