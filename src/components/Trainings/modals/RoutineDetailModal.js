import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomModal from '../../common/CustomModal';
import {MaterialIcons} from "@expo/vector-icons";
import colors from "../../common/colors";
import ComponentHeader from "../../common/ComponentHeader";
import {useSafeAreaStyles} from "../../common/View.styles";
import SetRow from "./SetRow";
import Icon from "react-native-vector-icons/FontAwesome6";
import RoutineMenu from "./RoutineMenu";
import Popover, {PopoverPlacement} from "react-native-popover-view";

const RoutineDetailModal = ({ routine, modalVisible, setModalVisible }) => {
    const commonStyles = useSafeAreaStyles();
    const date = new Date(routine.creationDate);

    return (
        <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
            <View>
                <View style={styles.arrowBackWrapper}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <MaterialIcons name="arrow-back" size={24} color={colors.purple} />
                    </TouchableOpacity>
                </View>
                <ComponentHeader title={"Workout Routine"} />
            </View>
            <ScrollView>
                <View style={styles.descContainer}>
                    <View>
                        <View style={styles.workoutNameWrapper}>
                            <Text style={styles.workoutName}>{routine.title}</Text>
                            <Popover
                                placement={PopoverPlacement.BOTTOM}
                                arrowSize={{ width: 0, height: 0 }}
                                backgroundStyle={{ backgroundColor: "transparent" }}
                                offset={-40}
                                from={(sourceRef, showPopover) => (
                                    <TouchableOpacity style={{ width: 30}} onPress={showPopover}>
                                        <Icon name="ellipsis" size={25} color={colors.purple} />
                                    </TouchableOpacity>
                                )}>
                                <RoutineMenu routine={routine} showView={false} />
                            </Popover>
                        </View>
                        <Text style={styles.workoutTarget}>{routine.creationDate ? `Created ${date.toDateString()}` : ""}</Text>
                    </View>
                </View>

                {routine.exercises.map((exercise, index) => (
                    <View key={`routine-popup-${index}`}>
                        <Text style={styles.exerciseName}>{exercise.name}</Text>
                        <View style={styles.setsContainer}>
                            <SetRow set={{weight: "WEIGHT", reps: "REPS"}} index={"SET"} key={`set-row-head}`} />
                            {exercise.sets.map((set, index) => (
                                <SetRow set={{weight: set[1], reps: set[2]}} index={index + 1} key={`set-row-${index}`}/>
                            ))}
                        </View>
                    </View>
                ))}
            </ScrollView>
        </CustomModal>
    );
};

const styles = StyleSheet.create({
    descContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 20,
        gap: 20,
        minHeight: 80,
        borderBottomWidth: 1,
        borderBottomColor: "#DCDCDC",
    },
    workoutNameWrapper: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "nowrap"
    },
    workoutName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.purple,
    },
    workoutTarget: {
        fontSize: 12,
        color: colors.grey,
        alignSelf: "center"
    },
    exerciseName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 20,
    },
    setsContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 20,
    },
    iconWrapper: {
        padding: 8,
        marginHorizontal: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    arrowBackWrapper: {
        paddingVertical: 10,
        maxWidth: 40,
    },
});

export default RoutineDetailModal;