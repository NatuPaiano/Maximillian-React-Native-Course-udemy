import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export interface IGoalItem {
	key: string,
	value: string,
}

interface IGoalItemProps {
	goal: IGoalItem,
	handleRemoveGoal: (id: string) => void,
}

const GoalItem: React.FC<IGoalItemProps> = ({ goal, handleRemoveGoal }) => (
	<TouchableOpacity activeOpacity={0.8} onPress={() => handleRemoveGoal(goal.key)}>
		<View style={styles.listItem}>
			<Text>{goal.value}</Text>
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1,
	},
});

export default GoalItem;