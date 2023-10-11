import { View, useWindowDimensions } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { profileTopStyles } from "./profileTop.styles";
import {
  isGreaterThanExtraLarge,
  isLargeDeviceOrBigger,
  isLargerThanMobileSize,
  isSmallDeviceOrBigger,
} from "../../../utilities/styles.utility";

// 👇 utilities
import { common_icon_props } from "../../../utilities/props.utility";
import { calculateImageDimension } from "../../../utilities/styles.utility";

// 👇 components
import MyText from "../../Global/MyText/MyText";

const { width: imageWidth } = calculateImageDimension(
  1024,
  1280,
  undefined,
  undefined,
  2000
);

const { width: bigImageWidth } = calculateImageDimension(
  1024,
  1280,
  theme.sizes.maxMobileSize,
  undefined,
  2000
);

export default function ProfileTop() {
  const { width } = useWindowDimensions();

  return (
    <View
      style={[
        profileTopStyles.container,
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
      {/* 👇 top image */}
      <Avatar
        source={require("../../../assets/images/avatars/avatar5.jpg")}
        rounded
        avatarStyle={{ borderRadius: theme.sizes.radius * 5 }}
        containerStyle={{
          width: isLargerThanMobileSize(width) ? bigImageWidth : imageWidth,
          height: isLargerThanMobileSize(width) ? bigImageWidth : imageWidth,
          alignSelf: "center",
        }}
      />

      {/* 👇 username */}
      <MyText fontWeight="ubuntuMedium" style={profileTopStyles.username}>
        Ngoni Katsidzira
      </MyText>

      {/* 👇 premium text */}
      <View style={profileTopStyles.premiumWrapper}>
        <MaterialCommunityIcons
          {...common_icon_props}
          name="circle"
          size={theme.sizes.icon * 0.4}
        />

        <MyText style={profileTopStyles.premiumText}>Premium (9 days)</MyText>
      </View>
    </View>
  );
}
