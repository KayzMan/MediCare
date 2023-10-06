import { View, Text, ScrollView } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { containerViewStyles } from "./containerView.styles";

export default function ContainerView() {
  return (
    <ScrollView style={containerViewStyles.container}>
      <Text>ContainerView</Text>
    </ScrollView>
  );
}
