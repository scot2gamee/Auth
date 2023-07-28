import * as React from "react";
import {StyleSheet, TextInput} from "react-native";
import {Colors, SizeFonts} from "../../styles";
import type {ILabelInput} from "./input.type";
import {Fonts} from "../../../assets/fonts";

const TextFontInput = (props: ILabelInput) => {
  return (
    <TextInput
      style={[styles.container, props.style]}
      onChangeText={props?.onChange}
      onBlur={props?.onBlur}
      value={props?.value}
      onFocus={() => props.onFocus?.(props.label ?? "")}
      placeholder={props?.placeholder}
      keyboardType={props?.keyboardType}
      secureTextEntry={props?.secureTextEntry}
      textContentType="oneTimeCode"
      autoCorrect={false}
      placeholderTextColor={Colors.gray3}
      editable={props?.editable}
      maxLength={props?.maxLength}
      multiline={props?.multiline}
      textAlignVertical={props.multiline ? "top" : "center"}
    />
  );
};

export default TextFontInput;

const styles = StyleSheet.create({
  container: {
    color: Colors.gray3,
    fontFamily: Fonts.SukhumvitSetMedium,
    fontSize: 13,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray4,
    marginHorizontal: 24,
    height: 59,
    paddingTop: 31,
  },
});
