import {View} from "react-native";
import React from "react";
import {styles} from "./touchID.style";
import {TextFontBold, TextFontSM} from "../../../component/text";
import {Colors, SizeFonts} from "../../../styles";
import {TouchIDIcon} from "../../../../assets";
import Button from "../../../component/buttons/button";

const touchID = ({navigation}: any) => {
  const onSkipSubmit = () => {
    navigation.navigate("loginPincode");
  };
  return (
    <View style={styles.container}>
      <TextFontBold size={SizeFonts.h4} color={Colors.black} mt={57}>
        {"Touch ID"}
      </TextFontBold>
      <TextFontSM size={15} color={Colors.gray6} mt={7}>
        {"ตั้งค่าล็อคอินด้วยลายนิ้วมือ\nเพื่อการเข้าถึงที่รวดเร็วขึ้น"}
      </TextFontSM>

      <View style={styles.touchIDIcon}>
        <TouchIDIcon />
      </View>
      <Button
        text={"ตั้งค่าลายนิ้วมือ"}
        backgroundColor={Colors.green}
        radius={5}
        fontColor={Colors.white}
        fontSize={SizeFonts.m}
        style={styles.buttonSettingTouchID}
        onPress={() => {}}
      />
      <Button
        text={"ข้าม"}
        backgroundColor={Colors.Transparent}
        fontColor={Colors.green}
        fontSize={SizeFonts.m}
        style={styles.buttonSkip}
        onPress={onSkipSubmit}
      />
    </View>
  );
};

export default touchID;
