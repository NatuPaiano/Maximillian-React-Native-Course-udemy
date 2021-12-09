import React from 'react';
import { View, FlatList, StyleSheet, ListRenderItemInfo } from 'react-native';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import Meal from '../models/meal';
import MealItem from './MealItem.ccmponent';

interface IMealListProps {
	listData: Meal[],
	navigation: StackNavigationProp,
};

const MealList: React.FC<IMealListProps> = ({ listData, navigation }) => {
	const renderMealItem = ({ item }: ListRenderItemInfo<Meal>) => (
		<MealItem meal={item} onSelect={() => navigation.navigate({
			routeName: 'MealDetail',
			params: {
				mealId: item.id,
			},
		})}	/>
	);

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