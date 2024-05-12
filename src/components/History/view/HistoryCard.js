import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Popover, {PopoverPlacement} from "react-native-popover-view";
import Icon from "react-native-vector-icons/FontAwesome6";
import colors from "../../common/colors";
import RoutineMenu from "../../Trainings/modals/RoutineMenu";

const HistoryCard = ({ history }) => {
const [showRoutinePopover, setShowRoutinePopover] = useState(false);

    return (
        <View style={styles.card}>
            <View style={styles.topWrapper}>
                <View style={styles.topRow}>
                    <Text style={styles.trainingName}>{history.routineName}</Text>
                    <Popover
                        placement={PopoverPlacement.BOTTOM}
                        isVisible={showRoutinePopover}
                        onRequestClose={() => setShowRoutinePopover(false)}
                        arrowSize={{ width: 0, height: 0 }}
                        backgroundStyle={{ backgroundColor: "transparent" }}
                        offset={-40}
                        from={(sourceRef) => (
                            <TouchableOpacity style={{ width: 30, position: "absolute", right: 0, top: 0}} onPress={() => setShowRoutinePopover(true)}>
                                <Icon name="ellipsis" size={25} color={colors.purple} />
                            </TouchableOpacity>
                        )}>
                        <RoutineMenu
                            showView={true}
                            closeMenu={() => setShowRoutinePopover(false)}
                        />
                    </Popover>
                </View>
                <View style={styles.topRow}>
                    <Text style={styles.secondRow}>{history.finish}</Text>
                    <Text style={styles.secondRow}>{history.timer}</Text>
                </View>
            </View>
            <View style={styles.photo}>
                <Icon name="camera" size={160} color={colors.purple} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: 16,
        backgroundColor: "#D8D8D8",
        borderRadius: 8,
    },
    topWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    topRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    trainingName: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.purple,
    },
    secondRow: {
        fontSize: 12,
        color: colors.grey,
    }

})

export default HistoryCard;