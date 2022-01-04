import React from 'react';
import { View, FlatList, StyleSheet, ListRenderItemInfo } from 'react-native';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import Meal from '../models/meal';
import { useTypedSelector } from '../store/hooks';
import MealItem from './MealItem.ccmponent';

interface IMealListProps {
	listData: Meal[],
	navigation: StackNavigationProp,
};

const MealList: React.FC<IMealListProps> = ({ listData, navigation }) => {
	const favoriteMeals = useTypedSelector(({ mealsState }) => mealsState.favoriteMeals);
	const renderMealItem = ({ item }: ListRenderItemInfo<Meal>) => {
		const isFavorite = favoriteMeals.find((meal) => meal.id === item.id);
		return (
			<MealItem meal={item} onSelect={() => navigation.navigate({
				routeName: 'MealDetail',
				params: {
					mealId: item.id,
					mealTitle: item.title,
					isFavorite,
				},
			})}	/>
		);
	};

	return (
		<View style={styles.list}>
			<FlatList style={styles.mealsList} data={listData} renderItem={renderMealItem} />
		</View>
	);
}

const styles = StyleSheet.create({
	list: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	mealsList: {
		width: '100%',
	},
});

export default MealList;