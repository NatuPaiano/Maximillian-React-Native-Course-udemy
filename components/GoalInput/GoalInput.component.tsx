import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, View, Modal } from 'react-native';

interface IGoalInputProps {
	onAddGoal: (goalValue: string) => void,
	visible: boolean,
	handleCancel: () => void,
}

const GoalInput: React.FC<IGoalInputProps> = ({ onAddGoal, visible, handleCancel }) => {
	const [enteredGoal, setEnteredGoal] = useState('');

	const handleInputGoal = (enteredText: string) => {
		setEnteredGoal(enteredText);
	};
	const handleAddGoal = () => {
		onAddGoal(enteredGoal);
		setEnteredGoal('');
	};

	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput style={styles.textInput} placeholder="Course goal" onChangeText={handleInputGoal} value={enteredGoal} />
				<View style={styles.buttonsContainer}>
					<View style={styles.button}>
						<Button title="Cancel" color="red" onPress={handleCancel} />
					</View>
					<View style={styles.button}>
						<Button title="Add" onPress={handleAddGoal} />
					</View>
				</View>
			</View>
		</Modal>
	);
} 

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textInput: {
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		marginBottom: 10,
		width: '80%',
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '60%',
	},
	button: {
		width: '40%',
	},
});

export default GoalInput;