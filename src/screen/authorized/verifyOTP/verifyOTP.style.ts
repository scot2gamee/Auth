import {Platform, StyleSheet} from "react-native";
import {Colors} from "../../../styles";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  keyboardAwareView: {
    flex: 1,
    justifyContent: "space-between",
  },
  codeFieldRoot: {marginTop: 20},
  focusCell: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#176AFC",
  },
  buttonBack: {
    marginTop: Platform.OS == 'ios'? 53 : 13,
  },
  buttonSubmit: {
    marginHorizontal: 24,
    marginTop: 40,
  },
});
