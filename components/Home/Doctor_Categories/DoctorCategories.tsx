import { View } from "react-native";
import React, { useCallback } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { doctorCategoriesStyles } from "./doctorCategories.styles";

// 👇 utilities
import { common_icon_props } from "../../../utilities/props.utility";

// 👇 controllers
import { loadHomeDoctorsCategories } from "./doctorCategories.controller";

// 👇 models
import {
  HomeDoctorCategoryItem,
  HomeDoctorCategoryItemProps,
} from "./doctorCategories.model";

// 👇 components
import MyText from "../../Global/MyText/MyText";
import DoctorCategoryItem from "./DoctorCategoryItem";

export default function DoctorCategories() {
  // 👇 categories renderItem
  const renderItem = useCallback(
    (item: HomeDoctorCategoryItemProps) => (
      <DoctorCategoryItem {...item.item} />
    ),
    []
  );

  // 👇 categories keyExtractor
  const keyExtractor = useCallback(
    (item: HomeDoctorCategoryItem, index: number) =>
      `homeDoctorCategoryItem-#${item.id}-#${index}`,
    []
  );

  return (
    <View style={doctorCategoriesStyles.container}>
      {/* 👇 top bar */}
      <View style={doctorCategoriesStyles.topBar}>
        <MyText
          fontWeight="ubuntuMedium"
          style={doctorCategoriesStyles.topBar_text}
        >
          Let's find your doctor
        </MyText>

        <FontAwesome
          {...common_icon_props}
          name="sliders"
          size={theme.sizes.icon * 0.8}
        />
      </View>

      {/* 👇 the categories */}
      <FlashList
        estimatedItemSize={theme.sizes.smallButtonHeight}
        data={loadHomeDoctorsCategories()}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
