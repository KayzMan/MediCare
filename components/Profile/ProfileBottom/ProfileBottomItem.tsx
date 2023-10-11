import { View } from "react-native";
import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { profileBottomStyles } from "./profileBottom.styles";

// 👇 utilities
import { common_icon_props } from "../../../utilities/props.utility";

// 👇 models
import { iProfileBottom } from "./profileBottom.model";

// 👇 components
import MyText from "../../Global/MyText/MyText";

export default function ProfileBottomItem({
  icon,
  iconSource,
  title,
}: iProfileBottom) {
  return (
    <View style={profileBottomStyles.bottomItem}>
      {/* 👇 left */}
      <View style={profileBottomStyles.bottomItemLeft}>
        {/* 👇 icon */}
        <View style={profileBottomStyles.bottomItemIconWrapper}>
          {iconSource === "antDesign" && (
            <AntDesign
              {...common_icon_props}
              name={icon}
              size={theme.sizes.icon * 0.75}
            />
          )}

          {iconSource === "materialCommunity" && (
            <MaterialCommunityIcons
              {...common_icon_props}
              name={icon}
              size={theme.sizes.icon * 0.75}
            />
          )}
        </View>

        {/* 👇 title */}
        <MyText style={profileBottomStyles.bottomItemTitle}>
          {title || "title"}
        </MyText>
      </View>

      {/* 👇 right icon */}
      <MaterialCommunityIcons {...common_icon_props} name="chevron-right" />
    </View>
  );
}
