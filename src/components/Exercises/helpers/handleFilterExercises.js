
const handleFilterExercises = (exercises, searchQuery, filterQuery) => {
    let filteredData = exercises.slice().sort((a, b) => a?.WorkOut.localeCompare(b?.WorkOut));

    if (searchQuery) {
        filteredData = filteredData.filter(exercise =>
            exercise?.WorkOut.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    if (filterQuery?.muscle) {
        filteredData = filteredData.filter(exercise =>
            exercise?.Muscles ? exercise?.Muscles.toLowerCase() === filterQuery?.muscle.toLowerCase() : null
        );
    }

    if (filterQuery?.equipment) {
        filteredData = filteredData.filter(exercise =>
            exercise?.Equipment ? exercise?.Equipment.toLowerCase() === filterQuery?.equipment.toLowerCase() : null
        );
    }

    let currentLetter = '';
    const groupedExercises = [];

    filteredData.forEach(exercise => {
        const firstLetter = exercise?.WorkOut.charAt(0).toUpperCase();
        if (firstLetter !== currentLetter) {
            groupedExercises.push({ letter: firstLetter, isLetter: true });
            currentLetter = firstLetter;
        }
        groupedExercises.push(exercise);
    });

    return groupedExercises;
};

export default handleFilterExercises;
