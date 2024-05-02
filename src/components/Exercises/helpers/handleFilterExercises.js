
const handleFilterExercises = (exercises, searchQuery, filterQuery) => {
    let filteredData = exercises.slice().sort((a, b) => a?.name.localeCompare(b?.name));

    if (searchQuery) {
        filteredData = filteredData.filter(exercise =>
            exercise?.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    if (filterQuery?.muscle) {
        filteredData = filteredData.filter(exercise =>
            exercise?.target ? exercise?.target.toLowerCase() === filterQuery?.muscle.toLowerCase() : null
        );
    }

    if (filterQuery?.equipment) {
        filteredData = filteredData.filter(exercise =>
            exercise?.equipment ? exercise?.equipment.toLowerCase() === filterQuery?.equipment.toLowerCase() : null
        );
    }

    let currentLetter = '';
    const groupedExercises = [];

    filteredData.forEach(exercise => {
        const firstLetter = exercise?.name.charAt(0).toUpperCase();
        if (firstLetter !== currentLetter) {
            groupedExercises.push({ letter: firstLetter, isLetter: true });
            currentLetter = firstLetter;
        }
        groupedExercises.push(exercise);
    });

    return groupedExercises;
};

export default handleFilterExercises;
