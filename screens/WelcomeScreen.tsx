import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import DarkTheme from 'constants/theme';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Define your stack param list
type RootStackParamList = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  // add other screens here if needed
};

export default function WelcomeScreen() {

const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerContent}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.to}>to</Text>
        <Text style={styles.brand}>Wings and Fullbacks</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('LoginScreen')}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <Text style={styles.enjoy}>Enjoy your stay!</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkTheme.colors.background,
    justifyContent: 'center',
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 24,
  },
  welcome: {
    color: DarkTheme.colors.text,
    fontFamily: 'Nunito-Bold',
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 4,
    letterSpacing: 1,
  },
  to: {
    color: DarkTheme.colors.secondary,
    fontFamily: 'Nunito-Light',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 4,
    letterSpacing: 1,
  },
  brand: {
    color: DarkTheme.colors.primary,
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 32,
    letterSpacing: 1.2,
  },
  button: {
    backgroundColor: DarkTheme.colors.primary,
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 10,
    marginBottom: 32,
    width: '80%',
    alignSelf: 'center',
    elevation: 2,
  },
  buttonText: {
    color: DarkTheme.colors.text,
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  enjoy: {
    color: DarkTheme.colors.secondary,
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    letterSpacing: 0.5,
  },
});