import React, { useState } from 'react';
import { Platform, StyleSheet, Switch } from 'react-native';
interface Props {
  isOn: boolean;
  onChange?: (value: boolean) => void;
}
export default function CustomSwitch({ isOn, onChange }: Props) {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    const newState = !isEnabled;
    if (onChange)
      onChange(newState);
    setIsEnabled(newState);
  };
  return (
    <Switch
      trackColor={{ false: '#d9d9db', true: 'red' }}
      thumbColor={Platform.OS === 'android' ? 'red' : ''}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
}

const styles = StyleSheet.create({});