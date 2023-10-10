import { useGlobalContext } from "../../../context/MyGlobalContext";
import { Text, useWindowDimensions } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../../theme";

// 👇 models
import { MYTextProps } from "./myText.model";

// 👇 utilities
import {
  isExtraExtraSmallDevice,
  isLargeDeviceOrBigger,
} from "../../../utilities/styles.utility";

export default function MyText({
  children,
  fontWeight,
  color,
  style,
  ...props
}: MYTextProps) {
  const { Ubuntu_FontLoaded } = useGlobalContext();
  const { width } = useWindowDimensions();

  return (
    <Text
      {...props}
      style={[
        Ubuntu_FontLoaded && {
          fontFamily: fontWeight ? theme.font[fontWeight] : theme.font.ubuntu,
        },
        {
          color: color ?? "black",
          fontSize: theme.sizes.smallFontSize,
          // fontSize: isExtraExtraSmallDevice(width)
          //   ? theme.fonts.titleSmall.fontSize
          //   : isLargeDeviceOrBigger(width)
          //   ? theme.fonts.titleLarge.fontSize
          //   : theme.fonts.titleMedium.fontSize,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
