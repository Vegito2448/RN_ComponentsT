import React, { useContext, useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import useAnimation from '../hooks/useAnimation';
interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}
const FadeInImage = ({ uri, style = {} }: Props) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  const { theme: { colors: { primary, text, background }, dividerColor, dark } } = useContext(ThemeContext);
  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };
  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {isLoading && <ActivityIndicator style={{ position: 'absolute' }} color={primary} size={30} />}
      <Animated.Image source={{ uri }} onLoad={finishLoading} style={{
        ...style as Object,
        opacity
      }} />
    </View>
  );
};

export default FadeInImage;