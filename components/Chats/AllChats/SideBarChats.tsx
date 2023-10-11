import React from "react";
import { ScrollView, View } from "react-native";
import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { sidebarStyles } from "../../../navigation/SideBar/sideBar.styles";
import { allChatsStyles } from "./allChats.styles";

// 👇 utilities
import { get_drawer_mainStackOptions } from "../../../utilities/props.utility";
import { common_iOS_web_shadow } from "../../../utilities/styles.utility";

// 👇 controllers
import { loadAllChats } from "./allChats.controller";

// 👇 components
import ContainerView from "../../Global/Container/ContainerView";
import MyText from "../../Global/MyText/MyText";
import ChatsTop from "../ChatsTop/ChatsTop";

// 👇 screens
import ChatScreen from "../ChatScreen/ChatScreen";
import ChatItem from "./ChatItem";

export default function SideBarChats() {
  // 👇 custom drawer content
  const drawerContent = ({
    descriptors,
    navigation,
    state,
  }: DrawerContentComponentProps) => {
    let keys = Object.keys(descriptors);

    // 👇 render the drawer items
    const renderDrawerItems = (
      start?: number,
      end?: number,
      sectionTitle?: string
    ) => {
      return (
        <View style={sidebarStyles.drawerItemSection}>
          {keys.slice(start, end).map((key, index) => {
            let drawerItem = descriptors[key];
            const { isFocused } = drawerItem.navigation;
            let focused = isFocused();
            const { name } = drawerItem.route;
            let color = focused ? theme.colors.primary : theme.colors.grey700;

            let item = loadAllChats()[index];

            return (
              <>
                <View style={{ marginBottom: theme.sizes.appMargin }} />
                <ChatItem {...item} isOnSideBar />
              </>
            );
          })}
        </View>
      );
    };

    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: theme.colors.white,
          width: theme.sizes.extraSmallDevice,
          ...common_iOS_web_shadow,
          elevation: 5,
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <ContainerView style={sidebarStyles.drawerContainer}>
          <View
            style={[
              {
                marginBottom: theme.sizes.appMargin * 0,
              },
            ]}
          >
            <ChatsTop optionalWidth={theme.sizes.extraSmallDevice} />
          </View>

          {renderDrawerItems()}
        </ContainerView>
      </ScrollView>
    );
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        ...get_drawer_mainStackOptions(),
        headerShown: false,
        drawerType: "permanent",
      }}
      defaultStatus="open"
      drawerContent={drawerContent}
    >
      {loadAllChats().map((_item, index) => {
        return (
          <Drawer.Screen
            name={`chatScreenDrawerScreen-#${index}`}
            component={ChatScreen}
          />
        );
      })}
    </Drawer.Navigator>
  );
}
