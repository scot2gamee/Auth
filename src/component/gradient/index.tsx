import React from "react";
import type {StyleProp, ViewStyle} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {Colors} from "../../styles";
import styles from "./index.style";
import {RadialGradient} from "react-native-image-filter-kit";

enum IGradientType {
  CENTER_HORIZONTAL = "CENTER_HORIZONTAL",
  BRAND_BOTTOM = "BRAND_BOTTOM",
  BRAND_TOP = "BRAND_TOP",
  BRAND_LEFT_TOP = "BRAND_LEFT_TOP",
  BRAND_RIGHT_TOP = "BRAND_RIGHT_TOP",
  HAFT_VERTICAL = "HAFT_VERTICAL",
  CIRCLE = "CIRCLE",
  DEFAULT = "DEFAULT",
}

interface IGradient {
  children?: any;
  color?: string | null;
  colors?: string[];
  radius?: number;
  style?: StyleProp<ViewStyle>;
  type?: keyof typeof IGradientType;
}

const renderType = (type: keyof typeof IGradientType) => {
  switch (type) {
    case IGradientType.CENTER_HORIZONTAL:
      return {
        start: {x: 0.5, y: 1},
        end: {x: 0.5, y: 0},
      };

    case IGradientType.BRAND_BOTTOM:
      return {
        start: {x: 0.5, y: 1},
        end: {x: 0.5, y: 0.5},
      };

    case IGradientType.BRAND_TOP:
      return {
        start: {x: 0.5, y: 0},
        end: {x: 0.5, y: 0.5},
      };

    case IGradientType.BRAND_LEFT_TOP:
      return {
        start: {x: 0.3, y: 0},
        end: {x: 0.5, y: 0.5},
      };

    case IGradientType.HAFT_VERTICAL:
      return {
        start: {x: 0.5, y: 0.1},
        end: {x: 0.5, y: 1},
      };

    case IGradientType.BRAND_RIGHT_TOP:
      return {
        start: {x: 0.6, y: 0},
        end: {x: 0.1, y: 0.3},
      };
    case IGradientType.CIRCLE:
      return {
        start: {x: 0.0, y: 1},
        end: {x: 1, y: 1},
      };
    default:
      return {
        start: {x: 0, y: 0.8},
        end: {x: 1, y: 1},
      };
  }
};

const Gradient = ({
  children,
  color,
  colors = Colors.GradientColorGray,
  style,
  type,
  radius,
}: IGradient) => {
  const initTyep = type ?? IGradientType.DEFAULT;
  return (
    // <RadialGradient
    //   style={{position: "absolute"}}
    //   colors={color}
    //   stops={[0, 1]}
    //   style={styles.container, style}
    // />
    <LinearGradient
      start={renderType(initTyep).start}
      end={renderType(initTyep).end}
      colors={color ? [color, color] : colors}
      style={[styles.container, style, {borderRadius: radius ?? 5}]}
    >
      {children}
    </LinearGradient>
  );
};

export default Gradient;
