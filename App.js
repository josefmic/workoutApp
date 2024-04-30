import React, { useEffect } from "react";
import { useFonts } from 'expo-font';
import AppNavigator from './src/router/AppNavigator.js'
import {SafeAreaProvider} from "react-native-safe-area-context";
import { Provider, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import {store} from "./src/api/store";
import { Text, View } from "react-native";
import { loadSettings } from "./src/components/Settings/actions";

const AppContent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadSettings());
    }, [dispatch]);

    return <AppNavigator />;
};

export default function App() {
    let [fontsLoaded] = useFonts({
        'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
        // include other font styles if needed
    });

    if (!fontsLoaded) {
        // todo app loading screen
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    } else {
        return (
            <Provider store={store}>
                <SafeAreaProvider>
                    <AppContent />
                    <Toast />
                </SafeAreaProvider>
            </Provider>
        );
    }
}