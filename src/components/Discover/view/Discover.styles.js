import { StyleSheet } from 'react-native';
import colors from "../../common/colors";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	sectionContainer: {
		paddingTop: 16,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: '600',
	},
	helperText: {
		marginTop: 10,
		fontSize: 14,
		color: colors.purple,
	}
});

export default styles;