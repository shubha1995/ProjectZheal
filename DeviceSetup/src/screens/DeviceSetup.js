import {View} from 'react-native';
import React from 'react';
// import Arrow from '../components/appbar/arrow';
import Body from '../components/body/body';
import {styles} from '../components/common/styles';
import {ARROW} from '../assets/image/index';
import {SETUP} from '../assets/image/index';

const DeviceSetup = () => {
  return (
    <View style={styles.device}>
      <View style={styles.arrow}>
        <ARROW height={18} />
      </View>
      <Body image={<SETUP height={262} />} />
    </View>
  );
};

export default DeviceSetup;
