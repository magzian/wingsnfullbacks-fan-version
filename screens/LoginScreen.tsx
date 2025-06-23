import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import DarkTheme from 'constants/theme';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Define the navigation param list for your stack
type RootStackParamList = {
  HomeScreen: undefined;
  TabNavigation: undefined;
  // add other screens here if needed
};

export default function LoginScreen() {
  const navigation = useNavigation<import('@react-navigation/native').NavigationProp<RootStackParamList>>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (username === 'fan' && password === 'fan1234') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('TabNavigation');
      }, 1500);
    } else {
      Alert.alert('Login Failed', 'Incorrect username or password.', [
        { text: 'OK', style: 'destructive' },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color={DarkTheme.colors.text} />
      </TouchableOpacity>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={DarkTheme.colors.border}
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={DarkTheme.colors.border}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading} activeOpacity={0.85}>
        {loading ? (
          <ActivityIndicator color={DarkTheme.colors.text} />
        ) : (
          <Text style={styles.buttonText}>Sign In</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkTheme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  backButton: {
    position: 'absolute',
    top: 48,
    left: 24,
    zIndex: 2,
    padding: 8,
  },
  title: {
    color: DarkTheme.colors.primary,
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 32,
    marginBottom: 32,
    marginTop: -40,
    letterSpacing: 1.2,
  },
  input: {
    width: '100%',
    backgroundColor: DarkTheme.colors.card,
    color: DarkTheme.colors.text,
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: DarkTheme.colors.border,
  },
  button: {
    backgroundColor: DarkTheme.colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: DarkTheme.colors.text,
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    letterSpacing: 0.5,
  },
});