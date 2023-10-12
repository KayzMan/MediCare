import { View, Text } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { openSlotsStyles } from "./openSlots.styles";

export default function OpenSlots() {
  return (
    <View style={openSlotsStyles.container}>
      <Text>OpenSlots</Text>
    </View>
  );
}
