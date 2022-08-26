import React from 'react';

import {StyleSheet, View, Text, Image} from 'react-native';

import PagerView from 'react-native-pager-view';

const MyPager = () => {
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <View key="1">
        <Image
          style={{width: 180, height: 180}}
          source={require('../assets/Male.png')}
        />
        <Text style={styles.text1}>Male</Text>
      </View>
      <View key="2">
        <Image
          style={{width: 180, height: 180}}
          source={require('../assets/Female.png')}
        />
        <Text style={styles.text2}>Female</Text>
      </View>
      <View key="3">
        <Image
          style={{width: 180, height: 180}}
          source={require('../assets/Others.png')}
        />
        <Text style={styles.text3}>Others</Text>
      </View>
    </PagerView>
  );
};

export default MyPager;

const styles = StyleSheet.create({
  pagerView: {
    height: 350,
    top: 160,
    left: 120,
  },
  text1: {
    color: 'white',
    top: 75,
    fontSize: 36,
    left: 45,
    lineHeight: 45,
    letterSpacing: 5
  },
  text2: {
    color: 'white',
    top: 75,
    fontSize: 36,
    left: 25,
    lineHeight: 45,
    letterSpacing: 5
  },
  text3: {
    color: 'white',
    top: 75,
    fontSize: 36,
    left: 25,
    lineHeight: 45,
    letterSpacing: 5
  },
});
