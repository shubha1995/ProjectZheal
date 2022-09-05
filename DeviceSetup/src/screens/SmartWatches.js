import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import Arrow from '../components/Appbar/Arrow';
import { styles } from '../components/common/styles';
import SmartwatchesBody from '../components/Body/SmartwatchesBody';


const SmartWatches = () => {

  return (
    <View style= {styles.device}>
    <Arrow image = {require('../assets/images/Leftarrow.png')}/>
    <SmartwatchesBody/>
  
    </View>
  )
};



export default SmartWatches;