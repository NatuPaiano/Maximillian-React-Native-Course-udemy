import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import CustomHeaderButton from '../components/CustomHeaderButton.component';

const FiltersScreen: NavigationStackScreenComponent = () => (
	<View style={styles.screen}>
		<Text>The Filters Screen!</Text>
	</View>
);

FiltersScreen.navigationOptions = ({ navigation }) => {
	return {
		headerTitle: 'Filter Meals',
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item title='menu' iconName="ios-menu" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
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
});

export default FiltersScreen;