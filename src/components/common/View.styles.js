import {StyleSheet} from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useSafeAreaStyles = () => {
    const insets = useSafeAreaInsets();

    return StyleSheet.create({
        container: {
            flex: 1,
            paddingBottom: insets.bottom,
            paddingTop: insets.top,
        },
        content: {
            flex: 1,
            paddingHorizontal: 25,
            paddingTop: 10
        }
    });
};