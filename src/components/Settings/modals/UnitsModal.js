import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CustomModal from "../../common/CustomModal";
import colors from "../../common/colors";
import UnitSetRow from "../helpers/UnitSetRow";

const UnitsModal = ({ modalVisible, setModalVisible, weightUnit, setWeightUnit }) => {
	const closeModal = () => {
		setModalVisible(false);
	}

	const chooseUnit = (unit) => {
		setWeightUnit(unit);
		closeModal();
	}

	return (
		<CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
			<View style={styles.container}>
				<TouchableOpacity onPress={closeModal}>
					<MaterialIcons name="arrow-back" size={24} color={colors.purple} />
				</TouchableOpacity>
				<Text style={styles.title}>Weight Units</Text>
				<View />
			</View>
			<View style={styles.sectionContainer}>
				<Text style={styles.sectionTitle}>System default</Text>
				<UnitSetRow icon={weightUnit === 'lbs' ? "check" : null} text="Imperial (lbs)" onRowPress={() => chooseUnit('lbs')} />
				<UnitSetRow icon={weightUnit === 'kg' ? "check" : null} text="Metric (kg)" onRowPress={() => chooseUnit('kg')} />
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