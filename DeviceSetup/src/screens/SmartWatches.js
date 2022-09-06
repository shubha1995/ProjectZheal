import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Arrow from '../components/appbar/arrow';
import {styles} from '../components/common/styles';
import SmartwatchesBody from '../components/body/smartwatchesBody';

const SmartWatches = () => {
  return (
    <View style={styles.device}>
      <Arrow image={require('../assets/images/Leftarrow.png')} />
      <SmartwatchesBody />
    </View>
  );
};

export default SmartWatches;
