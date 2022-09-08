import React from 'react';
import DeviceSetup from './src/screens/deviceSetup';
import OtherDevice from './src/screens/otherDevice';
import SmartWatches from './src/screens/smartWatches';
import DevicePositioned from './src/screens/devicePositioned';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Help from './src/screens/help';
import { View } from 'react-native';
const App = () => {
  // const Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerShown: false
    //     }}
    //     initialRouteName="DeviceSetup">
    //     <Stack.Screen name="Setup" component={DeviceSetup} />
    //     <Stack.Screen name="DevicePosition" component={DevicePositioned} />
    //     <Stack.Screen name="SmartWatches" component={SmartWatches} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View>
      <Help/>
    </View>
  );
};

export default App;
