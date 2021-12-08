import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../constants/colors';
import { Platform } from 'react-native';

const CustomHeaderButton: React.FC = (props) => (
	<HeaderButton
		title=''
		IconComponent={Ionicons}
		iconSize={23}
		color={Platform.OS === 'android' ? 'white' : COLORS.primaryColor }
		{...props}
	/>
);

export default CustomHeaderButton;