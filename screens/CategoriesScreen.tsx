import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import CategoryGridTile from '../components/CategoryGridTile.component';
import CustomHeaderButton from '../components/CustomHeaderButton.component';
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

CategoriesScreen.navigationOptions = ({ navigation }) => {
	return {
		headerTitle: 'Meal Categories',
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item title='menu' iconName="ios-menu" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
			</HeaderButtons>
		),
	};
};

export default CategoriesScreen;