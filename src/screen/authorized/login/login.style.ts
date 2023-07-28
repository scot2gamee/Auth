import {StyleSheet} from "react-native";
import {Colors} from "../../../styles";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
    paddingTop: "20%",
  },
  inputPassword: {
    marginTop: 20,
  },
  rememberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    marginTop: 24,
  },
  remember: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonRemember: {
    width: 16,
    height: 16,
    borderWidth: 0.5,
    borderColor: Colors.gray4,
    backgroundColor: Colors.Transparent,
    borderRadius: 4,
  },
  buttonLogin: {
    marginHorizontal: 24,
    marginTop: 37,
  },
  registerContainer: {
    width: "100%",
    height: 21,
    marginTop: 39,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.gray4,
    position: "absolute",
  },
  buttonRegister: {
    marginHorizontal: 24,
    marginTop: 26,
  },
});
