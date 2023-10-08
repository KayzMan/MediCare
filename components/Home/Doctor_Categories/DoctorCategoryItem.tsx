import { View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { doctorCategoriesStyles } from "./doctorCategories.styles";

// 👇 models
import { HomeDoctorCategoryItem } from "./doctorCategories.model";

// 👇 utilities
import { common_icon_props } from "../../../utilities/props.utility";

// 👇 components
import MyText from "../../Global/MyText/MyText";

export default function DoctorCategoryItem({
  icon,
  name,
}: HomeDoctorCategoryItem) {
  return (
    <View style={doctorCategoriesStyles.categoryItem}>
      {/* 👇 icon */}
      <MaterialCommunityIcons
        {...common_icon_props}
        name={icon}
        size={theme.sizes.icon * 0.8}
      />

      {/* 👇 name */}
      <MyText style={doctorCategoriesStyles.categoryItemText}>
        {name || "name"}
      </MyText>
    </View>
  );
}
