import { useGlobalContext } from "../../../context/MyGlobalContext";
import React from "react";
import { useWindowDimensions } from "react-native";
import { ButtonProps, TouchableRipple } from "react-native-paper";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { actionButtonStyles } from "./actionButton.styles";

// 👇 utilities
import { isExtraExtraSmallDevice } from "../../../utilities/styles.utility";

// 👇 components
import MyText from "../MyText/MyText";

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
    <TouchableRipple
      style={[
        actionButtonStyles.button,
        {
          height: isExtraExtraSmallDevice(width)
            ? theme.sizes.smallButtonHeight
            : theme.sizes.mediumButtonHeight,
        },
        style,
      ]}
      rippleColor={rippleColor ?? theme.colors.ghostWhite}
      {...props}
    >
      <MyText
        style={[
          actionButtonStyles.buttonText,
          Ubuntu_FontLoaded && {
            fontFamily: theme.font.ubuntuMedium,
          },
          labelStyle,
        ]}
      >
        {children}
      </MyText>
    </TouchableRipple>
  );
}
