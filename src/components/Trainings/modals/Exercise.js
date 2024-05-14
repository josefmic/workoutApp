import React, {useEffect, useState} from "react";
import { Row, Table } from "react-native-table-component";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import styles from "./AddRoutineModal.styles";
import globalStyles from "../../common/GlobalStyles";
import colors from "../../common/colors";
import Icon from "react-native-vector-icons/FontAwesome6";
import capitalizeFirstLetter from "../../common/helpers/capitalizeFirstLetter";

const Exercise = ({ exercise, setExercises, exercises }) => {
    const tableHead = ["SET", "WEIGHT", "REPS", ""];

    const [tableData, setTableData] = useState([
        ["1", "-", "-", ""]
    ]);

    const addRow = () => {
        const newRow = [String(tableData.length + 1), "-", "-", ""];
        setTableData([...tableData, newRow]);
    };

    const deleteRow = (rowIndex) => {
         setTableData(prevTableData => {
            if (rowIndex >= 0 && rowIndex < prevTableData.length) {
                const newData = prevTableData.filter((_, index) => index !== rowIndex);
                return newData.map((row, index) => {
                    row[0] = String(index + 1);
                    return row;
                });
            }
            return prevTableData;
        });
    };

    const onChangeText = (text, rowIndex, columnIndex) => {
        const newData = [...tableData];
        newData[rowIndex][columnIndex] = text;
        setTableData(newData);
    };

    useEffect(() => {
        const updatedExercise = { ...exercise, sets: tableData };
        const updatedExercises = exercises.map(item => (item.id === updatedExercise.id ? updatedExercise : item));
        setExercises(updatedExercises)
    }, [tableData]);

    return (
        <View style={styles.exerciseTableContainer}>
            <View style={styles.topContainer}>
                <Text style={{ ...globalStyles.defaultText, fontWeight: "bold" }}>{capitalizeFirstLetter(exercise?.name)}</Text>
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
                                } else if (columnIndex === 3) {
                                    return (
                                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                                            {rowIndex !== 0 && cellData}
                                            {rowIndex !== 0 && (
                                                <TouchableOpacity onPress={() => deleteRow(rowIndex)}>
                                                    <Icon name="trash" size={18}/>
                                                </TouchableOpacity>
                                            )}
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
                                                editable={columnIndex === 1 || columnIndex === 2}
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
