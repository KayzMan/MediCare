import { View, useWindowDimensions } from "react-native";
import React, { useCallback } from "react";
import { FlashList } from "@shopify/flash-list";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { profileBottomStyles } from "./profileBottom.styles";

// 👇 utilities
import {
  isGreaterThanExtraLarge,
  isLargeDeviceOrBigger,
  isSmallDeviceOrBigger,
} from "../../../utilities/styles.utility";

// 👇 models
import { iProfileBottom, iProfileBottomProps } from "./profileBottom.model";

// 👇 controllers
import { loadProfileBottomItems } from "./profileBottom.controller";

// 👇 components
import MyText from "../../Global/MyText/MyText";
import ProfileBottomItem from "./ProfileBottomItem";

export default function ProfileBottom() {
  const { width } = useWindowDimensions();

  // 👇 bottom items renderItem
  const renderItem = useCallback(
    (item: iProfileBottomProps) => <ProfileBottomItem {...item.item} />,
    []
  );

  // 👇 bottom items keyExtractor
  const keyExtractor = useCallback(
    (item: iProfileBottom, index: number) =>
      `profileBottomItem-#${item.id}-#${index}`,
    []
  );

  return (
    <View
      style={[
        profileBottomStyles.container,
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
      {/* 👇 title */}
      <MyText style={profileBottomStyles.title}>General</MyText>

      {/* 👇 bottom items */}
      <FlashList
        estimatedItemSize={80}
        data={loadProfileBottomItems()}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
