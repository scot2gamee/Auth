import {View, Modal, TouchableOpacity, SafeAreaView} from "react-native";
import React, {useState, useEffect} from "react";
import {TextFontBold, TextFontSM} from "../../../component/text";
import Button from "../../../component/buttons/button";
import {Colors, SizeFonts} from "../../../styles";
import {styles} from "./selectLanguage.style";
import {BackIcon, TermsIcon} from "../../../../assets";
const selectLanguage = ({navigation}: any) => {
  const [modalTerms, setModalTerms] = useState(false);
  const toggleModal = (isOpen: boolean): void => {
    if (isOpen) setModalTerms(true);
    else setModalTerms(false);
  };
  const onSubmit = () => {
    navigation.navigate("login");
  };
  useEffect(() => {
    setModalTerms(false);
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <TextFontBold color={Colors.black} ml={24} size={SizeFonts.h4}>
        {"ยินดีต้อนรับ"}
      </TextFontBold>

      <TextFontSM color={Colors.gray} ml={24} size={15}>
        {"กรุณาเลือกภาษา"}
      </TextFontSM>
      <Button
        text={"English"}
        backgroundColor={Colors.green}
        radius={5}
        fontColor={Colors.white}
        fontSize={SizeFonts.m}
        style={styles.buttonEng}
        onPress={() => {
          toggleModal(!modalTerms);
        }}
      />
      <Button
        text={"ไทย"}
        backgroundColor={Colors.green}
        radius={5}
        fontColor={Colors.white}
        fontSize={SizeFonts.m}
        style={styles.buttonTh}
        onPress={() => {
          toggleModal(!modalTerms);
        }}
      />
      <Modal animationType="none" transparent={true} visible={modalTerms}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => {
            toggleModal(!modalTerms);
          }}
        >
          <BackIcon />
        </TouchableOpacity>
        <View style={styles.modalContainer}>
          <View style={styles.heightTerms}>
            <View style={styles.title}>
              <TermsIcon />
              <TextFontBold color={Colors.black} ml={12} size={SizeFonts.h4}>
                {"เงื่อนไขการใช้บริการ"}
              </TextFontBold>
            </View>
          </View>
          <View style={styles.buttonTermsContainer}>
            <Button
              text={"ปฏิเสธ"}
              backgroundColor={Colors.white}
              radius={5}
              fontColor={Colors.green}
              fontSize={SizeFonts.m}
              style={styles.buttonTerms}
              isOutline
              radiusColor={Colors.green}
              onPress={() => {
                toggleModal(!modalTerms);
              }}
            />
            <Button
              text={"ยอมรับ"}
              backgroundColor={Colors.green}
              radius={5}
              fontColor={Colors.white}
              fontSize={SizeFonts.m}
              style={styles.buttonTerms}
              onPress={onSubmit}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default selectLanguage;
