import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../common/styles';
import Continuebutton from './continuebutton';

const DevicePositionedBody = props => {
  return (
    <View style={styles.devicebody}>
      <Text style={styles.position}>Device Positioned</Text>
      <View>{props.devicePositionImage}</View>
      <View style={styles.textSection}>
        <Text style={styles.devicePosition}>
          Your Device REM-42- 6565 is now ready to pair with mobile app .
        </Text>
        <Text style={styles.positiontext}> Please continue for pairing</Text>
      </View>

      <Continuebutton title={'CONTINUE'} />
    </View>
  );
};

export default DevicePositionedBody;
