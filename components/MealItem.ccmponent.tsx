import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Meal from '../models/meal';

interface IMealItemProps {
	meal: Meal,
	onSelect: () => void,
};

const MealItem: React.FC<IMealItemProps> = ({
	meal: {
		title,
		duration,
		complexity,
		affordability,
		imageUrl,
	},
	onSelect,
}) => (
	<View style={styles.mealItem}>
		<TouchableOpacity onPress={onSelect}>
			<View>
				<View style={{...styles.mealRow, ...styles.mealHeader}}>
					<ImageBackground source={{ uri: imageUrl }} style={styles.imageBackground}>
						<View style={styles.titleContainer}>
							<Text style={styles.title} numberOfLines={1}>{title}</Text>
						</View>
					</ImageBackground>
				</View>
				<View style={{...styles.mealRow, ...styles.mealDetail}}>
					<Text>{duration}m</Text>
					<Text>{complexity.toUpperCase()}</Text>
					<Text>{affordability.toUpperCase()}</Text>
				</View>
			</View>
		</TouchableOpacity>
	</View>
);

const styles = StyleSheet.create({
	mealItem: {
		height: 200,
		width: '100%',
		backgroundColor: '#f5f5f5',
		borderRadius: 10,
		overflow: 'hidden',
	},
	mealRow: {
		flexDirection: 'row',
	},
	mealHeader: {
		height: '85%',
	},
	mealDetail: {
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '15%',
	},
	imageBackground: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
	},
	titleContainer: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		paddingVertical: 5,
		paddingHorizontal: 12,
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		color: 'white',
		textAlign: 'center',
	},
});

export default MealItem;