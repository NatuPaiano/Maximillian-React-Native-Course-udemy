import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

interface IDefaultText {
	style?: StyleProp<TextStyle>,
};

const DefaultText: React.FC<IDefaultText> = ({ children, style }) => (
	<Text style={[styles.text, style]}>{children}</Text>
);

const styles = StyleSheet.create({
	text: {
		fontFamily: 'open-sans',
	},
});

export default DefaultText;