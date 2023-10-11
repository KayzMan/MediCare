import { View } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { allChatsStyles } from "./allChats.styles";

// 👇 components
import MyText from "../../Global/MyText/MyText";

// 👇 models
import { iChatItem } from "./allChats.model";

export default function ChatItem({
  avatar,
  lastMessageTime,
  message,
  name,
  unReadMessages,
  isOnSideBar,
}: iChatItem) {
  return (
    <View
      style={[
        allChatsStyles.chatItem,
        isOnSideBar && { marginVertical: theme.sizes.appMargin * 0 },
      ]}
    >
      {/* 👇 left */}
      <View style={allChatsStyles.chatItemLeft}>
        <View style={allChatsStyles.chatItemAvatarWrapper}>
          <Avatar
            source={avatar}
            size={isOnSideBar ? "medium" : "large"}
            rounded
          />
          <View style={allChatsStyles.chatItemAvatarBadge} />
        </View>

        <View style={allChatsStyles.chatItemLeftDetail}>
          <MyText fontWeight="ubuntuMedium" style={allChatsStyles.chatItemName}>
            {name || "name"}
          </MyText>
          <MyText
            fontWeight={
              unReadMessages !== undefined ? "ubuntuMedium" : "ubuntu"
            }
            style={[
              allChatsStyles.chatItemMessage,
              unReadMessages !== undefined && { color: theme.colors.black },
            ]}
          >
            {message || "message"}
          </MyText>
        </View>
      </View>

      {/* 👇 right */}
      <View style={allChatsStyles.chatItemRight}>
        <MyText style={allChatsStyles.chatItemTime}>
          {lastMessageTime || "00:00"}
        </MyText>

        {unReadMessages && (
          <View style={allChatsStyles.chatItemLastMessagesWrapper}>
            <MyText style={allChatsStyles.chatItemLastMessagesCount}>
              {unReadMessages || "0"}
            </MyText>
          </View>
        )}
      </View>
    </View>
  );
}
