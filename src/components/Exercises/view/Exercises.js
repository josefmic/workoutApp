import React, {useMemo, useState} from 'react';
import { View, Text, ScrollView, FlatList, TextInput } from 'react-native';
import ComponentHeader from '../../common/ComponentHeader';
import styles from "./Exercises.styles"
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../common/colors";

const Exercises = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const data = [
        { id: '1', name: 'Exercise 1' },
        { id: '2', name: 'Exercise 2' },
        { id: '3', name: 'b 3' },
        { id: '4', name: 'Exercise 3' },
        { id: '5', name: 'test 3' },
        { id: '6', name: 'Exercise 3' },
        { id: '7', name: 'asd 3' },
        { id: '8', name: 'Exerecise 3' },
    ];

    const sortedExercises = useMemo(() => {
        return data.slice().sort((a, b) => a.name.localeCompare(b.name));
    }, [data]);

    const filteredExercises = sortedExercises.filter(exercise =>
        exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const groupedExercises = [];
    let currentLetter = '';

    filteredExercises.forEach(exercise => {
        const firstLetter = exercise.name.charAt(0).toUpperCase();
        if (firstLetter !== currentLetter) {
            groupedExercises.push({ letter: firstLetter, isLetter: true });
            currentLetter = firstLetter;
        }
        groupedExercises.push(exercise);
    });

    const renderExerciseItem = ({ item }) => {
        if (item.isLetter) {
            return (
                <View style={styles.letterContainer}>
                    <Text style={styles.letter}>{item.letter}</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.item}>
                    <Text>{item.name}</Text>
                </View>
            );
        }
    };

    return (
        <View>
            <ComponentHeader title={"Exercises"} />
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
                <Icon name="filter" size={30} color={colors.purple} style={{ paddingLeft: 20 }} />
            </View>
            <FlatList
                data={groupedExercises}
                renderItem={renderExerciseItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default Exercises;
