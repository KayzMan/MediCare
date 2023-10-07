import { View, Text } from "react-native";
import React from "react";
import { ButtonProps, Button } from "react-native-paper";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { actionButtonStyles } from "./actionButton.styles";

export default function ActionButton({
  children,
  style,
  labelStyle,
  rippleColor,
  ...props
}: ButtonProps) {
  return (
    <Button
      style={[actionButtonStyles.button, style]}
      labelStyle={[actionButtonStyles.buttonText, labelStyle]}
      rippleColor={rippleColor ?? theme.colors.primary_faded}
      {...props}
    >
      {children}
    </Button>
  );
}
