import React, {useCallback, useEffect, useMemo, useRef} from "react";
import type {BottomSheetHandleProps} from "@gorhom/bottom-sheet";
import {
  BottomSheetBackdrop,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import styles from "./bottomSheet.style";
import type {StyleProp, ViewStyle} from "react-native";
import {View} from "react-native";
import {EventRegister} from "react-native-event-listeners";
import type {BottomSheetDefaultBackdropProps} from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import withBottomFooter from "./bottomSheet.footer";

interface IBottomSheet {
  points?: Array<string | number>;
  children: React.ReactNode;
  headerComponent?: React.FC<BottomSheetHandleProps>;
  indicatorStyle?: StyleProp<ViewStyle>;
  footerComponent?: () => React.ReactNode;
  onChange?: (v: number) => void;
}

const BottomSheet = (props: IBottomSheet) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(
    () => props.points ?? ["60%", "80%"],
    [props.points],
  );

  const renderBackdrop = useCallback(
    (
      propsBackDrop: JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps,
    ) => (
      <BottomSheetBackdrop
        {...propsBackDrop}
        disappearsOnIndex={-1}
        appearsOnIndex={2}
        opacity={1}
      />
    ),
    [],
  );

  useEffect(() => {
    EventRegister.addEventListener("showBottomSheet", () =>
      bottomSheetModalRef.current?.present(),
    );
    EventRegister.addEventListener("hideBottomSheet", () =>
      bottomSheetModalRef.current?.close(),
    );

    return () => {
      EventRegister.removeEventListener("showBottomSheet");
      EventRegister.removeEventListener("hideBottomSheet");
    };
  }, []);

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          onChange={props.onChange}
          snapPoints={snapPoints}
          backdropComponent={renderBackdrop}
          handleComponent={props.headerComponent}
          handleIndicatorStyle={props.indicatorStyle}
          footerComponent={
            props.footerComponent && withBottomFooter(props.footerComponent)
          }
        >
          {props.children}
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default BottomSheet;

export const showBottomSheet = () => EventRegister.emit("showBottomSheet");
export const hideBottomSheet = () => EventRegister.emit("hideBottomSheet");
