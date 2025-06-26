import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import DarkTheme from 'constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { teams, matches } from 'constants/data';
import MatchCard from 'components/MatchCard';

export default function LiveScoresScreen() {
  const navigation = useNavigation();
  const [tab, setTab] = useState<'fixture' | 'live' | 'result'>('live');

  // Helper to get team object by id
  const getTeam = (id: number) => {
    const team = teams.find(t => t.id === id);
    if (!team) {
      throw new Error(`Team with id ${id} not found`);
    }
    return team;
  };

  // Filter matches by status
  const filtered = matches.filter(m => m.status === tab);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color={DarkTheme.colors.text} />
      </TouchableOpacity>
      <Text style={styles.title}>Live Scores</Text>
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setTab('fixture')} style={[styles.tabBtn, tab === 'fixture' && styles.tabActive]}>
          <Text style={[styles.tabText, tab === 'fixture' && styles.tabTextActive]}>Fixtures</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab('live')} style={[styles.tabBtn, tab === 'live' && styles.tabActive]}>
          <Text style={[styles.tabText, tab === 'live' && styles.tabTextActive]}>Live</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab('result')} style={[styles.tabBtn, tab === 'result' && styles.tabActive]}>
          <Text style={[styles.tabText, tab === 'result' && styles.tabTextActive]}>Results</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ width: '100%' }} contentContainerStyle={{ paddingBottom: 32 }}>
        {filtered.map(match => (
          <MatchCard
            key={match.id}
            home={getTeam(match.homeTeam)}
            away={getTeam(match.awayTeam)}
            time={match.time}
            date={match.date}
            score={match.score ?? ''}
            minute={match.minute ?? ''}
            status={match.status as 'fixture' | 'live' | 'result'}
          />
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
});