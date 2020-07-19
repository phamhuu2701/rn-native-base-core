// In App.js in a new project
import * as React from "react";
import { Provider } from "react-redux";
import AppNavigation from "./navigation";
import store from "./store";
import { SafeAreaView } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";

function AppRoot() {
  const [isReady, setIsReady] = React.useState(false);

  console.disableYellowBox = true;

  const loadApp = async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    setIsReady(true);
  };

  React.useEffect(() => {
    loadApp();
  });

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        {isReady ? <AppNavigation /> : <AppLoading />}
      </SafeAreaView>
    </Provider>
  );
}

export default AppRoot;
