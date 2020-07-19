import React, { useCallback } from "react";
import { View, Linking, Alert, Button } from "react-native";
import { Styles } from "../../../static/Theme";

function RnLinking(props) {
  const supportedURL = "https://google.com";

  const unsupportedURL = "slack://open?team=123456";

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return <Button title={children} onPress={handlePress} />;
  };

  return (
    <View style={[Styles.containerPadding, Styles.blockCenterItems]}>
      <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
      <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
    </View>
  );
}

export default RnLinking;
