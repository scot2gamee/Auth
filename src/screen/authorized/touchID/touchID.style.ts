import {StyleSheet} from "react-native";
import {Colors} from "../../../styles";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  buttonSettingTouchID: {
    marginTop: "40%",
  },
  buttonSkip: {
    marginTop: 37,
  },
  touchIDIcon: {
    width: 90,
    height: 90,
    backgroundColor: Colors.white,
    borderRadius: 45,
    ...Colors.shadowButton,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: "25%",
  },
});
