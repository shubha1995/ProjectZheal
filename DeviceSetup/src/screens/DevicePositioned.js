import { View, Image } from 'react-native'
import React from 'react';
import { styles } from '../components/common/styles';
import DevicePositionedBody from '../components/Body/DevicePositionBody';


const SmartWatches = () => {
  return (
    <View style= {styles.device}>
    <DevicePositionedBody image = {require('../assets/images/DevicePosition.png')}/>
  
    </View>
  )
};



export default SmartWatches;