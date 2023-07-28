import React, {useEffect, useState} from "react";
import {View} from "react-native";

import styles from "./pinCode.style";
import PinSquare from "./PinSquare";
import NumPadButton from "./NumPadButton";
import type {DisplayPinChar} from "./pinCode.type";
import {PinKey} from "./pinCode.type";

const MAX_PIN_LENGTH = 6;

interface PinProps {
  onPinSubmit: (pinCode: string) => void;
}

const PinCode = (props: PinProps) => {
  const {onPinSubmit} = props;
  const [currentPin, setCurrentPin] = useState("");
  const [displayPin, setDisplayPin] = useState("");

  useEffect(() => {
    if (currentPin.length === MAX_PIN_LENGTH) {
      onPinSubmit(currentPin);
      setTimeout(() => {
        setCurrentPin("");
        setDisplayPin("");
      }, 200);
    }
  }, [currentPin]);

  const onButtonPress = (keyButton: PinKey): void => {
    if (keyButton === PinKey.backSpace) {
      const tempCurrentPin = currentPin ? currentPin.slice(0, -1) : "";
      const tempDisplayPin = displayPin ? displayPin.slice(0, -1) : "";
      setCurrentPin(tempCurrentPin);
      setDisplayPin(tempDisplayPin);
    } else if (currentPin.length >= 6) {
      // do nothing
    } else {
      setDisplayPin(displayPin + "*");
      setCurrentPin(currentPin + keyButton);
    }
  };

  return (
    <View style={styles.container}>
      {/* ========== Pin Code Display ========== */}
      <View style={styles.pinInputRow}>
        <PinSquare pinChar={displayPin.slice(0, 1) as DisplayPinChar} />
        <PinSquare pinChar={displayPin.slice(1, 2) as DisplayPinChar} />
        <PinSquare pinChar={displayPin.slice(2, 3) as DisplayPinChar} />
        <PinSquare pinChar={displayPin.slice(3, 4) as DisplayPinChar} />
        <PinSquare pinChar={displayPin.slice(4, 5) as DisplayPinChar} />
        <PinSquare pinChar={displayPin.slice(5, 6) as DisplayPinChar} />
      </View>

      {/* ========== Num Pad ========== */}
      <View style={styles.numPadContainer}>
        <View style={styles.numPadRow}>
          <NumPadButton item={PinKey.one} onButtonPress={onButtonPress} />
          <NumPadButton item={PinKey.two} onButtonPress={onButtonPress} />
          <NumPadButton item={PinKey.three} onButtonPress={onButtonPress} />
        </View>

        <View style={styles.numPadRow}>
          <NumPadButton item={PinKey.four} onButtonPress={onButtonPress} />
          <NumPadButton item={PinKey.five} onButtonPress={onButtonPress} />
          <NumPadButton item={PinKey.six} onButtonPress={onButtonPress} />
        </View>

        <View style={styles.numPadRow}>
          <NumPadButton item={PinKey.seven} onButtonPress={onButtonPress} />
          <NumPadButton item={PinKey.eight} onButtonPress={onButtonPress} />
          <NumPadButton item={PinKey.nine} onButtonPress={onButtonPress} />
        </View>

        <View style={styles.numPadRow}>
          <View style={styles.numPadEmpty} />
          <NumPadButton item={PinKey.zero} onButtonPress={onButtonPress} />
          <NumPadButton item={PinKey.backSpace} onButtonPress={onButtonPress} />
        </View>
      </View>
    </View>
  );
};

export default PinCode;
