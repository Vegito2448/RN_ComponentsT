import { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const SwitchScreen = () => {

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const { theme: { colors: { primary, text } } } = useContext(ThemeContext);

  const { isActive, isHungry, isHappy } = state;
  const onChange = (value: boolean, field: keyof typeof state) =>
    setState((prevState) => ({
      ...prevState,
      [field]: value,
    }));


  return (
    <View style={{
      marginHorizontal: 20,
    }}>
      <HeaderTitle title="Switch's" />
      <View style={styles.switchRow}>
        <Text style={{
          ...styles.switchText,
          color: text
        }}>
          IsActive:
        </Text>
        <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
      </View>
      <View style={styles.switchRow}>
        <Text style={{
          ...styles.switchText,
          color: text
        }}>
          IsHungry:
        </Text>
        <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
      </View>
      <View style={styles.switchRow}>
        <Text style={{
          ...styles.switchText,
          color: text
        }}>
          IsHappy:
        </Text>
        <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
      </View>

      <Text style={{
        ...styles.switchText,
        color: text
      }}>{JSON.stringify(state, null, 3)}</Text>
    </View>
  );
};

export default SwitchScreen;
const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },

});