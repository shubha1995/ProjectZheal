import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import Arrow from '../components/Appbar/Arrow';
import Body from '../components/Body/Body';
import { styles } from '../components/common/styles';


const DeviceSetup = () => {
  return (
    <View style= {styles.device}>
    <Arrow image = {require('../assets/images/Leftarrow.png')}/>
    <Body image = {require('../assets/images/device1.png')}/>     
  
    </View>
  )
};



export default DeviceSetup;