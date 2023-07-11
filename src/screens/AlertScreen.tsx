import React from 'react';
import { Alert, Button, View } from 'react-native';
import prompt from 'react-native-prompt-android';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../themes/AppTheme';
const AlertScreen = () => {
  const showAlert = () =>
    Alert.alert('Alert Title', 'This is Message Alert', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
      {
        cancelable: true,
        onDismiss: () => console.log('onDismiss'),
      });
  const showPrompt = () => {
    /* Alert.prompt(
      'Are you sure?',
      'This action cannot be undone',
      (value: string) => console.log('info', value),
      'plain-text',
      'Default Value',
      'number-pad',
    ); */
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'destructive' },
        { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
      ],
      {
        type: 'secure-text',
        cancelable: true,
        defaultValue: 'test',
        placeholder: 'placeholder',
      }
    );

  };
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Native Alert' />
      <Button title='Show Alert' onPress={showAlert} />
      <View style={{ height: 10 }} />
      <Button title='Show Prompt' onPress={showPrompt} />
    </View>
  );
};

export default AlertScreen;