import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';


const Input: React.FC<TextInputProps> = (props) => (
	<TextInput style={[styles.input, props.style]} {...props} />
);

const styles = StyleSheet.create({
	input: {
		height: 30,
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		marginVertical: 10,
	},
});

export default Input;