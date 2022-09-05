import {View, Alert, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { styles } from '../common/styles';

const Skip = (props) => {
  const showAlert = () =>{
    Alert.alert(
       'This is the skip button'
    )
 }
  return (
    <TouchableOpacity onPress = {showAlert}>
     <Text style={styles.skip}>{props.title}</Text>
    </TouchableOpacity>
  );
};


export default Skip
