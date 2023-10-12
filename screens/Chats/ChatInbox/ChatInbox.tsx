import { View, useWindowDimensions } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { chatInboxStyles } from "./chatInbox.styles";

// 👇 components
import ContainerView from "../../../components/Global/Container/ContainerView";
import TopBar from "../../../components/Chats/ChatInbox/TopBar/TopBar";
import MessagesArea from "../../../components/Chats/ChatInbox/MessagesArea/MessagesArea";
import SendMessage from "../../../components/Chats/ChatInbox/SendMessage/SendMessage";

export default function ChatInbox() {
  const { height } = useWindowDimensions();

  return (
    // <ContainerView>
    <View style={[chatInboxStyles.container, { minHeight: height }]}>
      <TopBar />
      <MessagesArea />
      <SendMessage />
    </View>
    // </ContainerView>
  );
}
