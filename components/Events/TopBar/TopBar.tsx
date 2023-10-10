import { View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { topBarStyles } from "./topBar.styles";

// 👇 utilities
import { common_icon_props } from "../../../utilities/props.utility";

// 👇 components
import MyText from "../../Global/MyText/MyText";

export default function TopBar() {
  return (
    <View style={topBarStyles.container}>
      <MyText fontWeight="ubuntuBold" style={topBarStyles.title}>
        My Schedule
      </MyText>

      <MaterialCommunityIcons
        {...common_icon_props}
        name="dots-horizontal"
        color={theme.colors.black}
      />
    </View>
  );
}
