import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../constants/colors';

interface IMainButtonProps {
	onPress: () => void,
};

const MainButton: React.FC<IMainButtonProps> = ({ children, onPress }) => (
	<TouchableOpacity activeOpacity={0.6} onPress={onPress}>
		<View style={styles.button}>
			<Text style={styles.buttonText}>{children}</Text>
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.primary,
		paddingVertical: 20,
		paddingHorizontal: 30,
		borderRadius: 35,
	},
	buttonText: {
		color: 'white',
		fontFamily: 'open-sans',
		fontSize: 18,
	},
});

export default MainButton;