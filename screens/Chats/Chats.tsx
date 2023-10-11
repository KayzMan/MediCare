import React from "react";
import { View, useWindowDimensions } from "react-native";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { chatStyles } from "./chats.styles";

// 👇 utilities
import { isMediumDeviceOrBigger } from "../../utilities/styles.utility";

// 👇 components
import ContainerView from "../../components/Global/Container/ContainerView";
import ChatsTop from "../../components/Chats/ChatsTop/ChatsTop";
import AllChats from "../../components/Chats/AllChats/AllChats";

// 👇 screens
import SideBarChats from "../../components/Chats/AllChats/SideBarChats";

export default function Chats() {
  const { width } = useWindowDimensions();

  return isMediumDeviceOrBigger(width) ? (
    <SideBarChats />
  ) : (
    <ContainerView>
      <View style={chatStyles.container}>
        <ChatsTop />
        <AllChats />
      </View>
    </ContainerView>
  );
}
