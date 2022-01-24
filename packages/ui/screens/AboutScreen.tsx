// @generated: @expo/next-adapter@2.1.52
import { Link } from 'expo-next-react-navigation';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This monorepo was created by Adam Brodin</Text>
      <Link routeName="Home" web={{ path: '' }} style={styles.aboutLink}>
        <Text style={styles.aboutText}>Back to homepage</Text>
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
