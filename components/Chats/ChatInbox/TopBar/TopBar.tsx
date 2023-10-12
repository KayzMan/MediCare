import { useGlobalContext } from "../../../../context/MyGlobalContext";
import React from "react";
import { View, useWindowDimensions } from "react-native";
import { Avatar } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

// 👇 theme
import { theme } from "../../../../theme";

// 👇 styles
import { topBarStyles } from "./topBar.styles";

// 👇 utilities
import { common_icon_props } from "../../../../utilities/props.utility";
import {
  isExtraExtraSmallDevice,
  isGreaterThanExtraLarge,
  isLargeDeviceOrBigger,
  isSmallDeviceOrBigger,
} from "../../../../utilities/styles.utility";

// 👇 components
import MyText from "../../../Global/MyText/MyText";

export default function TopBar() {
  const navigation = useNavigation();
  const { selectedChat } = useGlobalContext();
  const day = moment.weekdaysShort()[new Date().getDay()];
  const date = new Date().getDate();
  const month = moment.monthsShort()[new Date().getMonth()];
  const { width } = useWindowDimensions();

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
      <View style={topBarStyles.top}>
        {/* 👇 left */}
        <View style={topBarStyles.left}>
          {/* 👇 back left arrow */}
          <MaterialCommunityIcons
            {...common_icon_props}
            name="chevron-left"
            color={theme.colors.black}
            size={theme.sizes.icon * 1.5}
            onPress={() => {
              if (navigation.canGoBack()) {
                navigation.goBack();
              }
            }}
          />

          <View style={topBarStyles.leftAvatarDetailWrapper}>
            {/* 👇 avatar */}
            <Avatar source={selectedChat?.avatar} size={"medium"} rounded />

            {/* 👇 details */}
            <View style={topBarStyles.detailsWrapper}>
              <MyText
                fontWeight="ubuntuMedium"
                numberOfLines={1}
                style={topBarStyles.username}
              >
                {selectedChat?.name}
              </MyText>

              <View style={topBarStyles.onlineStatusWrapper}>
                {/* 👇 online badge icon */}
                <MaterialCommunityIcons
                  name="circle"
                  color={theme.colors.green500}
                  size={8}
                />

                <MyText style={topBarStyles.onlineText}>Online</MyText>
              </View>
            </View>
          </View>
        </View>

        {/* 👇 right */}
        <View style={topBarStyles.right}>
          {/* 👇 video camera icon */}
          <View style={topBarStyles.iconContainer}>
            <MaterialCommunityIcons
              {...common_icon_props}
              name="video"
              color={theme.colors.white}
              size={theme.sizes.icon * 0.7}
            />
          </View>

          {/* 👇 phone call icon */}
          <View style={topBarStyles.iconContainer}>
            <MaterialCommunityIcons
              {...common_icon_props}
              name="phone"
              color={theme.colors.white}
              size={theme.sizes.icon * 0.7}
            />
          </View>
        </View>
      </View>

      {/* 👇 time bar */}
      <View
        style={[
          topBarStyles.timeBar,
          {
            height: isExtraExtraSmallDevice(width)
              ? theme.sizes.smallButtonHeight
              : theme.sizes.mediumButtonHeight,
          },
        ]}
      >
        <MaterialCommunityIcons
          {...common_icon_props}
          name="clock"
          size={theme.sizes.icon * 0.8}
        />

        <MyText style={topBarStyles.timeBarText} fontWeight="ubuntuMedium">
          {day}, {month} {date}, 08:00am - 11:00am
        </MyText>
      </View>
    </View>
  );
}
