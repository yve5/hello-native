import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Showcase from './showcase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
  },
});

const Game = () => (
  <View style={styles.container}>
    <Showcase />
    <StatusBar style="auto" />
  </View>
);

export default Game;
