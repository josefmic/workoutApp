import {ScrollView, StyleSheet, Text, View} from "react-native";
import ComponentHeader from "../../common/ComponentHeader";
import globalStyles from "../../common/GlobalStyles";
import {useSelector} from "react-redux";
import {historySelector} from "../../Trainings/reducer";
import HistoryCard from "./HistoryCard";

const History = () => {
    const historyData = useSelector(historySelector);

    return (
        <ScrollView style={globalStyles.defaultPadding}>
            <ComponentHeader title={"History"} />
            <View style={styles.body}>
                {historyData.map((history, index) => {
                    return (<HistoryCard key={index} history={history} />)
                })}
            </View>
            <Text>History</Text>
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