import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../common/styles';
import Title from './title';
import Button from './button';
import { useNavigation } from '@react-navigation/native';
import { LOGO, VECTOR } from '../../assets/image';

const Body = props => {
  const navigation = useNavigation();
  function navigatetodeviceposition () {
    navigation.navigate('DevicePosition');
  }
  function navigatetoSmartWatches () {
    navigation.navigate('SmartWatches');
  }

  return (
    <View style={styles.body}>
      <Title />
      <Text style={styles.setupText}>
        Setup REM-42 device for a better experience
      </Text>
      <Text style={styles.continueText}>
        Continuing without device will end up with insuffecient data
      </Text>
      {props.image}
      <TouchableOpacity>
        <Button
          isPrimary="true"
          logoimage={<LOGO height={20} />}
          title={'Rem-42'}
          onPress={navigatetodeviceposition}
        />
      </TouchableOpacity>
      <Button
        logoimage={<VECTOR height={20} />}
        title={'Add other device'}
        onPress={navigatetoSmartWatches}
      />
    </View>
  );
};

export default Body;
