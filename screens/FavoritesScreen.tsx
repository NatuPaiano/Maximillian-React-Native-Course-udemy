import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import MealList from '../components/MealList.component';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen: NavigationStackScreenComponent = ({ navigation }) => {
	const favoriteMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');
	
	return (
		<MealList listData={favoriteMeals} navigation={navigation} />
	);
};

FavoritesScreen.navigationOptions = {
	headerTitle: 'Your Favorites',
};

export default FavoritesScreen;