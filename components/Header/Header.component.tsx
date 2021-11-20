import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
import DefaultStyles from '../../constants/defaultStyles';

interface IHeaderProps {
	title: string,
}

const Header: React.FC<IHeaderProps> = ({ title }) => (
	<View style={styles.header}>
		<Text style={DefaultStyles.title}>{title}</Text>
	</View>
);

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		paddingTop: 36,
		backgroundColor: Colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Header;