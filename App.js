import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Platform } from "react-native";
import AppRoot from "./src";
import { Colors } from "./src/static/Theme";
import { Root } from "native-base";

export default function App() {
  return (
    <Root>
      <View style={{ flex: 1 }}>
        <StatusBar
          style={Platform.OS === "ios" ? "dark" : "light"}
          animated
          backgroundColor={Colors.primary}
          translucent={false}
        />
        <AppRoot />
      </View>
    </Root>
  );
}
