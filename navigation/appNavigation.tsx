import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from 'screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import LiveScoresScreen from '../screens/LiveScoresScreen'
import ProfileScreen from '../screens/ProfileScreen'
import BuyTicketScreen from '../screens/BuyTicketScreen'
/* import TabNavigation from './TabNavigation'  */

const Stack = createNativeStackNavigator();

export default function appNavigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LiveScoresScreen" component={LiveScoresScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="BuyTicketScreen" component={BuyTicketScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}