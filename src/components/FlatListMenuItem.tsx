import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces';
interface Props {
  menuItem: MenuItem;
}
const FlatListMenuItem = ({ menuItem: { icon, name, component } }: Props) => {
  const { top } = useSafeAreaInsets();
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => navigate(component)}>
      <View style={styles.container}>
        <Icon name={icon} size={15} color='red' />
        <Text style={styles.itemText}>{name}</Text>
        <Icon name='chevron-forward' size={20} color='red' style={{
          position: 'absolute',
          right: 10,
        }} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
    color: 'black',
  }
});
export default FlatListMenuItem;