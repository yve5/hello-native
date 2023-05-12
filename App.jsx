import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';

import Entities from './entities';
import Systems from './systems';

const App = () => (
  <View style={styles.container}>
    <GameEngine
      entities={Entities()}
      running={true}
      style={styles.gameContainer}
      systems={Systems}
    />
    <StatusBar style="auto" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gameContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default App;
