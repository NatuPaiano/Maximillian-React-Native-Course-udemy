import React from 'react';
import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import COLORS from '../constants/colors';

interface IFilterSwitchProps {
	label: string,
	value: boolean,
	onChange: (newValue: boolean) => void,
};

const FilterSwitch: React.FC<IFilterSwitchProps> = ({ label, value, onChange }) => (
	<View style={styles.filterContainer}>
		<Text>{label}</Text>
		<Switch
			value={value}
			onValueChange={onChange}
			trackColor={{true: COLORS.primaryColor}}
			thumbColor={Platform.OS === 'android' ? COLORS.primaryColor : ''}
		/>
	</View>
);

const styles = StyleSheet.create({
	filterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '80%',
		marginVertical: 10,
	},
});

export default FilterSwitch;