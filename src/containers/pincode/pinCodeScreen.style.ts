import {StyleSheet} from "react-native";
import {Colors} from "../../styles";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  LogoContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 4,
    paddingBottom: 16,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
  bioMetricRow: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
  },
  bioMetricContainer: {
    flex: 1,
    justifyContent: "center",
  },
  buttonPermission: {
    width: "100%",
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 0.5,
    borderColor: Colors.lineGray,
  },
});
