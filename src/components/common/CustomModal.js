import {View} from "react-native";
import {useSafeAreaStyles} from "./View.styles";
import Modal from "react-native-modal";
import GestureRecognizer from "react-native-swipe-gestures";

const CustomModal = ({ modalVisible, setModalVisible, children, animation = "Right" }) => {

    const safeAreaStyles = useSafeAreaStyles()

    return (
        <GestureRecognizer
            style={{flex: 1}}
            onSwipeRight={ () => setModalVisible(false) }
        >
            <Modal
                animationIn={`slideIn${animation}`}
                animationOut={`slideOut${animation}`}
                isVisible={modalVisible}
                backdropOpacity={1}
                backdropColor="white"
                backdropTransitionOutTiming={0}
            >
                <View style={{ ...safeAreaStyles.container, paddingLeft: 5, paddingRight: 5 }}>
                    {children}
                </View>
            </Modal>
        </GestureRecognizer>
    )
}

export default CustomModal