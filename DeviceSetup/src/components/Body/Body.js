import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from '../common/styles';
import Title from './Title';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';

const Body = props => {
  const navigation = useNavigation();
  function navigatetodeviceposition() {
    navigation.navigate('DevicePosition')
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
      <Image style={styles.deviceSetupImage} source={props.image} />
      <TouchableOpacity>
        <Button
          isPrimary= 'true'
          image={require('../../assets/images/Rem42logo.png')}
          title={'Rem-42'}
          onPress= {navigatetodeviceposition} 
        />
      </TouchableOpacity>
      <Button
        image={require('../../assets/images/Vector.png')}
        title={'Add other device'}
      />
    </View>
  );
};

export default Body;
