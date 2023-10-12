import { useGlobalContext } from "../../../context/MyGlobalContext";
import { View, useWindowDimensions } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { topDetailStyles } from "./topDetail.styles";

// 👇 utilities
import {
  isGreaterThanExtraLarge,
  isLargeDeviceOrBigger,
  isSmallDeviceOrBigger,
} from "../../../utilities/styles.utility";
import { common_icon_props } from "../../../utilities/props.utility";

// 👇 components
import MyText from "../../Global/MyText/MyText";

export default function TopDetail() {
  const { selectedDoctor } = useGlobalContext();
  const { width } = useWindowDimensions();

  return (
    <View
      style={[
        topDetailStyles.container,
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
      {/* 👇 left */}
      <Avatar
        source={selectedDoctor?.avatar}
        size={"xlarge"}
        avatarStyle={{ borderRadius: theme.sizes.radius * 2 }}
      />

      {/* 👇 right */}
      <View style={topDetailStyles.right}>
        {/* 👇 right top */}
        <View style={topDetailStyles.rightTop}>
          <MyText fontWeight="ubuntuMedium" style={topDetailStyles.username}>
            {selectedDoctor?.name || "username"}
          </MyText>
          <MyText style={topDetailStyles.profession}>
            {selectedDoctor?.profession || "profession"}
          </MyText>
        </View>

        {/* 👇 right bottom */}
        <View style={topDetailStyles.rightBottom}>
          {/* 👇 rating item */}
          <View style={topDetailStyles.ratingItem}>
            <View style={topDetailStyles.iconContainer}>
              <MaterialCommunityIcons
                {...common_icon_props}
                name="star"
                color={"gold"}
                size={theme.sizes.icon * 0.8}
              />
            </View>

            {/* 👇 rating item right */}
            <View style={topDetailStyles.ratingItemRight}>
              <MyText style={topDetailStyles.ratingItemTitle}>Rating</MyText>
              <MyText
                fontWeight="ubuntuMedium"
                style={topDetailStyles.ratingItemValue}
              >
                4.5 out of 5
              </MyText>
            </View>
          </View>

          {/* 👇 rating item */}
          <View style={topDetailStyles.ratingItem}>
            <View style={topDetailStyles.iconContainer}>
              <Ionicons
                {...common_icon_props}
                name="ios-people"
                size={theme.sizes.icon * 0.8}
              />
            </View>

            {/* 👇 rating item right */}
            <View style={topDetailStyles.ratingItemRight}>
              <MyText style={topDetailStyles.ratingItemTitle}>Patients</MyText>
              <MyText
                fontWeight="ubuntuMedium"
                style={topDetailStyles.ratingItemValue}
              >
                1000+
              </MyText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
