import React, {useState} from "react";
import PinCodeScreen from "../../../containers/pincode/pinCodeScreen";
const CreatePinCodeConfirmScreen = ({navigation, route}: any) => {
  const [wrongCount, setWrongCount] = useState(false);
  const onPinConfirmSubmit = (pinCode: string) => {
    if (route?.params === pinCode) {
      navigation.navigate("touchID");
    } else {
      setWrongCount(true);
    }
  };

  return (
    <PinCodeScreen
      onSubmit={onPinConfirmSubmit}
      title={"ยืนยันรหัส PIN CODE"}
      wrong={wrongCount}
      wrongMessage={"รหัส PIN CODE ไม่ตรงกัน"}
    />
  );
};

export default CreatePinCodeConfirmScreen;
