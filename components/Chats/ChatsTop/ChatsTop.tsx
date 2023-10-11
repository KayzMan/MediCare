import { View, useWindowDimensions } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { chatsTopStyles } from "./chatsTop.styles";

// 👇 utilities
import {
  calculateImageDimension,
  isGreaterThanExtraLarge,
  isLargeDeviceOrBigger,
  isLargerThanMobileSize,
  isSmallDeviceOrBigger,
} from "../../../utilities/styles.utility";
import {
  common_icon_props,
  common_text_input_props,
} from "../../../utilities/props.utility";

// 👇 components
import MyText from "../../Global/MyText/MyText";

export default function ChatsTop({
  optionalWidth,
}: {
  optionalWidth?: number;
}) {
  const { width } = useWindowDimensions();

  const { width: imageWidth, height: imageHeight } = calculateImageDimension(
    368,
    485,
    undefined,
    undefined,
    800
  );

  const { width: bigImageWidth, height: bigImageHeight } =
    calculateImageDimension(
      368,
      485,
      theme.sizes.maxMobileSize,
      undefined,
      800
    );

  return (
    <View
      style={[
        chatsTopStyles.container,
        {
          marginTop: isLargeDeviceOrBigger(width)
            ? theme.sizes.appMargin * 2
            : 0,
        },
        optionalWidth === undefined && {
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
        optionalWidth !== undefined && {
          width: "100%",
        },
      ]}
    >
      {/* 👇 title */}
      <MyText fontWeight="ubuntuBold" style={chatsTopStyles.title}>
        Chats
      </MyText>

      {/* 👇 top image */}
      <Avatar
        source={require("../../../assets/images/a_mobile_phone_chatting_screen.png")}
        size={"xlarge"}
        containerStyle={{
          alignSelf: "center",
          width: isLargerThanMobileSize(theme.sizes.screenWidth)
            ? bigImageWidth
            : imageWidth,
          height: isLargerThanMobileSize(theme.sizes.screenWidth)
            ? bigImageHeight
            : imageHeight,
          left: -5,
        }}
      />

      {/* 👇 search bar */}
      <View
        style={[
          chatsTopStyles.textInputWrapper,
          {
            marginTop: isLargeDeviceOrBigger(width)
              ? theme.sizes.appMargin * 2
              : theme.sizes.appMargin * 1.2,
          },
        ]}
      >
        <TextInput
          {...common_text_input_props}
          placeholder="Search e.g Dr"
          placeholderTextColor={theme.colors.grey600}
          style={chatsTopStyles.textInput}
          contentStyle={chatsTopStyles.textInputContent}
        />

        <MaterialCommunityIcons {...common_icon_props} name="magnify" />
      </View>
    </View>
  );
}
