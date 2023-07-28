import React from "react";
import {TouchableOpacity} from "react-native";
import styles from "./pinCode.style";
import {Colors} from "../../styles";
import type {NumPadButtonProps} from "./pinCode.type";
import {PinKey} from "./pinCode.type";
import {TextFontMD} from "../text";
import {DeleteIcon} from "../../../assets";

const NumPadButton = (props: NumPadButtonProps) => {
  const {item, onButtonPress} = props;

  if (item === PinKey.backSpace) {
    return (
      <TouchableOpacity
        onPress={() => {
          onButtonPress(item);
        }}
        style={styles.backSpaceButton}
      >
        <DeleteIcon />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={() => {
        onButtonPress(item);
      }}
      style={styles.numberButton}
    >
      <TextFontMD size={30} color={Colors.gray3}>
        {item}
      </TextFontMD>
    </TouchableOpacity>
  );
};

export default NumPadButton;
