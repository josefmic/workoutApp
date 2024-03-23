import AppNavigator from './src/router/AppNavigator.js'
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Provider, useDispatch} from "react-redux";
import {store} from "./src/api/store";

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <AppNavigator />
            </SafeAreaProvider>
        </Provider>
    );
}
