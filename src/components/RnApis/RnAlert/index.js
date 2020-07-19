import React from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import { Styles } from "../../../static/Theme";

function RnAlert(props) {
  const showAlert = () => {
    return Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Yes", onPress: () => console.log("Yes Pressed") },
        {
          text: "No",
          onPress: () => console.log("No Pressed"),
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={Styles.containerPadding}>
      <TouchableOpacity style={Styles.buttonContainer} onPress={showAlert}>
        <Text style={Styles.buttonText}>Show alert</Text>
      </TouchableOpacity>
    </View>
  );
}

export default RnAlert;
