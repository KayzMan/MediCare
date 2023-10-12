import { View, useWindowDimensions } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../../../theme";

// 👇 styles
import { messagesAreaStyles } from "./messagesArea.styles";

// 👇 utilities
import {
  isGreaterThanExtraLarge,
  isLargeDeviceOrBigger,
  isSmallDeviceOrBigger,
} from "../../../../utilities/styles.utility";

// 👇 components
import MyText from "../../../Global/MyText/MyText";
import ContainerView from "../../../Global/Container/ContainerView";

export default function MessagesArea() {
  const { width } = useWindowDimensions();

  return (
    <ContainerView
      style={{
        marginBottom: theme.sizes.appPadding * 5,
      }}
    >
      <View
        style={[
          messagesAreaStyles.container,
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
        {/* 👇 messages */}
        <View style={messagesAreaStyles.messagesWrapper}>
          {/* 👇 other message */}
          <View
            style={[
              messagesAreaStyles.message,
              messagesAreaStyles.otherMessage,
            ]}
          >
            <MyText
              style={[
                messagesAreaStyles.messageText,
                messagesAreaStyles.otherMessageText,
              ]}
            >
              Yes, what help do you need?
            </MyText>

            <MyText
              style={[
                messagesAreaStyles.messageTime,
                messagesAreaStyles.otherMessageTime,
              ]}
            >
              08:25
            </MyText>
          </View>

          {/* 👇 your message */}
          <View
            style={[messagesAreaStyles.message, messagesAreaStyles.yourMessage]}
          >
            <MyText
              style={[
                messagesAreaStyles.messageText,
                messagesAreaStyles.yourMessageText,
              ]}
            >
              Should i come to the hospital tomorrow?
            </MyText>

            <MyText
              style={[
                messagesAreaStyles.messageTime,
                messagesAreaStyles.yourMessageTime,
              ]}
            >
              08:30
            </MyText>
          </View>

          {/* 👇 other message */}
          <View
            style={[
              messagesAreaStyles.message,
              messagesAreaStyles.otherMessage,
            ]}
          >
            <MyText
              style={[
                messagesAreaStyles.messageText,
                messagesAreaStyles.otherMessageText,
              ]}
            >
              Yes sure, you can come after 2:00 pm.
            </MyText>

            <MyText
              style={[
                messagesAreaStyles.messageTime,
                messagesAreaStyles.otherMessageTime,
              ]}
            >
              08:35
            </MyText>
          </View>

          {/* 👇 your message */}
          <View
            style={[messagesAreaStyles.message, messagesAreaStyles.yourMessage]}
          >
            <MyText
              style={[
                messagesAreaStyles.messageText,
                messagesAreaStyles.yourMessageText,
              ]}
            >
              Sure, thank you!!
            </MyText>

            <MyText
              style={[
                messagesAreaStyles.messageTime,
                messagesAreaStyles.yourMessageTime,
              ]}
            >
              08:40
            </MyText>
          </View>
        </View>
      </View>
    </ContainerView>
  );
}
