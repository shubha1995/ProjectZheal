import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {styles} from '../common/styles';
import Title from './Title';
import Button from './Button';

const SmartwatchesBody = (props) => {
  return (
    <View style={styles.smartwatchesbody}>
      <Title />
      <Text style={styles.watches}>
        Smart Watches
      </Text>
      <View style={styles.hrline}/>
      <Button
      image={require('../../assets/images/Fitbit.png')}
      title={'Fitbit'}
    />
    <Button
        image={require('../../assets/images/Amazefit.png')}
        title={'Amazefit'}
      />
    <View/>

      <Text style={styles.watches}>
        Wearable devices
      </Text>
      <View style={styles.hrline}/>
      
      <Button 
        image={require('../../assets/images/Auraring.png')}
        title={'Aura Ring'}
      />
    </View>
  )
}

export default SmartwatchesBody