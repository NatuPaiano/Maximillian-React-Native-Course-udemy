import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

const CategoriesScreen = ({ navigation }: NavigationStackScreenProps) => (
	<View style={styles.screen}>
		<Text>The Categories Screen!</Text>
		<Button title="go to meals" onPress={() => {
			navigation.navigate('CategoryMeals');
		}} />
	</View>
);

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CategoriesScreen;