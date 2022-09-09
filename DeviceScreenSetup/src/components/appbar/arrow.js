import { Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../common/styles';

const Arrow = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}>

      <Image style={styles.arrow} source={props.image} />
    </TouchableOpacity>
  );
};

export default Arrow;
