import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { MEALS } from '../data/dummy-data';

const MealDetailScreen: NavigationStackScreenComponent = ({ navigation }) => (
	<View style={styles.screen}>
		<Text>The Meal Detail Screen!</Text>
		<Button title="go back to Categories" onPress={() => {
			navigation.popToTop();
		}} />
	</View>
);

MealDetailScreen.navigationOptions = ({ navigation }) => {
	const mealId = navigation.getParam('mealId');
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	return {
		headerTitle: selectedMeal?.title,
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default MealDetailScreen;