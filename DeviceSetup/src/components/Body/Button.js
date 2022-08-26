import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import { styles } from '../common/styles';


const Button = (props) => {
  return (
      <View>
      <TouchableOpacity style={styles.button}>
        <Image
          style={styles.logo}
          source={props.image}
        />
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
      </View>
  );
};



export default Button;
