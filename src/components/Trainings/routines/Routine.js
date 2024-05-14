import {View, Text, TouchableOpacity} from "react-native";
import styles from "./Routine.styles"
import globalStyles from "../../common/GlobalStyles";
import Icon from "react-native-vector-icons/FontAwesome6";
import capitalizeFirstLetter from "../../common/helpers/capitalizeFirstLetter";
import colors from "../../common/colors";
import Button from "../../common/buttons/Button";

const Routine = ({ routine }) => {
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
                <TouchableOpacity style={{ width: 30, position: "absolute", right: 0, top: 0}}>
                    <Icon name="ellipsis" size={25} color={colors.purple} />
                </TouchableOpacity>
                <View style={{ position: "absolute", bottom: -10, right: -10 }}>
                    <Button title="Start" />
                </View>
            </View>
        </View>
    )
}

export default Routine