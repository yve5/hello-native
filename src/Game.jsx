import React, { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';

import GameOver from './components/GameOver';
import Entities from './entities';
import Systems from './systems';
import { height, width } from './utils/styleSheet';

const backgroundImage = require('./assets/nature.jpg');

const Game = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [score, setScore] = useState(0);
  const gameEngineRef = useRef(null);

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        resizeMode="stretch"
        source={backgroundImage}
      />

      <GameEngine
        entities={Entities()}
        running={true}
        style={styles.gameContainer}
        systems={Systems}
        onEvent={({ type }) => {
          if (type === 'gameOver') {
            setIsRunning(false);
          } else if (type === 'score') {
            setScore(score + 1);
          }
        }}
        ref={gameEngineRef}
      />

      {isRunning ? (
        <Text style={styles.score}>{score}</Text>
      ) : (
        <GameOver
          score={score}
          restart={() => {
            gameEngineRef.current.swap(Entities());
            setIsRunning(true);
            setScore(0);
          }}
        />
      )}

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0',
  },
  gameContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  score: {
    color: '#ffffff',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 100,
    // fontFamily: 'crackman-regular',
  },
  imageBackground: {
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  gameOverContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Game;
