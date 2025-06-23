import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import DarkTheme from 'constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();
  // Dummy user data
  const user = {
    name: 'Fan User',
    email: 'fanuser@email.com',
    ticket: 'Not Purchased',
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color={DarkTheme.colors.text} />
      </TouchableOpacity>
      <View style={styles.card}>
        <Ionicons name="person-circle" size={64} color={DarkTheme.colors.primary} style={{ marginBottom: 8 }} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.ticket}>Ticket: <Text style={{ color: DarkTheme.colors.secondary }}>{user.ticket}</Text></Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}} activeOpacity={0.85}>
        <Ionicons name="ticket-outline" size={22} color={DarkTheme.colors.text} style={{ marginRight: 8 }} />
        <Text style={styles.buttonText}>Buy Ticket</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}} activeOpacity={0.85}>
        <Ionicons name="car-outline" size={22} color={DarkTheme.colors.text} style={{ marginRight: 8 }} />
        <Text style={styles.buttonText}>Order Bolt</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkTheme.colors.background,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  backButton: {
    position: 'absolute',
    top: 48,
    left: 16,
    zIndex: 2,
    padding: 8,
  },
  card: {
    backgroundColor: DarkTheme.colors.card,
    borderRadius: 16,
    padding: 28,
    alignItems: 'center',
    marginBottom: 32,
    width: '100%',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  name: {
    color: DarkTheme.colors.text,
    fontFamily: 'Nunito-Bold',
    fontSize: 22,
    marginBottom: 2,
  },
  email: {
    color: DarkTheme.colors.secondary,
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
    marginBottom: 8,
  },
  ticket: {
    color: DarkTheme.colors.text,
    fontFamily: 'Nunito-Medium',
    fontSize: 15,
    marginBottom: 2,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: DarkTheme.colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginBottom: 18,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  buttonText: {
    color: DarkTheme.colors.text,
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
    marginLeft: 6,
  },
});