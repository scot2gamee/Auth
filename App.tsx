import {LogBox, SafeAreaView} from "react-native";
import React, {useEffect} from "react";
import Route from "./src/routes/routes";
import "react-native-gesture-handler";
import SplashScreen from "react-native-splash-screen";
LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();
LogBox.ignoreLogs([
  "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
]);
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Route />;
};

export default App;
