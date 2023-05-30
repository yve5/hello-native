import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import Showcase from './showcase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
  },
  title: {
    fontSize: 30,
    padding: 10,
    top: 100,
  },
});

const Game = () => (
  <View style={styles.container}>
    <Text style={styles.title}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Text>

    {/*
    <Showcase />
    */}

    <StatusBar style="auto" />
  </View>
);

export default Game;
