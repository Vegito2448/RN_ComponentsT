import React from 'react';
import { FlatList, View } from 'react-native';
import FlatListMenuItem from '../components/FlatListMenuItem';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';
import { MenuItems } from '../data/menuItems';
import { styles } from '../themes/AppTheme';




const HomeScreen = () => {





  return (
    <View style={{
      ...styles.globalMargin,
      flex: 1,
    }}>
      <FlatList
        data={MenuItems}
        renderItem={({ item, index }) => <FlatListMenuItem menuItem={item} />}
        ListHeaderComponent={<HeaderTitle title='Menu Options' />}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={({ name }) => name}
      />
    </View>
  );
};

export default HomeScreen;