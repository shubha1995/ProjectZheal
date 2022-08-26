import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Footer = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', top: 230}}>
        <View style={styles.RectangleShapeView1} />
        <View style={styles.RectangleShapeView2} />
        <View style={styles.RectangleShapeView3} />
        <View style={styles.RectangleShapeView4} />
        <View style={styles.RectangleShapeView5} />
        <View style={styles.RectangleShapeView6} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  RectangleShapeView1: {
    height: 4,
    width: 62,
    left: 82,
    backgroundColor: '#CD181D',
  },
  RectangleShapeView2: {
    height: 4,
    width: 28,
    left: 90,
    backgroundColor: '#C4C4C4',
  },
  RectangleShapeView3: {
    height: 4,
    width: 28,
    left: 98,
    backgroundColor: '#C4C4C4',
  },
  RectangleShapeView4: {
    height: 4,
    width: 28,
    left: 106,
    backgroundColor: '#C4C4C4',
  },
  RectangleShapeView5: {
    height: 4,
    width: 28,
    left: 114,
    backgroundColor: '#C4C4C4',
  },
  RectangleShapeView6: {
    height: 4,
    width: 28,
    left: 122,
    backgroundColor: '#C4C4C4',
  },
});

export default Footer;
