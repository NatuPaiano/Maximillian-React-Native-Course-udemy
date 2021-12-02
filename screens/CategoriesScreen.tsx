import React from 'react';
import { StyleSheet, View, Text, FlatList, ListRenderItemInfo, TouchableOpacity, Platform } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/Category';
import COLORS from '../constants/colors';

const CategoriesScreen = ({ navigation }: NavigationStackScreenProps) => {
	const renderGridItem = ({ item: { title } }: ListRenderItemInfo<Category>) => (
		<TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('CategoryMeals')}>
			<View>
				<Text>{title}</Text>
			</View>
		</TouchableOpacity>
	);
	return (
		<FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
	);
};

CategoriesScreen.navigationOptions = {
	headerTitle: 'Meal Categories',
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? COLORS.primaryColor : '',
	},
	headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
	},
});

export default CategoriesScreen;