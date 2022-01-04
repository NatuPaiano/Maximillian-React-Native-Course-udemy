import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import MealList from '../components/MealList.component';
import { CATEGORIES } from '../data/dummy-data';
import { useTypedSelector } from '../store/hooks';

export interface ICategoryMealScreenParams {
	categoryId: string,
};

const CategoryMealScreen: NavigationStackScreenComponent<ICategoryMealScreenParams> = ({ navigation }) => {
	const catId = navigation.getParam('categoryId');
	const filteredMeals = useTypedSelector(({ mealsState }) => mealsState.filteredMeals);
	const displayedMeals = filteredMeals.filter((meal) => meal.categoryIds.includes(catId));

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