// @generated: @expo/next-adapter@2.1.52
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function StartPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Expo + Next.JS = ❤️</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6699cc',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
})
