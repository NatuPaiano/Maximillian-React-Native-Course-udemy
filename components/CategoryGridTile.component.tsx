import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Platform, TouchableNativeFeedback } from "react-native";

interface ICategoryGridTileProps {
	title: string,
	color: string,
	onSelect: () => void,
};

const TouchableComponent: React.ElementType = Platform.OS === 'android' && Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;

const CategoryGridTile: React.FC<ICategoryGridTileProps> = ({ title, color, onSelect }) => (
	<View style={styles.gridItem}>
		<TouchableComponent style={{ flex: 1 }} onPress={onSelect}>
			<View style={{ ...styles.container, ...{ backgroundColor: color } }}>
				<Text style={styles.title} numberOfLines={2}>{title}</Text>
			</View>
		</TouchableComponent>
	</View>
);

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
		borderRadius: 10,
		overflow: 'hidden',
	},
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		padding: 15,
		borderRadius: 10,
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2},
		shadowRadius: 10,
		elevation: 3,
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		textAlign: 'right',
	},
});

export default CategoryGridTile;