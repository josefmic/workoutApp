import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CustomModal from "../../common/CustomModal";
import colors from "../../common/colors";
import UnitSetRow from "../helpers/UnitSetRow";
import { useDispatch } from "react-redux";
import TopButton from "../../common/buttons/TopButton";

const UnitsModal = ({ modalVisible, setModalVisible, weightUnit, setWeightUnit }) => {

	const closeModal = () => {
		setModalVisible(false);
	}

	return (
		<CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
			<View style={styles.container}>
				<TopButton onPress={closeModal} icon="chevron-left" />
				<Text style={styles.title}>Weight Units</Text>
				<View style={{width: 25}}/>
			</View>
			<View style={styles.sectionContainer}>
				<Text style={styles.sectionTitle}>System default</Text>
				<UnitSetRow icon={weightUnit === 'lbs' ? "check" : null} text="Imperial (lbs)" onRowPress={() => setWeightUnit('lbs')} />
				<UnitSetRow icon={weightUnit === 'kg' ? "check" : null} text="Metric (kg)" onRowPress={() => setWeightUnit('kg')} />
			</View>
			</CustomModal>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 20,
		marginBottom: 20,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	sectionContainer: {
		marginBottom: 40,
	},
	sectionTitle: {
		color: '#828282',
		fontFamily: 'Poppins',
		fontSize: 10,
		fontStyle: 'normal',
		fontWeight: '400',
		lineHeight: 20,
		textTransform: 'uppercase',
	}
});

export default UnitsModal;