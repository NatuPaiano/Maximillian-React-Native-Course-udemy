import React from 'react';
import { DrawerActions } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import CustomHeaderButton from '../components/CustomHeaderButton.component';
import MealList from '../components/MealList.component';
import { useTypedSelector } from '../store/hooks';

const FavoritesScreen: NavigationStackScreenComponent = ({ navigation }) => {
	const favoriteMeals = useTypedSelector(({ meals }) => meals.favoriteMeals);
	
	return (
		<MealList listData={favoriteMeals} navigation={navigation} />
	);
};

FavoritesScreen.navigationOptions = ({ navigation }) => {
	return {
		headerTitle: 'Your Favorites',
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item title='menu' iconName="ios-menu" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
			</HeaderButtons>
		),
	};
};

export default FavoritesScreen;