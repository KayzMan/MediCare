import { useGlobalContext } from "../../../context/MyGlobalContext";
import { View } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Animated, { Layout, LightSpeedInLeft } from "react-native-reanimated";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { allChatsStyles } from "./allChats.styles";

// 👇 components
import MyText from "../../Global/MyText/MyText";

// 👇 models
import { iChatItem } from "./allChats.model";
import { mainNavigationProp } from "../../../navigation/MainNavigator/mainNavigator.mode";

export default function ChatItem({
  avatar,
  lastMessageTime,
  message,
  name,
  unReadMessages,
  isOnSideBar,
  id,
}: iChatItem) {
  const navigation = useNavigation<NavigationProp<mainNavigationProp>>();
  const { setSelectedChat } = useGlobalContext();

  return (
    <Animated.View
      style={[allChatsStyles.chatItem]}
      layout={Layout.delay(100)}
      entering={LightSpeedInLeft.delay(100 * id)}
      onTouchEnd={() => {
        setSelectedChat({ id, name, avatar });
        navigation.navigate("chatInboxScreen");
      }}
    >
      <>
        {/* 👇 left */}
        <View style={allChatsStyles.chatItemLeft}>
          <View style={allChatsStyles.chatItemAvatarWrapper}>
            <Avatar
              source={avatar}
              size={isOnSideBar ? "medium" : "medium"}
              rounded
            />
            <View style={allChatsStyles.chatItemAvatarBadge} />
          </View>

          <View style={allChatsStyles.chatItemLeftDetail}>
            <MyText
              fontWeight="ubuntuMedium"
              style={allChatsStyles.chatItemName}
            >
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
      </>
    </Animated.View>
  );
}
