import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

interface IDefaultTextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  isBold?: boolean;
}

const DefaultText = ({ children, style = null, isBold = false }: IDefaultTextProps) => {
  const fontFamilyVariant = isBold ? 'open-sans-bold' : 'open-sans';
  return <Text style={[styles.text, { fontFamily: fontFamilyVariant }, style]}>{children}</Text>;
};

// TODO: ver cómo pasarle bold o hacer el condicional arriba para pasarle la font family
const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
    fontSize: 14,
  },
});

export default DefaultText;
