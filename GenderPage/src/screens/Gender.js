import {View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Arrow from '../components/Arrow';
import NextButton from '../components/NextButton';
import Footer from '../components/Footer';
import MyPager from '../components/MyPager';

const Gender = () => {
  return (
    <View>
      <LinearGradient
        style={{height: "100%"}}
        colors={['#41232B', '#25272F', '#25272F']}
        start={{x: 0.9, y: 0.1}}
        end={{x: 0, y: 0.5}}>
        <Arrow />
        <MyPager />
        <NextButton />
        <Footer />
      </LinearGradient>
    </View>
  );
};

export default Gender;
