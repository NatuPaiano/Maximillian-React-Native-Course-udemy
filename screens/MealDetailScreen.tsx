import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import CustomHeaderButton from '../components/CustomHeaderButton.component';
import DefaultText from '../components/DefaultText.component';
import COLORS from '../constants/colors';
import { MEALS } from '../data/dummy-data';

const ListItem: React.FC = ({ children }) => (
	<View style={styles.listItem}>
		<DefaultText>{children}</DefaultText>
	</View>
);

const MealDetailScreen: NavigationStackScreenComponent = ({ navigation }) => {
	const mealId = navigation.getParam('mealId');
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	const { duration, complexity,	affordability, imageUrl, ingredients, steps } = selectedMeal || {};

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
	const mealId = navigation.getParam('mealId');
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	const handlePressFavorite = () => console.log("FAVORITED MEAL!");

	return {
		headerTitle: selectedMeal?.title,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item title='Favorite' iconName='ios-star' onPress={handlePressFavorite} />
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