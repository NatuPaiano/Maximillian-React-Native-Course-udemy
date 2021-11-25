import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Colors from '../../constants/colors';
import DefaultStyles from '../../constants/defaultStyles';

interface IHeaderProps {
	title: string,
}

const Header: React.FC<IHeaderProps> = ({ title }) => (
	<View 
		style={{
			...styles.headerBase,
			...Platform.select({
				ios: styles.headerIOS,
				android: styles.headerAndroid,
			}),
		}}
	>
		<Text style={[DefaultStyles.title, styles.title]}>{title}</Text>
	</View>
);

const styles = StyleSheet.create({
	headerBase: {
		width: '100%',
		height: 90,
		paddingTop: 36,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerIOS: {
		backgroundColor: 'white',
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
	},
	headerAndroid: {
		backgroundColor: Colors.primary,
	},
	title: {
		color: Platform.OS === 'ios' ? Colors.primary : 'white',
	},
});

export default Header;