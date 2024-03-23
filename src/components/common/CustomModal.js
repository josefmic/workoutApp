import {Dimensions, View, StyleSheet} from "react-native";
import {useSafeAreaStyles} from "./View.styles";
import Modal from "react-native-modal";
import GestureRecognizer from "react-native-swipe-gestures";
import handleModalAnimation from "./helpers/handleModalAnimation";

const CustomModal = ({ modalVisible, setModalVisible, children, modalId, animation = "Right", height = 1, customStyles }) => {

    const safeAreaStyles = useSafeAreaStyles()
    const handleSwipe = () => {
        setModalVisible(false);
    };

    const modalHeight = Dimensions.get('window').height * height;
    const { animationIn, animationOut } = handleModalAnimation(animation);

    return (
        <GestureRecognizer
            style={{ flex: 1 }}
            onSwipeRight={animation === "Right" ? handleSwipe : null}
            onSwipeLeft={animation === "Left" ? handleSwipe : null}
            onSwipeUp={animation === "Down" ? handleSwipe : null}
            onSwipeDown={animation === "Up" ? handleSwipe : null}
        >
            <Modal
                id={modalId}
                animationIn={animationIn}
                animationOut={animationOut}
                isVisible={modalVisible}
                backdropOpacity={0}
                backdropColor="white"
                backdropTransitionOutTiming={0}
                style={{ justifyContent: 'flex-end', margin: 0 }}
            >
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
            </Modal>
        </GestureRecognizer>
    )
}

export default CustomModal