import { MEALS } from '../../data/dummy-data';
import Meal from '../../models/meal';
import FiltersScreen from '../../screens/FiltersScreen';
import { MealsAction, MealsActionTypes } from '../actions/meals';

interface IMealsState {
	meals: Meal[],
	filteredMeals: Meal[],
	favoriteMeals: Meal[],
};

const initialState: IMealsState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favoriteMeals: [],
};

const mealsReducer = (state = initialState, action: MealsAction): IMealsState => {
	switch (action.type) {
		case MealsActionTypes.TOGGLE_FAVORITE:
			const favoriteMeal = state.favoriteMeals.find((meal) => meal.id === action.payload.id);
			if (favoriteMeal) {
				const updatedFavoriteMeals = state.favoriteMeals.filter((meal) => meal.id !== action.payload.id);

				return {
					...state,
					favoriteMeals: updatedFavoriteMeals,
				};
			} else {
				const meal = state.meals.find((meal) => meal.id === action.payload.id)!;

				return { ...state, favoriteMeals: [...state.favoriteMeals, meal] };
			};
		case MealsActionTypes.SET_FILTERS:
			const { glutenFree, lactoseFree, vegan, vegetarian } = action.payload;
			let updatedFilteredMeals = state.meals;

			if (glutenFree) {
				updatedFilteredMeals = updatedFilteredMeals.filter((meal) => meal.isGluttenFree);
			};

			if (lactoseFree) {
				updatedFilteredMeals = updatedFilteredMeals.filter((meal) => meal.isLactoseFree);
			};

			if (vegan) {
				updatedFilteredMeals = updatedFilteredMeals.filter((meal) => meal.isVegan);
			};

			if (vegetarian) {
				updatedFilteredMeals = updatedFilteredMeals.filter((meal) => meal.isVegetarian);
			};

			return {...state, filteredMeals: updatedFilteredMeals}
		default:
			return state;
		};
	};

export default mealsReducer;