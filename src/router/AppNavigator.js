import React, {useCallback, useState} from "react";
import { View, Text } from "react-native";
import BottomNavigation, { FullTab } from "react-native-material-bottom-navigation";
import Icon from "react-native-vector-icons/FontAwesome6";
import tabs from "./tabs.js";

const AppNavigator = () => {
    const renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color="white" name={icon} />
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

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                {activeTabComponent}
            </View>
            <BottomNavigation
                style={{ paddingBottom: "10px" }}
                activeTab={activeTab}
                onTabPress={handleTabPress}
                renderTab={renderTab}
                tabs={tabs}
            />
        </View>
    )
   
}

export default AppNavigator