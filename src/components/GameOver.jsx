import React, { useEffect } from 'react';
import { func, number } from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';

import styleGuide from '../utils/styleGuide';
import { heightRatio, widthRatio } from '../utils/styleSheet';

const styles = StyleSheet.create({
  gameOverContainer: {
    flex: 1,
    alignItems: 'center',
  },
  animatedCard: {
    width: widthRatio * 260,
    height: heightRatio * 200,
    padding: heightRatio * 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    ...styleGuide.bigShadow,
  },
  gameOverText: {
    fontSize: heightRatio * 30,
    fontWeight: 'bold',
    color: 'grey',
    marginBottom: heightRatio * 20,
    // fontFamily: 'crackman-regular',
  },
  container: {
    height: heightRatio * 30,
    width: widthRatio * 100,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
    backgroundColor: styleGuide.primaryColor,
  },
  shadow: {
    ...styleGuide.bigShadow,
  },
  textStyle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});

const GameOver = ({ restart, score }) => {
  const animatedValue = new Animated.Value(0);
  const animatedValue2 = new Animated.Value(0);

  useEffect(() => {
    animatedValue.setValue(0);
    animatedValue2.setValue(0);

    Animated.parallel([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValue2, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  const opacity = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0.5, 1],
  });

  const marginTop = animatedValue2.interpolate({
    inputRange: [0, 1],
    outputRange: [heightRatio * 0, heightRatio * 240],
  });

  return (
    <View style={styles.gameOverContainer}>
      <Animated.View style={[styles.animatedCard, { opacity, marginTop }]}>
        <Text style={styles.gameOverText}>Game Over</Text>

        <Text style={styles.gameOverText}>{score}</Text>

        <TouchableOpacity onPress={restart}>
          <View style={[styles.container, styles.shadow]}>
            <Text style={[styles.textStyle]}>Restart</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

GameOver.propTypes = {
  restart: func,
  score: number,
};

export default GameOver;
