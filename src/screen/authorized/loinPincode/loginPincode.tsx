import React, {useState} from "react";
import PinCodeScreen from "../../../containers/pincode/pinCodeScreen";

const loginPincode = () => {
  const [modalPermission, setModalPermission] = useState(true);
  const onSubmit = () => {};
  const onPressModal = () => {
    setModalPermission(!modalPermission);
  };
  return (
    <PinCodeScreen
      onSubmit={onSubmit}
      title={"กรุณากรอกรหัส PIN"}
      modalPermission={modalPermission}
      onPressModal={onPressModal}
    />
  );
};

export default loginPincode;
