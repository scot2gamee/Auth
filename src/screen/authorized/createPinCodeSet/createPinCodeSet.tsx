import React from "react";

import PinCodeScreen from "../../../containers/pincode/pinCodeScreen";
const CreatePinCodeSetScreen = ({navigation}: any) => {
  const onPinSetSubmit = (pinCode: string) => {
    navigation.navigate("createPinCodeConfirm", pinCode);
  };

  return (
    <PinCodeScreen onSubmit={onPinSetSubmit} title={"ตั้งรหัส PIN CODE"} />
  );
};

export default CreatePinCodeSetScreen;
