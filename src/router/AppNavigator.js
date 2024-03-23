import React, {useCallback, useEffect, useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomNavigation, { FullTab } from "react-native-material-bottom-navigation";
import Icon from "react-native-vector-icons/FontAwesome6";
import tabs from "./tabs.js";
import colors from "../components/common/colors";
import styles from "./AppNavigator.styles"
import {useSafeAreaStyles} from "../components/common/View.styles";
import {useDispatch} from "react-redux";
import {getExercises} from "../components/Exercises/actions";

const AppNavigator = () => {
    const renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color={`${isActive ? colors.purple : colors.grey}`} name={icon} />
    )

    // Get exercises from api on app start so that we can use them anywhere
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getExercises())
    }, [dispatch])


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

    const safeAreaStyles = useSafeAreaStyles()

    return (
        <View style={safeAreaStyles.container}>
            <View style={[safeAreaStyles.content, { flex: 1 }]}>
                {activeTabComponent}
            </View>
            <View>
                <BottomNavigation
                    style={styles.bottomNavigation}
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