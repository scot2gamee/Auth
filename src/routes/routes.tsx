import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import SelectLanguageScreen from "../screen/authorized/selectLanguage/selectLanguage";
import LoginScreen from "../screen/authorized/login/login";
import SendOTPScreen from "../screen/authorized/sendOTP/sendOTP";
import VerifyOTPScreen from "../screen/authorized/verifyOTP/verifyOTP";
import CreatePinCodeSetScreen from "../screen/authorized/createPinCodeSet/createPinCodeSet";
import CreatePinCodeConfirmScreen from "../screen/authorized/createPinCodeConfirm/createPinCodeConfirm";
import TouchIDScreen from "../screen/authorized/touchID/touchID";
import LoginPincodeScreen from "../screen/authorized/loinPincode/loginPincode";

const Stack = createStackNavigator();
function main() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={"selectLanguage"}
    >
      <Stack.Screen name={"selectLanguage"} component={SelectLanguageScreen} />
      <Stack.Screen name={"login"} component={LoginScreen} />
      <Stack.Screen name={"sendOTP"} component={SendOTPScreen} />
      <Stack.Screen name={"verifyOTP"} component={VerifyOTPScreen} />
      <Stack.Screen
        name={"createPinCodeSet"}
        component={CreatePinCodeSetScreen}
      />
      <Stack.Screen
        name={"createPinCodeConfirm"}
        component={CreatePinCodeConfirmScreen}
      />
      <Stack.Screen name={"touchID"} component={TouchIDScreen} />
      <Stack.Screen name={"loginPincode"} component={LoginPincodeScreen} />
    </Stack.Navigator>
  );
}

function app() {
  return <NavigationContainer>{main()}</NavigationContainer>;
}

export default app;
