// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import FourthScreen from './screens/FourthScreen';
import FifthScreen from './screens/FifthScreen';
import LastScreen from './screens/LastScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Primeira">
        <Stack.Screen name="Primeira" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Segunda" component={SecondScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Terceira" component={ThirdScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Quarta" component={FourthScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Quinta" component={FifthScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Sexta" component={LastScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
