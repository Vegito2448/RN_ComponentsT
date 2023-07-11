import React, { useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import FadeInImage from '../components/FadeInImage';
import HeaderTitle from '../components/HeaderTitle';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => setNumbers([...numbers, ...newArray]), 1500);
  };

  const renderItem = (item: number) =>
    <FadeInImage
      uri={`https://picsum.photos/id/${item}/1024/1080`}
      style={{
        width: '100%',
        height: 400
      }}
    />;
  return (
    <View style={{
      flex: 1,
      marginTop: 20,
      backgroundColor: 'skyblue'
    }}>
      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => renderItem(item)}
        ListHeaderComponent={() =>
          <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title="Infinite Scroll" />
          </View>}
        ListFooterComponent={() => <View style={{
          height: 150,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}><ActivityIndicator size={50} color="white" /></View>}
        onEndReached={loadMore}
        onEndReachedThreshold={1 / 2}
      />
    </View>
  );
};

export default InfiniteScrollScreen;
const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150

  }
});