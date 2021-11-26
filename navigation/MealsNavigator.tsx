
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
	Categories: CategoriesScreen,
	CategoryMeals: CategoryMealScreen,
	Favorites: FavoritesScreen,
	MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);