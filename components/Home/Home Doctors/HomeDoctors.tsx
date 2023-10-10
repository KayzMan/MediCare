import { View, useWindowDimensions } from "react-native";
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

// 👇 utilities
import {
  isGreaterThanExtraLarge,
  isLargeDeviceOrBigger,
  isSmallDeviceOrBigger,
} from "../../../utilities/styles.utility";

// 👇 components
import HomeDoctorItem from "./HomeDoctorItem";

export default function HomeDoctors() {
  const { width } = useWindowDimensions();

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
    <View
      style={[
        homeDoctorStyles.container,
        {
          marginTop: isLargeDeviceOrBigger(width)
            ? theme.sizes.appMargin * 2
            : 0,
          maxWidth: theme.sizes.smallDevice,
          minWidth: isSmallDeviceOrBigger(width)
            ? isGreaterThanExtraLarge(width)
              ? theme.sizes.mediumDevice
              : isLargeDeviceOrBigger(width)
              ? theme.sizes.smallDevice
              : theme.sizes.smallDevice - 50
            : 0,
          marginHorizontal: isSmallDeviceOrBigger(width) ? "auto" : 0,
        },
      ]}
    >
      <FlashList
        estimatedItemSize={100}
        data={loadHomeDoctors()}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        numColumns={isLargeDeviceOrBigger(width) ? 2 : 1}
      />
    </View>
  );
}
