import React from 'react';
import { Animated, Button, Easing, StyleSheet, View } from 'react-native';
import useAnimation from '../hooks/useAnimation';

const Animation101Screen = () => {
  const { fadeIn, fadeOut, opacity, position, startMovingPosition } = useAnimation();



  return (
    <View style={styles.container}>
      <Animated.View style={{
        ...styles.redBox,
        opacity,
        transform: [{
          translateY: position,
        }]

      }} />
      <Button title='fade In' onPress={() => {
        fadeIn();
        startMovingPosition(-100, 700, Easing.bounce);
      }} />
      <Button title='fade Out' onPress={fadeOut} />
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