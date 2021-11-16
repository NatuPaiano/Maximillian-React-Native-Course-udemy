import React, { useState } from 'react';
import { Button, StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput/GoalInput.component';
import GoalItem, { IGoalItem } from './components/GoalItem/GoalItem.component';

export default function App() {
	const [goals, setGoals] = useState<IGoalItem[]>([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const handleAddGoal = (goalValue: string) => {
		setGoals([...goals, { key: Math.random().toString(), value: goalValue }]);
		setIsAddMode(false);
	};
	const handleRemoveGoal = (id: string) => {
		setGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.key !== id);
		});
	};
	const handleSetAddMode = () => {
		setIsAddMode(true);
	};
	const handleCancelAddMode = () => {
		setIsAddMode(false);
	};

  return (
    <View style={styles.screen}>
			<Button title="Add New Goal" onPress={handleSetAddMode} />
			<GoalInput onAddGoal={handleAddGoal} visible={isAddMode} handleCancel={handleCancelAddMode} />
			<FlatList
				data={goals}
				renderItem={({ item }) => <GoalItem goal={item} handleRemoveGoal={handleRemoveGoal} />}
			>
			</FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
	},
});
