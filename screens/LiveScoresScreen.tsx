import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import DarkTheme from 'constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const fixtures = [
  { id: 1, teams: 'Eagles FC vs. Tigers United', time: '4:00 PM', date: 'Today' },
  { id: 2, teams: 'Lions FC vs. Panthers', time: '6:00 PM', date: 'Today' },
];
const liveScores = [
  { id: 1, teams: 'Eagles FC 2 - 1 Tigers United', status: '75′' },
];
const results = [
  { id: 1, teams: 'Lions FC 1 - 3 Panthers', status: 'FT' },
];

export default function LiveScoresScreen() {
  const navigation = useNavigation();
  const [tab, setTab] = useState<'fixtures' | 'live' | 'results'>('live');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color={DarkTheme.colors.text} />
      </TouchableOpacity>
      <Text style={styles.title}>Live Scores</Text>
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setTab('fixtures')} style={[styles.tabBtn, tab === 'fixtures' && styles.tabActive]}>
          <Text style={[styles.tabText, tab === 'fixtures' && styles.tabTextActive]}>Fixtures</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab('live')} style={[styles.tabBtn, tab === 'live' && styles.tabActive]}>
          <Text style={[styles.tabText, tab === 'live' && styles.tabTextActive]}>Live</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab('results')} style={[styles.tabBtn, tab === 'results' && styles.tabActive]}>
          <Text style={[styles.tabText, tab === 'results' && styles.tabTextActive]}>Results</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ width: '100%' }} contentContainerStyle={{ paddingBottom: 32 }}>
        {tab === 'fixtures' && fixtures.map(f => (
          <View key={f.id} style={styles.card}>
            <Text style={styles.cardTeams}>{f.teams}</Text>
            <Text style={styles.cardTime}>{f.date} • {f.time}</Text>
          </View>
        ))}
        {tab === 'live' && liveScores.map(l => (
          <View key={l.id} style={[styles.card, { borderColor: DarkTheme.colors.primary, borderWidth: 2 }] }>
            <Text style={styles.cardTeams}>{l.teams}</Text>
            <Text style={styles.cardLive}>{l.status} LIVE</Text>
          </View>
        ))}
        {tab === 'results' && results.map(r => (
          <View key={r.id} style={styles.card}>
            <Text style={styles.cardTeams}>{r.teams}</Text>
            <Text style={styles.cardResult}>{r.status}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkTheme.colors.background,
    paddingHorizontal: 20,
    paddingTop: 48,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 48,
    left: 16,
    zIndex: 2,
    padding: 8,
  },
  title: {
    color: DarkTheme.colors.primary,
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 28,
    marginBottom: 18,
    letterSpacing: 1.1,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 18,
    width: '100%',
    justifyContent: 'space-between',
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: DarkTheme.colors.primary,
  },
  tabText: {
    color: DarkTheme.colors.text,
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
  },
  tabTextActive: {
    color: DarkTheme.colors.primary,
  },
  card: {
    backgroundColor: DarkTheme.colors.card,
    borderRadius: 12,
    padding: 18,
    marginBottom: 16,
    alignItems: 'center',
    width: '100%',
  },
  cardTeams: {
    color: DarkTheme.colors.text,
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    marginBottom: 4,
  },
  cardTime: {
    color: DarkTheme.colors.secondary,
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
  },
  cardLive: {
    color: DarkTheme.colors.primary,
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    marginTop: 4,
  },
  cardResult: {
    color: DarkTheme.colors.notification,
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    marginTop: 4,
  },
});