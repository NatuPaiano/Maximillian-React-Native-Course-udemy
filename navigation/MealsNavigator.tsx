
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
import { Platform, Text } from 'react-native';
import COLORS from '../constants/colors';

const defaultStackNavOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? COLORS.primaryColor : '',
	},
	headerTitleStyle: {
		fontFamily: 'open-sans-bold',
	},
	headerBackTitleStyle: {
		fontFamily: 'open-sans-bold',
	},
	headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
};

const MealsNavigator = createStackNavigator({
	Categories: CategoriesScreen,
	CategoryMeals: CategoryMealScreen as NavigationStackScreenComponent,
	MealDetail: MealDetailScreen,
}, {
	defaultNavigationOptions: defaultStackNavOptions,
});

const FavoritesNavigator = createStackNavigator({
	screen: FavoritesScreen,
	MealDetail: MealDetailScreen,
}, {
	defaultNavigationOptions: defaultStackNavOptions,
});

const tabScreenRoutes: NavigationRouteConfigMap<NavigationMaterialBottomTabOptions, NavigationTabProp> = {
	Meals: { 
		screen: MealsNavigator,
		navigationOptions: {
			tabBarIcon: (tabInfo) => (
				<Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
			),
			tabBarColor: COLORS.primaryColor,
			tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text> : 'Meals',
		},
	},
	Favorites: { 
		screen: FavoritesNavigator,
		navigationOptions: {
			tabBarIcon: (tabInfo) => (
				<Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
			),
			tabBarColor: COLORS.accentColor,
			tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }}>Favorites</Text> : 'Favorites',
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
			labelStyle: {
				fontFamily: 'open-sans',
			},
			activeTintColor: COLORS.accentColor,
	},
});

const FiltersNavigator = createStackNavigator({
	Filters: FiltersScreen,
},
{
	/*navigationOptions: {
		drawerLabel: 'Filters!!',
	},*/
	defaultNavigationOptions: defaultStackNavOptions,
});

const MainNavigator = createDrawerNavigator({
	Meals: MealsFavTabNavigator,
	Filters: FiltersNavigator,
}, {
	contentOptions: {
		activeTintColor: COLORS.accentColor,
		labelStyle: {
			fontFamily: 'open-sans-bold',
		},
	},
});

export default createAppContainer(MainNavigator);