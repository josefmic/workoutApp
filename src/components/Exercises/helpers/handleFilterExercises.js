
const handleFilterExercises = (exercises, searchQuery, filterQuery) => {
    let filteredData = exercises.slice().sort((a, b) => a?.WorkOut.localeCompare(b?.WorkOut));

    if (searchQuery) {
        filteredData = filteredData.filter(exercise =>
            exercise?.WorkOut.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    if (filterQuery) {

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
