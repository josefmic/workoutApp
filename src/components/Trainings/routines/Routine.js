import {Text, TouchableOpacity, View} from "react-native";
import styles from "./Routine.styles"
import globalStyles from "../../common/GlobalStyles";
import Icon from "react-native-vector-icons/FontAwesome6";
import capitalizeFirstLetter from "../../common/helpers/capitalizeFirstLetter";
import colors from "../../common/colors";
import Button from "../../common/buttons/Button";
import Popover, {PopoverPlacement} from "react-native-popover-view";
import RoutineMenu from "../modals/RoutineMenu";
import React, {useState} from "react";
import RoutineDetailModal from "../modals/RoutineDetailModal";
import AddRoutineModal from "../modals/AddRoutineModal";

const Routine = ({ routine }) => {
    const [showRoutinePopover, setShowRoutinePopover] = useState(false);
    const [isRoutineDetailModalVisible, setIsRoutineDetailModalVisible] = useState(false);
    const [isAddRoutineModalVisible, setIsAddRoutineModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={{ padding: 15, flex: 4 }}>
                <Text style={styles.title}>{routine?.title}</Text>
                <View>
                    {routine?.exercises?.map((e, index) =>
                        <View key={`routine-exercise-${index}`} style={styles.bulletContainer}>
                            <Icon name="circle" size={6} style={styles.bulletIcon} />
                            <Text style={globalStyles.defaultText}>{capitalizeFirstLetter(e?.name)}</Text>
                        </View>
                    )}
                </View>
            </View>
            <View style={styles.rightPart}>
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
                        routine={routine}
                        showView={true}
                        closeMenu={() => setShowRoutinePopover(false)}
                        setIsRoutineDetailModalVisible={() => setIsRoutineDetailModalVisible(true)}
                        setIsAddRoutineModalVisible={() => setIsAddRoutineModalVisible(true)}
                    />
                </Popover>
                <AddRoutineModal
                    modalVisible={isAddRoutineModalVisible}
                    setModalVisible={setIsAddRoutineModalVisible}
                    routine={routine}
                />
                <RoutineDetailModal
                    key={routine.title}
                    routine={routine}
                    modalVisible={isRoutineDetailModalVisible}
                    setModalVisible={setIsRoutineDetailModalVisible}
                />
                <View style={{ position: "absolute", bottom: -10, right: -10 }}>
                    <Button title="Start" />
                </View>
            </View>
        </View>
    )
}

export default Routine