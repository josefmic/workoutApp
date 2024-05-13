import {ScrollView, StyleSheet, View} from "react-native";
import ComponentHeader from "../../common/ComponentHeader";
import globalStyles from "../../common/GlobalStyles";
import HistoryCard from "./HistoryCard";
import {useSelector} from "react-redux";
import {historySelector} from "../../Trainings/reducer";

const History = () => {
    const historyData = useSelector(historySelector);

    // const historyData = [{
    //     exercises: [
    //         {
    //             name: "Bench Press",
    //             sets: [["1", "2", "3", ""], ["2", "5", "10", ""]]
    //         },
    //         {
    //             name: "Leg Press",
    //             sets: [["1", "2", "3", ""], ["2", "5", "10", ""]]
    //         },
    //         {
    //             name: "Leg Press",
    //             sets: [["1", "2", "3", ""], ["2", "5", "10", ""]]
    //         },
    //         {
    //             name: "Leg Press",
    //             sets: [["1", "2", "3", ""], ["2", "5", "10", ""]]
    //         },
    //         {
    //             name: "Leg Press",
    //             sets: [["1", "2", "3", ""], ["2", "5", "10", ""]]
    //         }
    //     ],
    //     routineName: "test",
    //     finish: "13. 5. 2024 9:28:08",
    //     photo: null,
    //     start: "13. 5. 2024 9:27:56",
    //     timer: "0:12"
    // }]

    return (
        <ScrollView style={globalStyles.defaultPadding}>
            <ComponentHeader title={"History"} />
            <View style={styles.body}>
                {historyData.map((history, index) => {
                    return (<HistoryCard key={index} history={history} />)
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: 10,
    }
})

export default History