import React, {useEffect, useState} from "react";
import {Row, Table} from "react-native-table-component";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./AddRoutineModal.styles";
import globalStyles from "../../common/GlobalStyles";
import colors from "../../common/colors";
import Icon from "react-native-vector-icons/FontAwesome6";
import capitalizeFirstLetter from "../../common/helpers/capitalizeFirstLetter";
import {useSelector} from "react-redux";
import {settingsSelector} from "../../Settings/reducer";
import {convertWeigthForDisplay} from "../../common/helpers/weightConvertor";

const Exercise = ({exercise, setExercises, exercises}) => {
    const selectedWeight = useSelector(settingsSelector).weightUnit;

    const tableHead = ["SET", `WEIGHT (${selectedWeight})`, "REPS", ""];

    const initialTableData = exercise && exercise.sets && exercise.sets.length > 0
        ? exercise.sets.map((set, index) => {
            return [String(index + 1), convertWeigthForDisplay(set[1], selectedWeight) || "", set[2] || "", ""];
        })
        : [["1", "", "", ""]];


    const [tableData, setTableData] = useState(initialTableData);

    const addRow = () => {
        const newRow = [String(tableData.length + 1), "", "", ""];
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
        const updatedExercise = {...exercise, sets: tableData};
        const updatedExercises = exercises.map(item => (item.id === updatedExercise.id ? updatedExercise : item));
        setExercises(updatedExercises)
    }, [tableData]);

    return (
        <View style={styles.exerciseTableContainer}>
            <View style={styles.topContainer}>
                <Text style={{
                    ...globalStyles.defaultText,
                    fontWeight: "bold"
                }}>{capitalizeFirstLetter(exercise?.name)}</Text>
                <View></View>
            </View>
            <View style={{width: "100%"}}>
                <Table>
                    <Row data={tableHead} textStyle={styles.tableHeadText}/>
                    {tableData.map((rowData, rowIndex) => (
                        <Row
                            key={`exercise-row-${rowIndex}`}
                            data={rowData.map((cellData, columnIndex) => {
                                if (columnIndex === 0) {
                                    return (
                                        <Text style={styles.tableText}>{cellData}</Text>
                                    );
                                } else if (columnIndex === 3) {
                                    return (
                                        <View style={{justifyContent: "center", alignItems: "center"}}>
                                            {rowIndex !== 0 ? (
                                                <TouchableOpacity onPress={() => deleteRow(rowIndex)}>
                                                    <Icon name="trash" size={18}/>
                                                </TouchableOpacity>
                                            ) : null}
                                        </View>
                                    );
                                } else {
                                    return (
                                        <View style={{justifyContent: "center"}}>
                                            <TextInput
                                                style={{textAlign: "center", borderBottomWidth: 1, marginHorizontal: 18, paddingVertical: 10}}
                                                key={columnIndex}
                                                onChangeText={(text) => {
                                                    if (/^\d*\.?\d*$/.test(text)) {
                                                        onChangeText(text, rowIndex, columnIndex);
                                                    }
                                                }}
                                                value={cellData}
                                                placeholder="-"
                                                editable={columnIndex === 1 || columnIndex === 2}
                                                keyboardType="numeric"
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
            <Text onPress={addRow} style={{...globalStyles.defaultText, color: colors.purple, marginVertical: 15}}>
                <Icon color={colors.purple} name="plus" size={18}/> ADD SET
            </Text>
        </View>
    );
};

export default Exercise;
