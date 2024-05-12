import React, { useState, useEffect } from "react";
import {Dimensions, View, StyleSheet, TouchableWithoutFeedback} from "react-native";
import {useSafeAreaStyles} from "./View.styles";
import Modal from "react-native-modal";
import GestureRecognizer from "react-native-swipe-gestures";
import handleModalAnimation from "./helpers/handleModalAnimation";

const CustomModalSelfUnmount = (
    {
        children,
        modalId,
        animation = "Right",
        height = 1,
        customStyles,
        swipeOff = false,
        onClose
    }) => {

    const [modalVisible, setModalVisible] = useState(false);

    const safeAreaStyles = useSafeAreaStyles();

    const handleSwipe = () => {
        if (!swipeOff)
            setModalVisible(false);
    };

    const modalHeight = Dimensions.get('window').height * height;
    const {animationIn, animationOut} = handleModalAnimation(animation);

    const handleBackdropPress = () => {
        if (animation === "Up" || animation === "Down") {
            setModalVisible(false);
        }
    };

    useEffect(() => {
        setModalVisible(true);
    }, []);

    return (
        <GestureRecognizer
            style={{flex: modalVisible ? 1 : 0}}
            onSwipeRight={animation === "Right" ? handleSwipe : null}
            onSwipeLeft={animation === "Left" ? handleSwipe : null}
        >
            <Modal
                id={modalId}
                animationIn={animationIn}
                animationOut={animationOut}
                isVisible={modalVisible}
                backdropOpacity={0}
                backdropColor="white"
                backdropTransitionOutTiming={0}
                style={{justifyContent: 'flex-end', margin: 0}}
                onModalHide={onClose}
            >
                {height !== 1 &&
                    <TouchableWithoutFeedback onPress={handleBackdropPress}>
                        <View style={{flex: 1}}/>
                    </TouchableWithoutFeedback>
                }
                <View
                    style={{
                        ...safeAreaStyles.container,
                        ...safeAreaStyles.modalContent,
                        maxHeight: modalHeight,
                        ...(StyleSheet.create(customStyles))
                    }}
                >
                    {children(setModalVisible)}
                </View>
            </Modal>
        </GestureRecognizer>
    )
}

export default CustomModalSelfUnmount;