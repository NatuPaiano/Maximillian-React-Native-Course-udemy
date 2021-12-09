import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import MealList from '../components/MealList.component';
import { CATEGORIES, MEALS } from '../data/dummy-data';

export interface ICategoryMealScreenParams {
	categoryId: string,
};

const CategoryMealScreen: NavigationStackScreenComponent<ICategoryMealScreenParams> = ({ navigation }) => {
	const catId = navigation.getParam('categoryId');
	const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(catId));

	return (
		<MealList listData={displayedMeals} navigation={navigation} />
	);
}

CategoryMealScreen.navigationOptions = ({ navigation }) => {
	const catId = navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find((category) => category.id === catId);
	
	return {
		headerTitle: selectedCategory?.title,
	};
};

export default CategoryMealScreen;