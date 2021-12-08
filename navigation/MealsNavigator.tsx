
import { createStackNavigator, NavigationStackScreenComponent } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { Platform } from 'react-native';
import COLORS from '../constants/colors';

const MealsNavigator = createStackNavigator({
	Categories: CategoriesScreen,
	CategoryMeals: CategoryMealScreen as NavigationStackScreenComponent,
	MealDetail: MealDetailScreen,
}, {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: Platform.OS === 'android' ? COLORS.primaryColor : '',
		},
		headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
	},
});

const MealsFavTabNavigator = createBottomTabNavigator({
	Meals: MealsNavigator,
	Favorites: FavoritesScreen,
});

export default createAppContainer(MealsFavTabNavigator);