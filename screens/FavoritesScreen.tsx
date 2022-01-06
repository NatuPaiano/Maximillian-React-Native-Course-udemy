import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import CustomHeaderButton from '../components/CustomHeaderButton.component';
import DefaultText from '../components/DefaultText.component';
import MealList from '../components/MealList.component';
import { useTypedSelector } from '../store/hooks';

const FavoritesScreen: NavigationStackScreenComponent = ({ navigation }) => {
	const favoriteMeals = useTypedSelector(({ mealsState }) => mealsState.favoriteMeals);
	
	return (
		<View style={styles.content}>
			{ 
				favoriteMeals.length 
					? <MealList listData={favoriteMeals} navigation={navigation} />
					: <DefaultText>No favorite meals found. Start adding some!</DefaultText>
			}
		</View>
	);
};

FavoritesScreen.navigationOptions = ({ navigation }) => {
	return {
		headerTitle: 'Your Favorites',
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item title='menu' iconName="ios-menu" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default FavoritesScreen;