import React, {useCallback, useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomNavigation, { FullTab } from "react-native-material-bottom-navigation";
import Icon from "react-native-vector-icons/FontAwesome6";
import tabs from "./tabs.js";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from "../components/common/colors";
import styles from "./AppNavigator.styles"

const AppNavigator = () => {
    const renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color={`${isActive ? colors.purple : colors.grey}`} name={icon} />
    )

    const renderTab = ({ tab, isActive }) => (
        <FullTab
            isActive={isActive}
            key={tab.key}
            label={tab.label}
            renderIcon={renderIcon(tab.icon)}
        />
    )


    const [activeTab, setActiveTab] = useState("discover");

    const activeTabComponent = tabs.find(tab => tab.key === activeTab)?.component;

    const handleTabPress = useCallback(
        (newTab) => setActiveTab(newTab.key),
        [setActiveTab]
    );

    const insets = useSafeAreaInsets();

    const dynamicStyles = {
        ...styles,
        container: {
            ...styles.container,
            paddingBottom: insets.bottom,
            paddingTop: insets.top
        }
    };

    return (
        <View style={dynamicStyles.container}>
            <View style={dynamicStyles.content}>
                {activeTabComponent}
            </View>
            <View>
                <BottomNavigation
                    style={dynamicStyles.bottomNavigation}
                    activeTab={activeTab}
                    onTabPress={handleTabPress}
                    renderTab={renderTab}
                    tabs={tabs}
                />
            </View>
        </View>
    )
   
}

export default AppNavigator