import { View, useWindowDimensions } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { topBarStyles } from "./topBar.styles";

// 👇 utilities
import { common_icon_props } from "../../../utilities/props.utility";
import {
  isGreaterThanExtraLarge,
  isLargeDeviceOrBigger,
  isSmallDeviceOrBigger,
} from "../../../utilities/styles.utility";

// 👇 components
import MyText from "../../Global/MyText/MyText";

export default function TopBar() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      style={[
        topBarStyles.container,
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
      {/* 👇 back icon*/}
      <MaterialCommunityIcons
        {...common_icon_props}
        name="arrow-left"
        color={theme.colors.black}
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }}
      />

      <MyText fontWeight="ubuntuMedium" style={topBarStyles.title}>
        Appointment
      </MyText>
    </View>
  );
}
