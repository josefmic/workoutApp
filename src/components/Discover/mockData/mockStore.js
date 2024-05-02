// mockStore.js

let savedWorkouts = [];

export const addWorkout = (workout) => {
	const workoutExists = savedWorkouts.find(w => w.name === workout.name);
	if (!workoutExists) {
		savedWorkouts.push(workout);
	}
}

export const isWorkoutSaved = (workout) => {
	return !!savedWorkouts.find(w => w.name === workout.name);
}