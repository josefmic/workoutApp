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
        <View style={styles.exerciseTableContainer}>
            <Table>
                {
                    tableData.map((rowData, rowIndex) => (
                        <Row
                            key={rowIndex}
                            data={rowData.map((cellData, columnIndex) => (
                                <View style={{ justifyContent: "center"}}>
                                    <TextInput
                                        key={columnIndex}
                                        style={styles.tableInput}
                                        onChangeText={(text) => onChangeText(text, rowIndex, columnIndex)}
                                        value={cellData}
                                    />
                                </View>
                            ))}
                            style={styles.tableRow}
                        />
                    ))
                }
            </Table>
            <Text onPress={addRow} style={{...globalStyles.defaultText, color: colors.purple}}>
                <Icon
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