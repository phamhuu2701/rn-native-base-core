import React from "react";
import { View, Text, useColorScheme, useWindowDimensions } from "react-native";
import { Styles } from "../../../static/Theme";

function RnHooks(props) {
  const colorScheme = useColorScheme();

  const window = useWindowDimensions();

  return (
    <View style={Styles.containerPadding}>
      <Text>useColorScheme: {colorScheme}</Text>

      <Text>{`Window Dimensions: height - ${window.height}, width - ${window.width}`}</Text>
    </View>
  );
}

export default RnHooks;
