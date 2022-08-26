import {View, Text, TouchableOpacity,} from 'react-native';
import React from 'react';
import { styles } from '../common/styles';


const Continuebutton = (props) => {
  return (
      <View>
      <TouchableOpacity style={styles.Continuebutton}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
      </View>
  );
};



export default Continuebutton
