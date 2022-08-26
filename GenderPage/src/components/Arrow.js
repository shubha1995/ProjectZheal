import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const Arrow = () => {
  return (
    <View style={styles.gender}>
    
      
        <Image
          style={styles.arrow}
          source={require('../assets/Arrow.png')}
        />
        <Text style={styles.choose}>Choose Your Gender </Text>
        <Text style={styles.lorem}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        
    </View>
  );
};

const styles = StyleSheet.create({
  gender: {
  },


  arrow: {
    padding: 12.33,
    top: 61.33,
    left: 41.33,
  },

  choose: {
    color: '#FFFFFF',
    left: 97,
    width: 216,
    height: 28,
    top: 80,
    fontSize: 22,
    lineHeight: 28,
  },
  lorem: {
    color: '#BCBEC0',
    left: 125,
    width: 189,
    height: 32,
    top: 92,
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
});

export default Arrow;
