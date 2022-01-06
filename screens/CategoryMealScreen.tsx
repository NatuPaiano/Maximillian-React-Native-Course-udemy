import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import DefaultText from '../components/DefaultText.component';
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
		displayedMeals.length 
		? <MealList listData={displayedMeals} navigation={navigation} />
		: <View style={styles.content}>
				<DefaultText>No meals found, maybe check your filters?</DefaultText>
			</View>
	);
}

CategoryMealScreen.navigationOptions = ({ navigation }) => {
	const catId = navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find((category) => category.id === catId);
	
	return {
		headerTitle: selectedCategory?.title,
	};
};

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CategoryMealScreen;