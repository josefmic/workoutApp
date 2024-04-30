import React, { useState } from 'react';
import { View, Text, ScrollView, Switch, Button } from 'react-native';
import { Share } from 'react-native';
import Toast from 'react-native-toast-message';
import SettingRow from "../helpers/SettingRow";
import ComponentHeader from "../../common/ComponentHeader";
import styles from "./Settings.styles";
import UnitsModal from "../modals/UnitsModal";
import NotificationModal from "../modals/NotificationModal";
import { useDispatch, useSelector } from "react-redux";
import { setInactiveDays, setNotificationEnabled, setWeightUnit } from "../actions";

const Settings = () => {
    const dispatch = useDispatch();
    const isNotificationEnabled = useSelector(state => state.settings.isNotificationEnabled);
    const weightUnit = useSelector(state => state.settings.weightUnit);
    console.log('Rendering Settings with weight unit: ', weightUnit);
    const inactiveDays = useSelector(state => state.settings.inactiveDays);

    const [isUnitModalVisible, setIsUnitModalVisible] = useState(false);
    const [isNotificationModalVisible, setIsNotificationModalVisible] = useState(false);

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'MuscleMania is the best app to track your workouts and progress. Download it now!',
            });
            if (result.action === Share.sharedAction) {
                Toast.show({
                    type: 'success',
                    position: 'top',
                    text1: 'Thanks for sharing us!',
                    visibilityTime: 2000,
                });
            }
        } catch (error) {
            alert(error.message);
        }
    }

    const openUnitsModal = () => {
        setIsUnitModalVisible(true);
    }

    const openNotificationsModal = () => {
        setIsNotificationModalVisible(true);
    }

    const changeWeightUnits = (unit) => {
        dispatch(setWeightUnit(unit));
        console.log('Changing units to: ', unit);
        setIsUnitModalVisible(false);
    }

    const changeInactiveDays = (days) => {
        dispatch(setInactiveDays(days));
        console.log('Changing inactive days to: ', days);
    }

    const changeNotificationEnabled = (value) => {
        dispatch(setNotificationEnabled(value));
        console.log('Changing notification enabled to: ', value);
    }

    return (
        <ScrollView>
            <View style={styles.headerContainer}>
                <ComponentHeader title={"Settings"} />
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Account</Text>
                <SettingRow icon="share" text="Share MuscleMania" onRowPress={onShare} />
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Units</Text>
                <SettingRow icon="fitness-center" text="Weight Units" arrowVisible={true} onRowPress={openUnitsModal} rightText={weightUnit} />
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Preferences</Text>
                <SettingRow icon="notifications" text="Notifications" arrowVisible={true} onRowPress={openNotificationsModal} />
            </View>
            <UnitsModal
                modalVisible={isUnitModalVisible}
                setModalVisible={setIsUnitModalVisible}
                weightUnit={weightUnit}
                setWeightUnit={changeWeightUnits}
            />
            <NotificationModal
                modalVisible={isNotificationModalVisible}
                setModalVisible={setIsNotificationModalVisible}
                notificationsActive={isNotificationEnabled}
                setNotificationsActive={changeNotificationEnabled}
                inactiveDays={inactiveDays}
                setInactiveDays={changeInactiveDays}
            />
        </ScrollView>
    );
}

export default Settings;