import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        React Native Starter App.
      </Text>
      <Pressable
        style={{ padding: 10, borderRadius: 10, backgroundColor: "#e5e5e5" }}
      >
        <Text style={{ color: "white" }}>Hello</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
