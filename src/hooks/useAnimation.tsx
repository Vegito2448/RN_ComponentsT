import { useRef } from 'react';
import type { EasingFunction } from 'react-native';
import { Animated, Easing } from 'react-native';

const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(-100)).current;


  const fadeIn = (duration: number = 300) => {
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }
    ).start(/* () => console.log('Animation ended') This is for Start an event after the animation end */);

    Animated.timing(
      position,
      {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.bounce,
      }
    ).start();
  };
  const fadeOut = () => {
    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
      }
    ).start();
    Animated.timing(
      position,
      {
        toValue: -100,
        duration: 700,
        useNativeDriver: true,
        delay: 1000,
      }
    ).start();

  };

  const startMovingPosition = (initPosition: number = 0, duration: number = 300, easing: EasingFunction) => {
    position.setValue(initPosition);
    Animated.timing(
      position,
      {
        toValue: 0,
        duration,
        useNativeDriver: true,
        easing
      }
    ).start();

  };

  return ({ fadeIn, fadeOut, opacity, position, startMovingPosition });
};

export default useAnimation;