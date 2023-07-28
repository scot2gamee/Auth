import {StyleSheet,Platform} from "react-native";
import {Colors} from "../../../styles";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  modalContainer: {
    width: "100%",
    height: "70%",
    backgroundColor: Colors.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    position: "absolute",
    bottom: 0,
    zIndex: 2,
    ...Colors.shadow,
  },
  buttonEng: {
    marginHorizontal: 24,
    marginTop: "25%",
  },
  buttonTh: {
    marginTop: 24,
    marginHorizontal: 24,
  },
  heightTerms: {
    flex: 0.8,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray1,
    paddingBottom: 23,
    paddingTop: 33,
    marginHorizontal: 24,
  },
  buttonTermsContainer: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  buttonTerms: {
    width: "48%",
    height: 44,
  },
  buttonBack: {
    marginLeft: 24,
    marginTop: Platform.OS == 'ios'? 53: 13,
  },
});
