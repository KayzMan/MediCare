import React from "react";
import { View } from "react-native";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { chatStyles } from "./chats.styles";

// 👇 components
import ContainerView from "../../components/Global/Container/ContainerView";
import ChatsTop from "../../components/Chats/ChatsTop/ChatsTop";
import AllChats from "../../components/Chats/AllChats/AllChats";

export default function Chats() {
  return (
    <ContainerView>
      <View style={chatStyles.container}>
        <ChatsTop />
        <AllChats />
      </View>
    </ContainerView>
  );
}
