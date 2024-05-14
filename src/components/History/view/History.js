import {ScrollView, StyleSheet, View} from "react-native";
import ComponentHeader from "../../common/ComponentHeader";
import globalStyles from "../../common/GlobalStyles";
import HistoryCard from "./HistoryCard";
import {useSelector} from "react-redux";
import {historySelector} from "../../Trainings/reducer";
import {useSafeAreaStyles} from "../../common/View.styles";

const History = () => {
    const historyData = useSelector(historySelector);
    const commonStyles = useSafeAreaStyles()

    return (
        <ScrollView style={globalStyles.defaultPadding}>
            <View style={commonStyles.headerContainer}>
                <ComponentHeader title={"History"} />
            </View>
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