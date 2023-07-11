import React, { useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../themes/AppTheme';

const ModalScreen = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal's" />
      <Button
        title="Open Modal"
        onPress={() => setVisible(true)}
      />
      <Modal
        animationType='fade'
        visible={visible}
        transparent
      >
        <View style={{
          flex: 1,
          // width: 100,
          // height: 100,
          backgroundColor: 'rgba(0,0,0,0.3)',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{
            backgroundColor: 'white',
            width: 280,
            height: 180,
            justifyContent: 'center',
            alignItems: 'center',
            shadowOffset: {
              width: 0,
              height: 10
            },
            shadowOpacity: 0.25,
            elevation: 10,
            borderRadius: 5
          }}>

            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black'
            }}>Modal</Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '300',
                color: 'black',
                marginVertical: 20
              }}
            >Modal Body</Text>
            <Button title='Close' onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;