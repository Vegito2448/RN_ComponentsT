import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const ItemSeparator = () => {
  const { theme: { dividerColor } } = useContext(ThemeContext)
  return (
    <View style={{
      borderBottomWidth: 1,
      borderBottomColor: dividerColor,
      opacity: .4,
      marginVertical: 4,
    }} />
  );
};

export default ItemSeparator;