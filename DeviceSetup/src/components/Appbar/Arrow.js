import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../common/styles';

const Arrow = props => {
  return (
    <TouchableOpacity>
      <Image style={styles.arrow} source={props.image} />
    </TouchableOpacity>
  );
};

export default Arrow;
