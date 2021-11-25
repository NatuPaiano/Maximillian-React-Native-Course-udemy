import React, { ComponentType } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Platform,
	TouchableNativeFeedback,
	TouchableOpacityProps,
	TouchableNativeFeedbackProps,
} from 'react-native';
import Colors from '../../constants/colors';

interface IMainButtonProps {
	onPress: () => void,
};

const MainButton: React.FC<IMainButtonProps> = ({ children, onPress }) => {
	let ButtonComponent: ComponentType<TouchableOpacityProps | TouchableNativeFeedbackProps> = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
		ButtonComponent = TouchableNativeFeedback;
	};

	return (
		<View style={styles.buttonContainer}>
			<ButtonComponent activeOpacity={0.6} onPress={onPress}>
				<View style={styles.button}>
					<Text style={styles.buttonText}>{children}</Text>
				</View>
			</ButtonComponent>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		borderRadius: 35,
		overflow: 'hidden',
	},
	button: {
		backgroundColor: Colors.primary,
		paddingVertical: 20,
		paddingHorizontal: 30,
		borderRadius: 35,
	},
	buttonText: {
		color: 'white',
		fontFamily: 'open-sans',
		fontSize: 18,
	},
});

export default MainButton;