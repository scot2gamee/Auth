import React, {useState, useEffect} from "react";
import {TouchableOpacity, View} from "react-native";
import {styles} from "./verifyOTP.style";
import {Colors, SizeFonts} from "../../../styles";
import {
  CodeField,
  Cursor,
  useClearByFocusCell,
  useBlurOnFulfill,
} from "react-native-confirmation-code-field";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {TextFontBold, TextFontMD, TextFontSM} from "../../../component/text";
import {BackIcon} from "../../../../assets";
import Button from "../../../component/buttons/button";
const VerifyOTPScreen = ({navigation}: any) => {
  const [time, setTime] = useState(60);
  const [value, setValue] = useState<string>("");
  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 4;
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});

  useEffect(() => {
    let interval: any = null;

    if (time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [time]);
  const onSubbmit = () => {
    navigation.navigate("createPinCodeSet");
  };
  const onGoback = () => {
    navigation.goBack();
  };
  const sendOTP = () => {
    setTime(60);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonBack} onPress={onGoback}>
        <BackIcon />
      </TouchableOpacity>
      <TextFontBold size={SizeFonts.h4} color={Colors.black} mt={20}>
        {"ยืนยันตัวตน"}
      </TextFontBold>
      <TextFontSM size={15} color={Colors.gray6} mt={7}>
        {"กรุณากรอกรหัสยืนยันที่เราได้ส่งให้คุณ "}
      </TextFontSM>
      <TextFontSM size={15} color={Colors.gray6} mt={7}>
        {"082-XXX-8998"}
      </TextFontSM>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.keyboardAwareView}
      >
        <View>
          <CodeField
            ref={ref}
            {...codeFieldProps}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <View style={{width:30,height:60,borderBottomWidth:1,borderBlockColor:Colors.gray4}}>
                <TextFontMD
                  key={index}
                  size={SizeFonts.h3}
                  textAlign={"center"}
                  color={Colors.black}
                  mt={26}
                  onLayout={getCellOnLayoutHandler(index)}
                >
                  {symbol || (isFocused ? <Cursor /> : null)}
                </TextFontMD>
              </View>
            )}
          />
          <Button
            text={"ยืนยัน"}
            backgroundColor={Colors.green}
            radius={5}
            fontColor={Colors.white}
            fontSize={SizeFonts.m}
            style={styles.buttonSubmit}
            onPress={onSubbmit}
          />
        </View>
      </KeyboardAwareScrollView>
      <TextFontMD size={15} color={Colors.gray6} textAlign={"center"}>
        {"หากคุณไม่ได้รับรหัส?"}
      </TextFontMD>
      <TouchableOpacity disabled={time == 0 ? false : true} onPress={sendOTP}>
        <TextFontSM
          size={15}
          color={Colors.green}
          mt={12}
          mb={42}
          textAlign={"center"}
        >
          {"ส่งรหัสใหม่ "}
          {time != 0 && "(" + time + ")"}
        </TextFontSM>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyOTPScreen;
