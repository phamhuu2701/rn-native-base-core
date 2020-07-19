import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import Root from "./src";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Root />
    </View>
  );
}
