import { View, Text } from 'react-native'
import React from 'react';
import DeviceSetup from './src/screens/DeviceSetup';
import OtherDevice from './src/screens/OtherDevice';
import SmartWatches from './src/screens/SmartWatches';
import DevicePositioned from './src/screens/DevicePositioned';

const App = () => {
  return (
    <View>
    <DevicePositioned />
    </View>
  )
}

export default App