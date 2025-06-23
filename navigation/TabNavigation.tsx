import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

const Tab = createBottomTabNavigator();

import HomeScreen from 'screens/HomeScreen';
import LiveScoresScreen from 'screens/LiveScoresScreen';
import ProfileScreen from 'screens/ProfileScreen';

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#111111', borderTopColor: '#333333' },
        tabBarActiveTintColor: '#1E90FF',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarIcon: ({ color, size }) => {
          let iconName: 'ellipse' | 'home-outline' | 'settings-outline' | 'person-outline' = 'ellipse';

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'LiveScores') {
            iconName = 'settings-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline'; 
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="LiveScores" component={LiveScoresScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}