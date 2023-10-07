import { ScrollView, ScrollViewProps } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { containerViewStyles } from "./containerView.styles";

export default function ContainerView({
  children,
  style,
  ...props
}: ScrollViewProps) {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={[containerViewStyles.container, style]}
      {...props}
    >
      {children}
    </ScrollView>
  );
}
