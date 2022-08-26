import {View, Image} from 'react-native';
import React from 'react';
import { styles } from '../common/styles';

const Arrow = (props) => {
  return (
    <View>
      <Image
        style={styles.arrow}
        source={props.image}
      />
    </View>
  );
};


export default Arrow;
