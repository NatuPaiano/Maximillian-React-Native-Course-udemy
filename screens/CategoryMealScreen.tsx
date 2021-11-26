import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

const CategoryMealScreen: React.FC<NavigationStackScreenProps> = ({ navigation }) => (
	<View style={styles.screen}>
		<Text>The Category Meal Screen!</Text>
		<Button title="go to Details" onPress={() => {
			navigation.navigate('MealDetail');
		}} />
		<Button title="go Back" onPress={() => navigation.goBack()} />
	</View>
);

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CategoryMealScreen;