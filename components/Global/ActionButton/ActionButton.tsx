import { useGlobalContext } from "../../../context/MyGlobalContext";
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
  const { Ubuntu_FontLoaded } = useGlobalContext();

  return (
    <Button
      style={[actionButtonStyles.button, style]}
      labelStyle={[
        actionButtonStyles.buttonText,
        Ubuntu_FontLoaded && {
          fontFamily: theme.font.ubuntuMedium,
        },
        labelStyle,
      ]}
      rippleColor={rippleColor ?? theme.colors.primary_faded}
      {...props}
    >
      {children}
    </Button>
  );
}
