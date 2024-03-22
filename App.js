import AppNavigator from './src/router/AppNavigator.js'
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
  return (
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
  );
}
