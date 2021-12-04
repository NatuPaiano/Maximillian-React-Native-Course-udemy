import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

const MealDetailScreen: NavigationStackScreenComponent = ({ navigation }) => (
	<View style={styles.screen}>
		<Text>The Meal Detail Screen!</Text>
		<Button title="go back to Categories" onPress={() => {
			navigation.popToTop();
		}} />
	</View>
);

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default MealDetailScreen;