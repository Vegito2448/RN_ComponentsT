import React, { useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../themes/AppTheme';

const PullToRefreshScreen = () => {
  const { top } = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const onRefresh = () => {
    setRefreshing(prev => !prev);
    setTimeout(() => {
      setRefreshing(prev => !prev);
      setData('Hello World');
    }, 1500);
  };

  return (
    <ScrollView
      style={{ marginTop: refreshing ? top : 0 }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={20}
          progressBackgroundColor="red"
          // colors={['white', 'yellow', 'orange']}
          style={{ backgroundColor: '#5856D6' }}
          tintColor="white"
          title='Refreshing'
          titleColor="black"
        />
      }
    >
      <View style={styles.globalMargin}>
        <HeaderTitle title='Pull to Refresh' />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;