import { useGlobalContext } from "../../../context/MyGlobalContext";
import React from "react";
import { useWindowDimensions } from "react-native";
import { ButtonProps, Button } from "react-native-paper";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { actionButtonStyles } from "./actionButton.styles";

// 👇 utilities
import { isExtraExtraSmallDevice } from "../../../utilities/styles.utility";

export default function ActionButton({
  children,
  style,
  labelStyle,
  rippleColor,
  ...props
}: ButtonProps) {
  const { Ubuntu_FontLoaded } = useGlobalContext();
  const { width } = useWindowDimensions();

  return (
    <Button
      style={[
        actionButtonStyles.button,
        {
          height: isExtraExtraSmallDevice(width)
            ? theme.sizes.smallButtonHeight
            : theme.sizes.mediumButtonHeight,
        },
        style,
      ]}
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
