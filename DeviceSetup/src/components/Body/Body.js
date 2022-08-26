import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {styles} from '../common/styles';
import Title from './Title';
import Button from './Button';

const Body = props => {
  return (
    <View style={styles.body}>
      <Title />
      <Text style={styles.setup}>
        Setup REM-42 device for a better experience
      </Text>
      <Text style={styles.continue}>
        Continuing without device will end up with insuffecient data
      </Text>
      <Image style={styles.device1} source={props.image} />
      <Button
        image={require('../../assets/images/Rem42logo.png')}
        title={'Rem-42'}
      />
      <Button 
        image={require('../../assets/images/Vector.png')}
        title={'Add other device'}
      />
    </View>
  );
};

export default Body;
