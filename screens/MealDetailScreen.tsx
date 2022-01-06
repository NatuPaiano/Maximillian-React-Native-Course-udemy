import React, { useCallback, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { useDispatch } from 'react-redux';
import CustomHeaderButton from '../components/CustomHeaderButton.component';
import DefaultText from '../components/DefaultText.component';
import COLORS from '../constants/colors';
import { toggleFavorite } from '../store/actions/meals';
import { useTypedSelector } from '../store/hooks';

const ListItem: React.FC = ({ children }) => (
	<View style={styles.listItem}>
		<DefaultText>{children}</DefaultText>
	</View>
);

const MealDetailScreen: NavigationStackScreenComponent = ({ navigation }) => {
	const allMeals = useTypedSelector(({ mealsState }) => mealsState.meals);
	const favoriteMeals = useTypedSelector(({ mealsState }) => mealsState.favoriteMeals);
	const dispatch = useDispatch();
	const mealId: string = navigation.getParam('mealId');
	const selectedMeal = allMeals.find((meal) => meal.id === mealId);
	const { duration, complexity,	affordability, imageUrl, ingredients, steps } = selectedMeal || {};

	const toggleFavoriteHandler = useCallback(() => {
		const payload = { id: mealId };
		dispatch(toggleFavorite(payload));
	}, [dispatch, mealId]);

	useEffect(() => {
		navigation.setParams({ toggleFavorite: toggleFavoriteHandler });
	}, [toggleFavoriteHandler]);

	useEffect(() => {
		const currentMealIsFavorite = favoriteMeals.find((meal) => meal.id === mealId);
		navigation.setParams({ isFavorite: currentMealIsFavorite });
	}, [favoriteMeals]);

	return (
		selectedMeal ? (
			<ScrollView>
				<Image source={{uri: imageUrl}} style={styles.image} />
				<View style={{...styles.details, ...styles.mealDetail}}>
					<DefaultText>{duration}m</DefaultText>
					<DefaultText>{complexity?.toUpperCase()}</DefaultText>
					<DefaultText>{affordability?.toUpperCase()}</DefaultText>
				</View>
				<Text style={styles.title}>Ingredients</Text>
				{ingredients?.map((ingredient) => (
					<ListItem key={ingredient}>{ingredient}</ListItem>)
				)}
				<Text style={styles.title}>Steps</Text>
				{steps?.map((step) => (
					<ListItem key={step}>{step}</ListItem>)
				)}
			</ScrollView>
		) : (
			<View style={styles.notFoundContainer}>
				<DefaultText style={styles.notFoundText}>The meal was not found!</DefaultText>
			</View>
		)
	);
} 

MealDetailScreen.navigationOptions = ({ navigation }) => {
	const mealTitle = navigation.getParam('mealTitle');
	const handleToggleFavorite = navigation.getParam('toggleFavorite');
	const isFavorite = navigation.getParam('isFavorite');

	return {
		headerTitle: mealTitle,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item title='Favorite' iconName={isFavorite ? 'ios-star' : 'ios-star-outline'} onPress={handleToggleFavorite} />
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: '100%',
		height: 200,
	},
	details: {
		flexDirection: 'row',
		padding: 15,
		justifyContent: 'space-around',
	},
	mealDetail: {
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '15%',
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		textAlign: 'center',
	},
	listItem: {
		marginVertical: 10,
		marginHorizontal: 20,
		borderColor: '#ccc',
		borderWidth: 1,
		padding: 10,
	},
	notFoundContainer: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	notFoundText: {
		fontFamily: 'open-sans-bold',
		color: COLORS.accentColor,
	},
});

export default MealDetailScreen;