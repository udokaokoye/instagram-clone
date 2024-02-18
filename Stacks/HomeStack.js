import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';

const HomeStack = () => {
    const HomeStackScreen = createNativeStackNavigator();
  return (
    <HomeStackScreen.Navigator>
    <HomeStackScreen.Screen name="home" component={Home} options={{headerShown: false}} />
    </HomeStackScreen.Navigator>
  )
}

export default HomeStack