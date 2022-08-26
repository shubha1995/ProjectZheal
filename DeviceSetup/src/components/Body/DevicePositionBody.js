import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from '../common/styles';
import Continuebutton from './Continuebutton';

const DevicePositionedBody = props => {
  return (
    <View style={styles.devicebody}>
      <Text style={styles.position}>Device Positioned</Text>
      <Image style={styles.device1} source={props.image} />
      <Text style={styles.devicePosition}>
        Your Device REM-42- 6565 is now ready to pair with mobile app .
      </Text>
      <View></View>
      <Text style={styles.positiontext}> Please
      continue for pairing</Text>
      
      <Continuebutton title={'CONTINUE'} />
    </View>
  );
};

export default DevicePositionedBody;
