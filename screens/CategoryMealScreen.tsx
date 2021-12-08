import React from 'react';
import { StyleSheet, View, FlatList, ListRenderItemInfo } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import MealItem from '../components/MealItem.ccmponent';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Meal from '../models/meal';

export interface ICategoryMealScreenParams {
	categoryId: string,
};

const CategoryMealScreen: NavigationStackScreenComponent<ICategoryMealScreenParams> = ({ navigation }) => {
	const catId = navigation.getParam('categoryId');
	const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(catId));

	const renderMealItem = ({ item }: ListRenderItemInfo<Meal>) => (
		<MealItem meal={item} onSelect={() => navigation.navigate({
			routeName: 'MealDetail',
			params: {
				mealId: item.id,
			},
		})}	/>
	);

	return (
		<View style={styles.screen}>
			<FlatList style={styles.mealsList} data={displayedMeals} renderItem={renderMealItem} />
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
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	mealsList: {
		width: '100%',
	},
});

export default CategoryMealScreen;