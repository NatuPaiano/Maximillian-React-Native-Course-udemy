export enum MealsActionTypes {
	TOGGLE_FAVORITE = 'TOGGLE_FAVORITE',
};

interface IToggleFavorite {
	id: string,
};

export type MealsAction = { type: MealsActionTypes.TOGGLE_FAVORITE, id: IToggleFavorite };

export const toggleFavorite = (id: IToggleFavorite): MealsAction => {
	return {
		type: MealsActionTypes.TOGGLE_FAVORITE,
		id,
	};
};