import React, { useContext, useState } from 'react';
import { Platform, StyleSheet, Switch } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
interface Props {
  isOn: boolean;
  onChange?: (value: boolean) => void;
}
export default function CustomSwitch({ isOn, onChange }: Props) {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const { theme: { colors: { primary, text } } } = useContext(ThemeContext);
  const toggleSwitch = () => {
    const newState = !isEnabled;
    if (onChange)
      onChange(newState);
    setIsEnabled(newState);
  };
  return (
    <Switch
      trackColor={{ false: '#d9d9db', true: primary }}
      thumbColor={Platform.OS === 'android' ? primary : ''}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
}

const styles = StyleSheet.create({});