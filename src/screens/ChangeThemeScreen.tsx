import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../themes/AppTheme';

const ChangeThemeScreen = () => {
  const { setDarkTheme, setLightTheme, theme: { dark, colors } } = useContext(ThemeContext);
  return (
    <View style={{
      ...styles.globalMargin,
    }}>
      <HeaderTitle title='Theme' />

      <TouchableOpacity
        onPress={() => dark ? setLightTheme() : setDarkTheme()}
        activeOpacity={.8}
        style={{
          backgroundColor: colors.primary,
          justifyContent: 'center',
          width: 150,
          height: 50,
          borderRadius: 20,

        }}
      >
        <Text
          style={{
            color: colors.text,
            textAlign: 'center',
            fontSize: 22,
          }}
        >
          Light / Dark
        </Text>

      </TouchableOpacity>
    </View>
  );
};

export default ChangeThemeScreen;