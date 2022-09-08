import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../common/styles';

const Skip = props => {
  return (
    <TouchableOpacity>
      <Text style={styles.skip}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Skip;
