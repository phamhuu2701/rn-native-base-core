import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { Styles, Colors } from "../../../static/Theme";

function RnTouchableHighlight(props) {
  return (
    <View style={[Styles.container, Styles.padding]}>
      <TouchableHighlight
        underlayColor={Colors.warning}
        onPress={() => console.log("Pressed!")}
        onHideUnderlay={() => console.log("onHideUnderlay")}
        style={Styles.buttonContainer}
      >
        <Text style={Styles.buttonText}>Press me!!</Text>
      </TouchableHighlight>
    </View>
  );
}

export default RnTouchableHighlight;
