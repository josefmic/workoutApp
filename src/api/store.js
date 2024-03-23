import {combineReducers} from "redux";
import {TrainingsReducer} from "../components/Trainings/reducer";
import {ExercisesReducer} from "../components/Exercises/reducer";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    trainings: TrainingsReducer,
    exercises: ExercisesReducer,
})

export const store = configureStore({
    reducer: rootReducer
})