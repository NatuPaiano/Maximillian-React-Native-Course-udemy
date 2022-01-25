import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

interface ICustomHeaderButtonProps {
  onPress: () => void;
}

const CustomHeaderButton = (props: ICustomHeaderButtonProps) => (
  <HeaderButton title="" IconComponent={Ionicons} iconSize={23} color="white" {...props} />
);

export default CustomHeaderButton;
