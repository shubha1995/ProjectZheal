import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../common/styles';

const Button = props => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          if (props.isPrimary) {
            setIsSelected(true);
          }
          props.onPress();
        }}>
        <View style={[styles.button, isSelected ? styles.buttonPressed : null]}>
          <View style={styles.logo}>{props.logoimage}</View>
          <Text style={styles.buttonText}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
