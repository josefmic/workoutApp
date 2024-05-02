import React, { useState } from "react";
import { Row, Table } from "react-native-table-component";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import styles from "./AddRoutineModal.styles";
import globalStyles from "../../common/GlobalStyles";
import colors from "../../common/colors";
import Icon from "react-native-vector-icons/FontAwesome6";
import capitalizeFirstLetter from "../../common/helpers/capitalizeFirstLetter";

const Exercise = ({ e }) => {
    const tableHead = ["SET", "PREV", "WEIGHT", "REPS", ""];

    const [tableData, setTableData] = useState([
        ["1", "No prev", "-", "-", <TouchableOpacity onPress={() => deleteRow(0)}>
            <Icon name="trash" size={18} />
        </TouchableOpacity>]
    ]);

    const addRow = () => {
        const newRow = [String(tableData.length + 1), "No prev", "-", "-",
            <TouchableOpacity onPress={() => deleteRow(tableData.length)}>
                <Icon name="trash" size={18}/>
            </TouchableOpacity>
        ];
        setTableData([...tableData, newRow]);
    };

    const deleteRow = (rowIndex) => {
        const newData = tableData.filter((_, index) => index !== rowIndex);
        setTableData(newData.map((row, index) => {
            row[0] = String(index + 1); // Update set number after deletion
            return row;
        }));
    };

    const onChangeText = (text, rowIndex, columnIndex) => {
        const newData = [...tableData];
        newData[rowIndex][columnIndex] = text;
        setTableData(newData);
    };

    return (
        <View style={styles.exerciseTableContainer}>
            <View style={styles.topContainer}>
                <Text style={{ ...globalStyles.defaultText, fontWeight: "bold" }}>{capitalizeFirstLetter(e?.name)}</Text>
                <Icon name="ellipsis" size={25} color={colors.purple} />
            </View>
            <View style={{ width: "100%" }}>
                <Table>
                    <Row data={tableHead} textStyle={styles.tableHeadText} />
                    {tableData.map((rowData, rowIndex) => (
                        <Row
                            key={rowIndex}
                            data={rowData.map((cellData, columnIndex) => {
                                if (columnIndex === 0) {
                                    return (
                                        <Text style={styles.tableText}>{cellData}</Text>
                                    );
                                } else if (columnIndex === 4) {
                                    return (
                                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                                            {cellData}
                                        </View>
                                    );
                                } else {
                                    return (
                                        <View style={{ justifyContent: "center" }}>
                                            <TextInput
                                                style={{ textAlign: "center" }}
                                                key={columnIndex}
                                                onChangeText={(text) => onChangeText(text, rowIndex, columnIndex)}
                                                value={cellData}
                                                editable={columnIndex === 2 || columnIndex === 3} // Only make weight and reps editable
                                            />
                                        </View>
                                    );
                                }
                            })}
                            style={styles.tableRow}
                        />
                    ))}
                </Table>
            </View>
            <Text onPress={addRow} style={{ ...globalStyles.defaultText, color: colors.purple, marginVertical: 15 }}>
                <Icon color={colors.purple} name="plus" size={18} /> ADD SET
            </Text>
        </View>
    );
};

export default Exercise;
