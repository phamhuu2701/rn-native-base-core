import React, { useCallback } from "react";
import { View, Linking, Alert, Button, Share } from "react-native";
import { Styles } from "../../../static/Theme";

function RnShare(props) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={[Styles.containerPadding, Styles.blockCenterItems]}>
      <Button onPress={onShare} title="Share" />
    </View>
  );
}

export default RnShare;
