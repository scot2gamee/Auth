import {View, Text, TouchableOpacity} from "react-native";
import React from "react";
import {BackIcon, LockIcon} from "../../../../assets";
import {styles} from "./sendOTP.style";
import {TextFontBold, TextFontMD, TextFontSM} from "../../../component/text";
import {Colors, SizeFonts} from "../../../styles";
import Button from "../../../component/buttons/button";

const sendOTP = ({navigation}: any) => {
  const onSubmit = () => {
    navigation.navigate("verifyOTP");
  };
  const onGoback = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonBack} onPress={onGoback}>
        <BackIcon />
      </TouchableOpacity>
      <View style={styles.otpContainer}>
        <LockIcon style={styles.icon} />
        <TextFontBold
          size={SizeFonts.h4}
          color={Colors.black}
          textAlign={"center"}
          mt={40}
        >
          {"OTP จะถูกส่งไปที่เบอร์โทรศัพท์"}
        </TextFontBold>
        <TextFontSM
          size={SizeFonts.h4}
          color={Colors.green}
          textAlign={"center"}
          mt={9}
        >
          {"082-XXX-8998"}
        </TextFontSM>
        <Button
          text={"ขอรหัส OTP"}
          backgroundColor={Colors.green}
          radius={5}
          fontColor={Colors.white}
          fontSize={SizeFonts.m}
          style={styles.buttonOTP}
          onPress={onSubmit}
        />
        <TextFontMD mt={24} color={Colors.gray5} size={11} textAlign={"center"}>
          {"กรณีเบอร์โทรศัพท์ไม่ถูกต้องกรุณาติดต่อเบอร์ 02-XXX-XXXX"}
        </TextFontMD>
      </View>
    </View>
  );
};

export default sendOTP;
