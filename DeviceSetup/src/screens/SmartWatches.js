import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Arrow from '../components/appbar/arrow';
import {styles} from '../components/common/styles';
import SmartwatchesBody from '../components/body/smartwatchesBody';
import {ARROW} from '../assets/image';

const SmartWatches = () => {
  return (
    <View style={styles.container}>
      <View style={styles.arrow}>
        <ARROW height={18} />
      </View>
      <View style={styles.smartWatchesbody}>
        <SmartwatchesBody />
      </View>
    </View>
  );
};

export default SmartWatches;
