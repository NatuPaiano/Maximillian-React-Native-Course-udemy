export enum MealsActionTypes {
	TOGGLE_FAVORITE = 'TOGGLE_FAVORITE',
	SET_FILTERS = 'SET_FILTERS',
};

interface IToggleFavorite {
	id: string,
};

interface ISetFilters {
	glutenFree: boolean,
	lactoseFree: boolean,
	vegan: boolean,
	vegetarian: boolean,
};

export type MealsAction = 
| { type: MealsActionTypes.TOGGLE_FAVORITE,	payload: IToggleFavorite }
| { type: MealsActionTypes.SET_FILTERS,	payload: ISetFilters };

export const toggleFavorite = (payload: IToggleFavorite): MealsAction => {
	return {
		type: MealsActionTypes.TOGGLE_FAVORITE,
		payload,
	};
};

export const setFilters = ({ ...filters }: ISetFilters): MealsAction => {
	return {
		type: MealsActionTypes.SET_FILTERS,
		payload: filters,
	};
};