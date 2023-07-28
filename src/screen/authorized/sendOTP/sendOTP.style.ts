import {Platform, StyleSheet} from "react-native";
import {Colors} from "../../../styles";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonBack: {
    marginLeft: 24,
    marginTop: Platform.OS == "ios" ? 53 : 13,
    position: "absolute",
    zIndex: 99,
  },
  buttonOTP: {
    marginHorizontal: 24,
    marginTop: 55,
  },
  otpContainer: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  icon: {
    alignSelf: "center",
  },
});
