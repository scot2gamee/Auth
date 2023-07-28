import {SafeAreaView, View, Modal, TouchableOpacity} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import styles from "./pinCodeScreen.style";
import {Colors, SizeFonts} from "../../styles";
import {TextFontMD, TextFontSM} from "../../component/text";
import PinCode from "../../component/pinCode/pinCode";
import {TouchIDRedIcon} from "../../../assets";

interface IPinCodeScreen {
  title: string;
  onSubmit: (pinCode: string) => void;
  children?: JSX.Element;
  wrong?: boolean;
  wrongMessage?: string;
  modalPermission?: boolean;
  onPressModal?: () => void;
}

const PinCodeScreen = (props: IPinCodeScreen) => {
  const {
    title,
    onSubmit,
    wrong = false,
    wrongMessage = "",
    modalPermission = false,
    onPressModal,
  } = props;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}
    >
      <View style={styles.container}>
        <SafeAreaView>
          <TextFontMD size={15} color={Colors.black} textAlign={"center"}>
            {title}
          </TextFontMD>
          {wrong && (
            <TextFontMD size={15} color={Colors.red} textAlign={"center"}>
              {wrongMessage}
            </TextFontMD>
          )}
          <View style={styles.titleContainer}>
            <PinCode onPinSubmit={onSubmit} />
          </View>
          {props.children}
        </SafeAreaView>
      </View>
      <Modal animationType="none" transparent={true} visible={modalPermission}>
        <View
          style={{
            height: "100%",
            backgroundColor: Colors.black40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "70%",
              backgroundColor: Colors.white,
              borderRadius: 10,
              paddingTop: 20.5,
            }}
          >
            <TouchIDRedIcon style={{alignSelf: "center"}} />
            <TextFontSM
              textAlign={"center"}
              color={Colors.black}
              size={17}
              mt={10}
            >
              {"Touch ID for\n“CGS Application”"}
            </TextFontSM>
            <TextFontMD
              textAlign={"center"}
              color={Colors.black2}
              size={SizeFonts.s}
              mt={4}
              mb={2.5}
            >
              {"เข้่าใช้งานด้วย Touch ID หรือ\nยกเลิกเพื่อกลับไปใช้รหัส PIN"}
            </TextFontMD>
            <TouchableOpacity style={styles.buttonPermission}>
              <TextFontMD color={Colors.blue2} size={17}>
                {"Enter Password"}
              </TextFontMD>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressModal}
              style={styles.buttonPermission}
            >
              <TextFontMD color={Colors.blue2} size={17}>
                {"ยกเลิก"}
              </TextFontMD>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default PinCodeScreen;
