import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../common/styles';
import Title from './title';
import Button from './button';
import { AURA, FITBIT, AMAZE } from '../../assets/image';


const SmartwatchesBody = props => {
 
  return (
    <View style={styles.smartwatchesbody}>
      <Title />
      <Text style={styles.watches}>Smart Watches</Text>
      <View style={styles.hrline} />
      <Button logoimage={<FITBIT height={20} />} title={'Fitbit'} />
      <Button logoimage={<AMAZE height={20} />} title={'Amazefit'} />
      <View />

      <Text style={styles.watches}>Wearable devices</Text>
      <View style={styles.hrline} />

      <Button logoimage={<AURA height={20} />} title={'Aura Ring'} />
    </View>
  );
};

export default SmartwatchesBody;
