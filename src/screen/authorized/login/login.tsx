import {View, TouchableOpacity} from "react-native";
import React from "react";
import {styles} from "./login.style";
import TextFontInput from "../../../component/inputs/textFontInput";
import {Colors, SizeFonts} from "../../../styles";
import {TextFontMD} from "../../../component/text";
import Button from "../../../component/buttons/button";

const login = ({navigation}: any) => {
  const onLoginSubmit = () => {
    navigation.navigate("sendOTP");
  };
  return (
    <View style={styles.container}>
      <TextFontInput onChange={e => {}} placeholder={"ชื่อผู้ใช้งาน"} />
      <TextFontInput
        secureTextEntry
        onChange={e => {}}
        placeholder={"รหัสผ่าน"}
        style={styles.inputPassword}
      />
      <View style={styles.rememberContainer}>
        <View style={styles.remember}>
          <TouchableOpacity style={styles.buttonRemember} />
          <TextFontMD ml={6} color={Colors.gray3} size={13}>
            {"บันทึกการเข้าสู่ระบบ"}
          </TextFontMD>
        </View>
        <TouchableOpacity>
          <TextFontMD ml={6} color={Colors.gray3} size={13}>
            {"ลืมรหัสผ่าน?"}
          </TextFontMD>
        </TouchableOpacity>
      </View>
      <Button
        text={"เข้าสู่ระบบ"}
        backgroundColor={Colors.green}
        radius={5}
        fontColor={Colors.white}
        fontSize={SizeFonts.m}
        style={styles.buttonLogin}
        onPress={onLoginSubmit}
      />
      <View style={styles.registerContainer}>
        <View style={styles.line} />
        <TextFontMD
          color={Colors.gray3}
          size={13}
          backgroundColor={Colors.white}
          width={80}
          height={21}
          textAlign={"center"}
        >
          {"ไม่มีบัญชีผู้ใช้"}
        </TextFontMD>
      </View>
      <Button
        text={"เปิดบัญชีเพื่อลงทะเบียนบัญชีผู้ใช้"}
        backgroundColor={Colors.white}
        radius={5}
        fontColor={Colors.green}
        fontSize={SizeFonts.m}
        style={styles.buttonRegister}
        isOutline
        radiusColor={Colors.gray5}
        onPress={() => {}}
      />
    </View>
  );
};

export default login;
