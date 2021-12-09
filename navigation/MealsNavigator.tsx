
import React from 'react';
import { createStackNavigator, NavigationStackScreenComponent } from 'react-navigation-stack';
import { createBottomTabNavigator, NavigationTabProp } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator, NavigationMaterialBottomTabOptions } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer, NavigationRouteConfigMap } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FiltersScreen from '../screens/FiltersScreen';
import { Platform } from 'react-native';
import COLORS from '../constants/colors';

const defaultStackNavOptions = {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: Platform.OS === 'android' ? COLORS.primaryColor : '',
		},
		headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
	}
};

const MealsNavigator = createStackNavigator({
	Categories: CategoriesScreen,
	CategoryMeals: CategoryMealScreen as NavigationStackScreenComponent,
	MealDetail: MealDetailScreen,
}, defaultStackNavOptions);

const FavoritesNavigator = createStackNavigator({
	screen: FavoritesScreen,
	MealDetail: MealDetailScreen,
}, defaultStackNavOptions);

const tabScreenRoutes: NavigationRouteConfigMap<NavigationMaterialBottomTabOptions, NavigationTabProp> = {
	Meals: { 
		screen: MealsNavigator,
		navigationOptions: {
			tabBarIcon: (tabInfo) => (
				<Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
			),
			tabBarColor: COLORS.primaryColor,
		},
	},
	Favorites: { 
		screen: FavoritesNavigator,
		navigationOptions: {
			tabBarLabel: 'Favorites!',
			tabBarIcon: (tabInfo) => (
				<Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
			),
			tabBarColor: COLORS.accentColor,
		},
	},
};

const MealsFavTabNavigator = Platform.OS === 'android'
? createMaterialBottomTabNavigator(tabScreenRoutes, {
	activeColor: 'white',
	shifting: true,
})
: createBottomTabNavigator(tabScreenRoutes,
	{
		tabBarOptions: {
			activeTintColor: COLORS.accentColor,
	},
});

const FiltersNavigator = createStackNavigator({
	Filters: FiltersScreen,
});

const MainNavigator = createDrawerNavigator({
	MealsFavs: MealsFavTabNavigator,
	Filters: FiltersNavigator,
});

export default createAppContainer(MainNavigator);