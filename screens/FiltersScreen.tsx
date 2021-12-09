import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

const FiltersScreen: NavigationStackScreenComponent = () => (
	<View style={styles.screen}>
		<Text>The Filters Screen!</Text>
	</View>
);

FiltersScreen.navigationOptions = {
	headerTitle: 'Filter Meals',
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default FiltersScreen;