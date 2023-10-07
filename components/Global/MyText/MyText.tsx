import { useGlobalContext } from "../../../context/MyGlobalContext";
import { Text } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../../theme";

// 👇 models
import { MYTextProps } from "./myText.model";

export default function MyText({
  children,
  fontWeight,
  color,
  style,
  ...props
}: MYTextProps) {
  const { Ubuntu_FontLoaded } = useGlobalContext();

  return (
    <Text
      {...props}
      style={[
        Ubuntu_FontLoaded && {
          fontFamily: fontWeight ? theme.font[fontWeight] : theme.font.ubuntu,
        },
        { color: color ?? "black" },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
