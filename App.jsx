import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Canvas, Circle, Group } from "@shopify/react-native-skia";

const App = () => {
  const size = 256;
  const r = size * 0.33;

  return (
    <View style={styles.container}>
      <Canvas
        // style={{ flex: 1 }}
        height={300}
        width={300}
      >
        <Circle r={20} cx={64} cy={300} color="red" />

        <Group blendMode="multiply">
          <Circle cx={r} cy={r} r={r} color="cyan" />
          <Circle cx={size - r} cy={r} r={r} color="magenta" />
          <Circle cx={size / 2} cy={size - r} r={r} color="yellow" />
        </Group>
      </Canvas>

      <Text>Open up App.js to start working on your app!</Text>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
