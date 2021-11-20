import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

interface INumberContainerProps {
	children: number,
};

const NumberContainer: React.FC<INumberContainerProps> = ({ children }) => (
	<View style={styles.container}>
		<Text style={styles.number}>{children}</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: Colors.accent,
		padding: 10,
		borderRadius: 10,
		marginVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	number: {
		color: Colors.accent,
		fontSize: 22,
	},
});

export default NumberContainer;