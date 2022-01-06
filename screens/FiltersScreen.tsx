import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { useDispatch } from 'react-redux';
import CustomHeaderButton from '../components/CustomHeaderButton.component';
import FilterSwitch from '../components/FilterSwitch.component';
import { setFilters } from '../store/actions/meals';

const FiltersScreen: NavigationStackScreenComponent = ({ navigation }) => {
	const dispatch = useDispatch();
	const [isGlutenFree, setIsGluttenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegetarian, setisVegetarian] = useState(false);

	const saveFilters = useCallback(() => {
		const appliedFilters = {
			glutenFree: isGlutenFree,
			lactoseFree: isLactoseFree,
			vegan: isVegan,
			vegetarian: isVegetarian,
		}
		dispatch(setFilters(appliedFilters));
	}, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

	useEffect(() => {
		navigation.setParams({
			save: saveFilters,
		});
	}, [saveFilters]);

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Available Filters / Restrictions</Text>
			<FilterSwitch label='Gluten-free' value={isGlutenFree} onChange={(newValue) => setIsGluttenFree(newValue)} />
			<FilterSwitch label='Lactose-free' value={isLactoseFree} onChange={(newValue) => setIsLactoseFree(newValue)} />
			<FilterSwitch label='Vegan' value={isVegan} onChange={(newValue) => setIsVegan(newValue)} />
			<FilterSwitch label='Vegetarian' value={isVegetarian} onChange={(newValue) => setisVegetarian(newValue)} />
		</View>
	);
};

FiltersScreen.navigationOptions = ({ navigation }) => {
	return {
		headerTitle: 'Filter Meals',
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item title='menu' iconName="ios-menu" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
			</HeaderButtons>
		),
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item title='save' iconName="ios-save" onPress={navigation.getParam('save')} />
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		margin: 20,
		textAlign: 'center',
	},
});

export default FiltersScreen;