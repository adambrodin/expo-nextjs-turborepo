import { Link } from 'expo-next-react-navigation';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function StartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Expo + Next.JS = ❤️</Text>
      <Link routeName="About" web={{ path: 'about' }} style={styles.aboutLink}>
        <Text style={styles.aboutText}>About</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#517aa3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
  },
  aboutLink: {
    backgroundColor: 'yellow',
    fontSize: 20,
    padding: 4,
    borderRadius: 5,
    marginTop: 20,
  },
  aboutText: {
    color: 'black',
  },
});
