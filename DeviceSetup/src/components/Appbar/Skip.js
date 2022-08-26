import {View,  Text} from 'react-native';
import React from 'react';
import { styles } from '../common/styles';

const Skip = (props) => {
  return (
    <View>
     <Text style={styles.skip}>{props.title}</Text>
    </View>
  );
};


export default Skip
