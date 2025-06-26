import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DarkTheme from 'constants/theme';

export default function NewsCard({ title, description }: { title: string; description: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: DarkTheme.colors.card,
    borderRadius: 12,
    padding: 18,
    marginBottom: 16,
    width: '100%',
    elevation: 2,
  },
  title: {
    color: DarkTheme.colors.primary,
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    marginBottom: 6,
  },
  description: {
    color: DarkTheme.colors.text,
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
  },
});
