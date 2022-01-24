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
    backgroundColor: '#6699cc',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    color: 'white',
  },
  aboutLink: {
    marginTop: 20,
  },
  aboutText: {
    color: 'yellow',
  },
});
