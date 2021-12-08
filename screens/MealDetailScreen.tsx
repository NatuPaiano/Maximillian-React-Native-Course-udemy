import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import CustomHeaderButton from '../components/CustomHeaderButton.component';
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
	const handlePressFavorite = () => console.log("FAVORITED MEAL!");

	return {
		headerTitle: selectedMeal?.title,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item title='Favorite' iconName='ios-star' onPress={handlePressFavorite} />
			</HeaderButtons>
		),
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