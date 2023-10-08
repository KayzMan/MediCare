import { View } from "react-native";
import React, { useCallback } from "react";
import { FlashList } from "@shopify/flash-list";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { homeDoctorStyles } from "./homeDoctors.styles";

// 👇 models
import {
  HomeDoctorItem as iHomeDoctorItem,
  HomeDoctorItemProps,
} from "./homeDoctors.model";

// 👇 controllers
import { loadHomeDoctors } from "./homeDoctors.controller";

// 👇 components
import MyText from "../../Global/MyText/MyText";
import HomeDoctorItem from "./HomeDoctorItem";

export default function HomeDoctors() {
  // 👇 doctors renderItem
  const renderItem = useCallback(
    (item: HomeDoctorItemProps) => <HomeDoctorItem {...item.item} />,
    []
  );

  // 👇 doctors keyExtractor
  const keyExtractor = useCallback(
    (item: iHomeDoctorItem, index: number) =>
      `homeDoctor-#${item.id}-#${index}`,
    []
  );

  return (
    <View style={homeDoctorStyles.container}>
      <FlashList
        estimatedItemSize={100}
        data={loadHomeDoctors()}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
