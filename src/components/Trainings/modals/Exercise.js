import {useState} from "react";
import {Row, Table} from "react-native-table-component";
import {Text, TextInput, View} from "react-native";
import styles from "./AddRoutineModal.styles";
import globalStyles from "../../common/GlobalStyles";
import colors from "../../common/colors";
import Icon from "react-native-vector-icons/FontAwesome6";

const Exercise = ({ e }) => {
    const [tableData, setTableData] = useState([
        ['SET', 'PREVIOUS', 'WEIGHT', 'REPS', ''],
        ['', '', '', '', ''],
    ])

    const addRow = () => {
        const newData = [...tableData, ['', '', '', '', '']];
        setTableData(newData);
    };

    const onChangeText = (text, rowIndex, columnIndex) => {
        const newData = [...tableData];
        newData[rowIndex][columnIndex] = text;
        setTableData(newData);
    };

    return (
        <View>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9', width: "80%" }}>
                {
                    tableData.map((rowData, rowIndex) => (
                        <Row
                            key={rowIndex}
                            data={rowData.map((cellData, columnIndex) => (
                                <TextInput
                                    key={columnIndex}
                                    style={styles.input}
                                    onChangeText={(text) => onChangeText(text, rowIndex, columnIndex)}
                                    value={cellData}
                                />
                            ))}
                            style={styles.row}
                        />
                    ))
                }
            </Table>
            <Text onPress={addRow} style={{...globalStyles.defaultText, color: colors.purple}}>
                <Icon
                    style={styles.icon}
                    color={colors.purple}
                    name="plus"
                    size={20}
                />
                Add Row
            </Text>
        </View>
    )
}

export default Exercise