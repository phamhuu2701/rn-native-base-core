import React from "react";
import { Styles } from "../../../static/Theme";
import { View, Text, TouchableOpacity } from "react-native";

function RnTouchableOpacity(props) {
  return (
    <View style={[Styles.container, Styles.padding]}>
      <TouchableOpacity
        style={Styles.buttonContainer}
        onPress={() => console.log("Pressed!")}
      >
        <Text style={Styles.buttonText}>Press me!!</Text>
      </TouchableOpacity>
    </View>
  );
}

export default RnTouchableOpacity;
