export type DisplayPinChar =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "0"
  | "*";

export enum PinKey {
  one = "1",
  two = "2",
  three = "3",
  four = "4",
  five = "5",
  six = "6",
  seven = "7",
  eight = "8",
  nine = "9",
  zero = "0",
  backSpace = "backSpace",
}

export interface NumPadButtonProps {
  item: PinKey;
  onButtonPress: (item: PinKey) => void;
}

export interface PinSquareProps {
  pinChar: DisplayPinChar;
}
