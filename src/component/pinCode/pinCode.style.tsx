import {StyleSheet} from "react-native";
import {Colors} from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pinInputRow: {
    paddingTop: 15,
    paddingBottom: 66,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  numPadContainer: {},
  numPadRow: {
    flexDirection: "row",
  },
  numberButton: {
    width: 76,
    height: 76,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.gray7,
    borderRadius: 60,
  },
  backSpaceButton: {
    width: 72,
    height: 72,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  numPadEmpty: {
    width: 72,
    height: 72,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
