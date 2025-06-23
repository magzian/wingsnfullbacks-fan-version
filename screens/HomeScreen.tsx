import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import DarkTheme from 'constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  LiveScores: undefined;
  Profile: undefined;
  // Add other routes here if needed
};

export default function HomeScreen() {
  const navigation = useNavigation<import('@react-navigation/native').NavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>Wings & Fullbacks</Text>
        <Text style={styles.subtitle}>Local Football Tournament</Text>
      </View>
      <View style={styles.highlightCard}>
        <Text style={styles.highlightTitle}>Today's Highlight</Text>
        <Text style={styles.highlightMatch}>Eagles FC vs. Tigers United</Text>
        <Text style={styles.highlightTime}>Kickoff: 4:00 PM</Text>
      </View>
      <View style={styles.quickLinks}>
        <TouchableOpacity style={styles.linkBtn} onPress={() => navigation.navigate('LiveScores')}>
          <Ionicons name="football-outline" size={28} color={DarkTheme.colors.primary} />
          <Text style={styles.linkText}>Live Scores</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkBtn} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-circle-outline" size={28} color={DarkTheme.colors.primary} />
          <Text style={styles.linkText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkBtn}>
          <Ionicons name="ticket-outline" size={28} color={DarkTheme.colors.primary} />
          <Text style={styles.linkText}>Buy Ticket</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkTheme.colors.background,
    paddingHorizontal: 20,
    paddingTop: 32,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  brand: {
    color: DarkTheme.colors.primary,
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 32,
    letterSpacing: 1.2,
  },
  subtitle: {
    color: DarkTheme.colors.secondary,
    fontFamily: 'Nunito-Light',
    fontSize: 18,
    marginTop: 2,
  },
  highlightCard: {
    backgroundColor: DarkTheme.colors.card,
    borderRadius: 14,
    padding: 20,
    marginBottom: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  highlightTitle: {
    color: DarkTheme.colors.text,
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    marginBottom: 6,
  },
  highlightMatch: {
    color: DarkTheme.colors.primary,
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
    marginBottom: 2,
  },
  highlightTime: {
    color: DarkTheme.colors.text,
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
  },
  quickLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  linkBtn: {
    backgroundColor: DarkTheme.colors.card,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    width: '30%',
    elevation: 2,
  },
  linkText: {
    color: DarkTheme.colors.text,
    fontFamily: 'Nunito-Medium',
    fontSize: 14,
    marginTop: 6,
  },
});