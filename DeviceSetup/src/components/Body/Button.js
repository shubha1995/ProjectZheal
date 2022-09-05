import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../common/styles';


const Button = props => {
  const [isSelected, setIsSelected] = useState(false);
  

  return (
    <View>
      <TouchableOpacity onPress={() => {
        setIsSelected(true);
        props.onPress();
      }} >
        <View style={[styles.button, isSelected ? styles.buttonPressed : null]}>
        <Image style={styles.logo} source={props.image} />
        <Text style={styles.buttonText}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
