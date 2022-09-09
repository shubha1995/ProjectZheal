import { View } from 'react-native';
import React from 'react';
import { styles } from '../components/common/styles';
import DevicePositionedBody from '../components/body/devicePositionBody';
import { POSITION } from '../assets/image';

const SmartWatches = () => {
  return (
    <View style={styles.container}>
      <View style={styles.device}>
        <DevicePositionedBody devicePositionImage={<POSITION height={250} />} />
      </View>
    </View>
  );
};

export default SmartWatches;
