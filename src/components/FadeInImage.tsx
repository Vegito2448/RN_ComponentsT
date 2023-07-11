import React, { useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import useAnimation from '../hooks/useAnimation';
interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}
const FadeInImage = ({ uri, style = {} }: Props) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };
  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'skyblue'

    }}>
      {isLoading && <ActivityIndicator style={{ position: 'absolute' }} color="white" size={30} />}
      <Animated.Image source={{ uri }} onLoad={finishLoading} style={{
        ...style as Object,
        opacity
      }} />
    </View>
  );
};

export default FadeInImage;