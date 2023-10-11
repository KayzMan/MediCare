import { View, useWindowDimensions } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { homeTopStyles } from "./homeTop.styles";

// 👇 utilities
import {
  common_icon_props,
  common_text_input_props,
} from "../../../utilities/props.utility";
import {
  isExtraSmallDevice,
  isGreaterThanExtraLarge,
  isLargeDeviceOrBigger,
  isLargerThanMobileSize,
  isMediumDevice,
  isSmallDevice,
  isSmallDeviceOrBigger,
} from "../../../utilities/styles.utility";

// 👇 components
import MyText from "../../Global/MyText/MyText";

export default function Top() {
  const { width } = useWindowDimensions();

  return (
    <View
      style={[
        homeTopStyles.container,
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
      {/* 👇 top part */}
      <View style={homeTopStyles.top}>
        {/* 👇 top left */}
        <View style={homeTopStyles.topLeft}>
          <MyText style={homeTopStyles.topLeftText} fontWeight="ubuntuLight">
            Current Location
          </MyText>

          <View style={homeTopStyles.topLeftLocationWrapper}>
            <MaterialCommunityIcons
              {...common_icon_props}
              name="map-marker"
              size={theme.sizes.icon * 0.6}
            />

            <MyText
              fontWeight="ubuntuMedium"
              style={homeTopStyles.topLeftLocationWrapperText}
            >
              Budiriro 1, Harare
            </MyText>
          </View>
        </View>

        {/* 👇 top right */}
        <View style={homeTopStyles.topRightIcon}>
          <MaterialCommunityIcons
            {...common_icon_props}
            name="bell-badge"
            size={theme.sizes.icon * 0.8}
          />
        </View>
      </View>

      {/* 👇 search bar */}
      <View
        style={[
          homeTopStyles.textInputWrapper,
          {
            marginTop: isLargeDeviceOrBigger(width)
              ? theme.sizes.appMargin * 2
              : theme.sizes.appMargin * 1.2,
          },
        ]}
      >
        <MaterialCommunityIcons {...common_icon_props} name="magnify" />

        <TextInput
          {...common_text_input_props}
          placeholder="Search a doctor or health issue"
          placeholderTextColor={theme.colors.grey700}
          style={homeTopStyles.textInput}
          contentStyle={homeTopStyles.textInputContent}
        />
      </View>
    </View>
  );
}
