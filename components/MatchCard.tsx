import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import DarkTheme from 'constants/theme';

type Team = {
  name: string;
 
};

type MatchCardProps = {
  home: Team;
  away: Team;
  time: string;
  date: string;
  score: string;
  minute: string;
  status: 'fixture' | 'live' | 'result';
};

export default function MatchCard({ home, away, time, date, score, minute, status }: MatchCardProps) {
  return (
    <View style={[
      styles.card,
      status === 'live' && { borderColor: DarkTheme.colors.primary, borderWidth: 2 }
    ]}>
      <View style={styles.row}>
        {/* <Image source={home.logo} style={styles.logo} /> */}
        <Text style={styles.teamName}>{home.name}</Text>
        <Text style={styles.vs}>vs</Text>
        <Text style={styles.teamName}>{away.name}</Text>
        {/* <Image source={away.logo} style={styles.logo} /> */}
      </View>
      <Text style={styles.info}>
        {status === 'fixture' && `${date} • ${time}`}
        {status === 'live' && `${score}  •  ${minute} LIVE`}
        {status === 'result' && `${score}  •  ${minute}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: DarkTheme.colors.card,
    borderRadius: 12,
    padding: 18,
    marginBottom: 16,
    alignItems: 'center',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  logo: {
    width: 32,
    height: 32,
    marginHorizontal: 6,
    borderRadius: 16,
    backgroundColor: '#222',
  },
  teamName: {
    color: DarkTheme.colors.text,
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    marginHorizontal: 2,
  },
  vs: {
    color: DarkTheme.colors.secondary,
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    marginHorizontal: 4,
  },
  info: {
    color: DarkTheme.colors.secondary,
    fontFamily: 'Nunito-SemiBold',
    fontSize: 15,
  },
});
