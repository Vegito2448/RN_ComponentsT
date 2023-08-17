import React, { useContext } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useForm } from '../hooks/useForm';
import { styles } from '../themes/AppTheme';

const TextInputScreen = () => {
  const { form, onChange, ...state } = useForm({ name: '', email: '', phone: '', isSubscribed: false });
  const { theme: { colors: { primary, text }, dividerColor, dark } } = useContext(ThemeContext);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.globalMargin}>
            <HeaderTitle title='Text Inputs' />
            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                borderColor: dividerColor,
                color: text
              }}
              placeholderTextColor={dividerColor}
              keyboardAppearance={dark ? 'dark' : 'light'}
              placeholder='Name'
              autoCorrect={false} autoCapitalize='words'
              onChangeText={(value) => onChange(value, 'name')}
              value={form.name}
            />
            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                borderColor: dividerColor,
                color: text
              }}
              placeholderTextColor={dividerColor}
              keyboardAppearance={dark ? 'dark' : 'light'}
              keyboardType='email-address'
              placeholder='Email'
              autoCapitalize='none'
              onChangeText={(value) => onChange(value, 'email')}
              value={form.email}
            />
            <Text style={styles.title}>Subscribe Me</Text>
            <CustomSwitch isOn={form.isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')} />
            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                borderColor: dividerColor,
                color: text
              }}
              placeholderTextColor={dividerColor}
              keyboardAppearance={dark ? 'dark' : 'light'}
              placeholder='Phone'
              keyboardType='phone-pad'
              onChangeText={(value) => onChange(value, 'phone')}
              value={form.phone} />
            <HeaderTitle title={JSON.stringify(form, null, 2)} />
          </View>
          <View style={{ height: 100 }} />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default TextInputScreen;
const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  }
});