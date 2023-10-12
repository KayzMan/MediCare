import { View, useWindowDimensions } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

// 👇 theme
import { theme } from "../../../../theme";

// 👇 styles
import { sendMessageStyles } from "./sendMessage.styles";

// 👇 utilities
import {
  isExtraExtraSmallDevice,
  isGreaterThanExtraLarge,
  isLargeDeviceOrBigger,
  isSmallDeviceOrBigger,
} from "../../../../utilities/styles.utility";
import {
  common_icon_props,
  common_text_input_props,
} from "../../../../utilities/props.utility";

export default function SendMessage() {
  const { width } = useWindowDimensions();

  return (
    <View
      style={[
        sendMessageStyles.container,
        {
          left: isExtraExtraSmallDevice(width) ? 10 : 20,
          right: isExtraExtraSmallDevice(width) ? 10 : 20,
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
      <TextInput
        {...common_text_input_props}
        placeholder="Type something ..."
        placeholderTextColor={theme.colors.grey700}
        style={sendMessageStyles.textInput}
        contentStyle={sendMessageStyles.textInputContent}
      />

      <EvilIcons
        {...common_icon_props}
        name="sc-telegram"
        size={theme.sizes.icon * 1.2}
      />
    </View>
  );
}
