import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import CategoryGridTile from '../components/CategoryGridTile.component';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';

const CategoriesScreen: NavigationStackScreenComponent = ({ navigation }) => {
	const renderGridItem = ({ item: { title, color, id } }: ListRenderItemInfo<Category>) => {
		const handleCategorySelect = () => {
			navigation.navigate({ 
				routeName: 'CategoryMeals',
				params: {
					categoryId: id,
				},
			});
		};
		return <CategoryGridTile title={title} color={color} onSelect={handleCategorySelect} />
	};

	return (
		<FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
	);
};

CategoriesScreen.navigationOptions = {
	headerTitle: 'Meal Categories',
};

export default CategoriesScreen;