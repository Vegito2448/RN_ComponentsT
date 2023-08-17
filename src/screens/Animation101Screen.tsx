import React, { useContext } from 'react';
import { Animated, Button, Easing, StyleSheet, View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import useAnimation from '../hooks/useAnimation';

const Animation101Screen = () => {
  const { fadeIn, fadeOut, opacity, position, startMovingPosition } = useAnimation();

  const { theme: { dividerColor, colors } } = useContext(ThemeContext)

  return (
    <View style={styles.container}>
      <Animated.View style={{
        ...styles.redBox,
        backgroundColor: colors.primary,
        opacity,
        transform: [{
          translateY: position,
        }]

      }} />
      <Button title='fade In' onPress={() => {
        fadeIn();
        startMovingPosition(-100, 700, Easing.bounce);
      }}
        color={colors.primary}
      />
      <Button
        title='fade Out'
        onPress={fadeOut}
        color={colors.primary}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redBox: {
    backgroundColor: 'red',
    width: 150,
    height: 150,
  }
});
export default Animation101Screen;