import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { CATEGORIES } from '../data/dummy-data';

interface ICategoryMealScreenParams {
	categoryId: string,
};

const CategoryMealScreen = ({ navigation }: NavigationStackScreenProps) => {
	const catId = navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find((category) => category.id === catId);

	return (
		<View style={styles.screen}>
			<Text>The Category Meal Screen!</Text>
			<Text>{selectedCategory?.title}</Text>
			<Button title="go to Details" onPress={() => {
				navigation.navigate('MealDetail');
			}} />
			<Button title="go Back" onPress={() => navigation.goBack()} />
		</View>
	);
}

CategoryMealScreen.navigationOptions = ({ navigation }: NavigationStackScreenProps<ICategoryMealScreenParams>) => {
	const catId = navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find((category) => category.id === catId);
	
	return {
		headerTitle: selectedCategory?.title,
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CategoryMealScreen;