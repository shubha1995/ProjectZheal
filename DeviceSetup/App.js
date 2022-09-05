import {View, Text} from 'react-native';
import React from 'react';
import DeviceSetup from './src/screens/DeviceSetup';
import OtherDevice from './src/screens/OtherDevice';
import SmartWatches from './src/screens/SmartWatches';
import DevicePositioned from './src/screens/DevicePositioned';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
      
      initialRouteName="DeviceSetup">
        <Stack.Screen name="Setup" component={DeviceSetup} />
        <Stack.Screen name="DevicePosition" component={DevicePositioned} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
