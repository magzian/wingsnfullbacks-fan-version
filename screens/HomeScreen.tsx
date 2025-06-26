import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import DarkTheme from 'constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as Animatable from 'react-native-animatable';
import { matches } from 'constants/data';
import NewsCard from 'components/NewsCard';

const width = Dimensions.get('window').width; // Screen width for carousel

const news = [
  { id: 1, title: 'Opening Ceremony', description: 'The tournament kicks off with a grand opening ceremony at 2:00 PM.' },
  { id: 2, title: 'Player of the Day', description: 'John Doe from Eagles FC scored a hat-trick in the opening match.' },
  { id: 3, title: 'Weather Update', description: 'Expect clear skies throughout the tournament weekend.' },
  { id: 4, title: 'Tournament Prize', description: 'The winning team walks away with the coveted trophy.' },
];
type RootStackParamList = {
  HomeScreen: undefined;
  LiveScoresScreen: undefined;
  ProfileScreen: undefined;
  // Add other screens here as needed
};

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


  // Get the first three matches for the carousel
  const displayMatches = matches.slice(0, 3);


  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View animation="slideInDown" duration={800} style={styles.header}>
        <Text style={styles.brand}>Wings & Fullbacks</Text>
        <Text style={styles.subtitle}>Where Passion Meets Community</Text>
      </Animatable.View>
      <Animatable.View animation="slideInLeft" duration={1200} style={styles.carouselWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ width }}
          contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 12 }}
        >
          {displayMatches.map((match, idx) => (
            <View key={match.id} style={[styles.matchCard, { width: width * 0.7, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center' }]}> 
              <Text style={styles.highlightTitle}>Today's Highlight</Text>
              <Text style={styles.highlightMatch}>{`Match: ${match.homeTeam} vs. ${match.awayTeam}`}</Text>
              <Text style={styles.highlightTime}>{`Kickoff: ${match.time}`}</Text>
            </View>
          ))}
        </ScrollView>
      </Animatable.View>
      <View style={styles.quickLinks}>
        <TouchableOpacity style={styles.linkBtn} onPress={() => navigation.navigate('LiveScoresScreen')}>
          <Ionicons name="football-outline" size={28} color={DarkTheme.colors.primary} />
          <Text style={styles.linkText}>Live Scores</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkBtn} onPress={() => navigation.navigate('ProfileScreen')}>
          <Ionicons name="person-circle-outline" size={28} color={DarkTheme.colors.primary} />
          <Text style={styles.linkText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkBtn}>
          <Ionicons name="ticket-outline" size={28} color={DarkTheme.colors.primary} />
          <Text style={styles.linkText}>Buy Ticket</Text>
        </TouchableOpacity>
      </View>
      <Animatable.View animation="slideInUp" duration={1500} style={styles.newsSection}>
        <Text style={styles.newsTitle}>News & Updates</Text>
        <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
          {news.map(item => (
            <NewsCard key={item.id} title={item.title} description={item.description} />
          ))}
        </ScrollView>
      </Animatable.View>
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
    marginBottom: 16,
  },
  brand: {
    color: DarkTheme.colors.primary,
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 32,
    letterSpacing: 1.2,
  },
  subtitle: {
    color: DarkTheme.colors.text,
    fontFamily: 'Nunito-Light',
    fontSize: 18,
    marginTop: 2,
  },
  carouselWrapper: {
    marginBottom: 24,
  },
  matchCard: {
    backgroundColor: DarkTheme.colors.card,
    borderRadius: 14,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 160,
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
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: DarkTheme.colors.border,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: DarkTheme.colors.primary,
  },
  newsSection: {
    flex: 1,
    marginBottom: 16,
  },
  newsTitle: {
    color: DarkTheme.colors.primary,
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    marginBottom: 10,
  },
  quickLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 30,
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