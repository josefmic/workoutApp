import React, {useEffect, useState} from "react";
import {Dimensions, View, StyleSheet, TouchableWithoutFeedback} from "react-native";
import {useSafeAreaStyles} from "./View.styles";
import Modal from "react-native-modal";
import GestureRecognizer from "react-native-swipe-gestures";
import handleModalAnimation from "./helpers/handleModalAnimation";

const CustomModal = (
    {
        modalVisible,
        setModalVisible,
        children,
        modalId,
        animation = "Right",
        height = 1,
        customStyles,
        swipeOff = false,
        onClose
    }) => {

    const safeAreaStyles = useSafeAreaStyles();

    const handleSwipe = () => {
        if (!swipeOff)
            setModalVisible(false);
    };

    const modalHeight = Dimensions.get('window').height * height;
    const {animationIn, animationOut} = handleModalAnimation(animation);
    const [firstLoad, setFirstLoad] = useState(false);


    const handleBackdropPress = () => {
        if (animation === "Up" || animation === "Down") {
            setModalVisible(false);
        }
    };

    useEffect(() => {
        if (modalVisible) {
            setFirstLoad(true)
        }
    }, [modalVisible]);

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
                {(modalVisible || firstLoad) && height !== 1 &&
                    <TouchableWithoutFeedback onPress={handleBackdropPress}>
                        <View style={{ flex: 1 }} />
                    </TouchableWithoutFeedback>
                }
                {(modalVisible || firstLoad) &&
                    <View
                        style={{
                            ...safeAreaStyles.container,
                            ...safeAreaStyles.modalContent,
                            maxHeight: modalHeight,
                            ...(StyleSheet.create(customStyles))
                        }}
                    >
                        {children}
                    </View>
                }
            </Modal>
        </GestureRecognizer>
    )
}

export default CustomModal;
