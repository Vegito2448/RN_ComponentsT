import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useState } from 'react';
import { Animated, Dimensions, Image, ImageSourcePropType, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import useAnimation from '../hooks/useAnimation';
interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

interface SlidesScreenProps extends StackScreenProps<any, any> {

}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png')
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png')
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png')
  },
];

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');



const SlidesScreen = ({ navigation: { navigate } }: SlidesScreenProps) => {
  const [activeIndexCarousel, setActiveIndexCarousel] = useState(0);

  const { opacity, fadeIn, fadeOut } = useAnimation();
  const { theme: { colors: { primary, text, background }, dividerColor, dark } } = useContext(ThemeContext);
  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: background,
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
          alignItems: 'center'
        }}

      >
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center'
          }}
        />
        <Text style={{
          ...styles.title,
          color: primary
        }}>{item.title}</Text>
        <Text style={{
          ...styles.subtitle,
          color: text
        }}>{item.desc}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{
      flex: 1,
      paddingTop: 50,
      backgroundColor: background,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Carousel
        data={items}
        renderItem={({ item }) =>
          renderItem(item)
        }
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={(index) => {

          setActiveIndexCarousel(index);
          if (index === (items.length - 1))
            fadeIn();
          if (index === (items.length - 2))
            fadeOut();
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          alignItems: 'center',
          width: '100%'
        }}
      >
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndexCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: primary
          }}
        />
        {activeIndexCarousel === (items.length - 1) &&
          <Animated.View
            style={{
              opacity
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: primary,
                borderRadius: 10,
                width: 140,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={.8}
              onPress={() =>
                navigate('HomeScreen')
              }
            >
              <Icon
                name='chevron-forward-outline'
                color={text}
                size={30}
              />
              <Text
                style={{
                  fontSize: 25,
                  color: text,
                  marginLeft: 5
                }}
              >Enter</Text>
            </TouchableOpacity>
          </Animated.View>
        }
      </View>
    </SafeAreaView>
  );
};

export default SlidesScreen;
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red'
  },
  subtitle: {
    fontSize: 16,
    color: 'black'
  }
});