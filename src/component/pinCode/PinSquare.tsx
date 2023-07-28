import {View, StyleSheet} from "react-native";
import {Colors} from "../../styles";

import type {PinSquareProps} from "./pinCode.type";
import {TextFontMD} from "../text";

const PinSquare = (props: PinSquareProps) => {
  const {pinChar} = props;
  return (
    <View style={styles.pinSquareContainer}>
      {pinChar === "*" ? (
        <View style={styles.pinMaskDot} />
      ) : (
        <TextFontMD size={24} style={styles.pinText}>
          {pinChar}
        </TextFontMD>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pinSquareContainer: {
    width: 14,
    height: 14,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: Colors.gray5,
    backgroundColor: Colors.Transparent,
    borderRadius: 8,
  },
  pinMaskDot: {
    width: 14,
    height: 14,
    backgroundColor: Colors.green,
    borderRadius: 14,
  },
  pinText: {
    fontWeight: "500",
  },
});

export default PinSquare;
