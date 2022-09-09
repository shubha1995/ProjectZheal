import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from '../components/common/styles';
import SmartwatchesBody from '../components/body/smartwatchesBody';
import { ARROW } from '../assets/image';
import { useNavigation } from '@react-navigation/native';

const SmartWatches = () => {
  const navigation = useNavigation();
  function navigatetoDeviceSetup () {
    navigation.navigate('Setup');
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onProgress={navigatetoDeviceSetup} style={styles.arrow} >
        <ARROW height={32} />
      </TouchableOpacity>
      <View style={styles.smartWatchesbody}>
        <SmartwatchesBody />
      </View>
    </View>
  );
};

export default SmartWatches;
