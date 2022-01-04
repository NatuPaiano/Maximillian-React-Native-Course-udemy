export enum MealsActionTypes {
	TOGGLE_FAVORITE = 'TOGGLE_FAVORITE',
};

interface IToggleFavorite {
	id: string,
};

export type MealsAction = { type: MealsActionTypes.TOGGLE_FAVORITE, payload: IToggleFavorite };

export const toggleFavorite = (payload: IToggleFavorite): MealsAction => {
	return {
		type: MealsActionTypes.TOGGLE_FAVORITE,
		payload,
	};
};