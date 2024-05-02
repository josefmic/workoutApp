import {combineReducers} from "redux";
import {TrainingsReducer} from "../components/Trainings/reducer";
import {ExercisesReducer} from "../components/Exercises/reducer";
import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../components/Settings/reducer";

const rootReducer = combineReducers({
    trainings: TrainingsReducer,
    exercises: ExercisesReducer,
    settings: settingsReducer,
})

export const store = configureStore({
    reducer: rootReducer
})