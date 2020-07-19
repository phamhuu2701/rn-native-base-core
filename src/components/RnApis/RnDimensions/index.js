import React from "react";
import { View, Text, Dimensions } from "react-native";
import { Styles } from "../../../static/Theme";

function RnDimensions(props) {
  const { width, height } = Dimensions.get("window");

  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;

  return (
    <View style={Styles.containerPadding}>
      <View style={Styles.marginBottom}>
        <Text>Dimensions:</Text>
      </View>

      <View style={Styles.marginBottom}>
        <Text>window width: {width}</Text>
        <Text>window height: {height}</Text>
      </View>

      <View style={Styles.marginBottom}>
        <Text>screen width: {screenWidth}</Text>
        <Text>screen height: {screenHeight}</Text>
      </View>
    </View>
  );
}

export default RnDimensions;
