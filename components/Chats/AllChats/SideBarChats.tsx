import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { Avatar } from "react-native-elements";

const Drawer = createDrawerNavigator();

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { sidebarStyles } from "../../../navigation/SideBar/sideBar.styles";
import { allChatsStyles } from "./allChats.styles";

// 👇 utilities
import { get_drawer_mainStackOptions } from "../../../utilities/props.utility";

// 👇 controllers
import { loadAllChats } from "./allChats.controller";

// 👇 components
import ContainerView from "../../Global/Container/ContainerView";
import MyText from "../../Global/MyText/MyText";

// 👇 screens
import SideBarChatArea from "./SideBarChatArea/SideBarChatArea";
import ChatItem from "./ChatItem";

export default function SideBarChats() {
  const { width } = useWindowDimensions();

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
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <ContainerView style={sidebarStyles.drawerContainer}>
          <View
            style={[
              {
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                marginBottom: theme.sizes.appMargin,
              },
            ]}
          >
            <Avatar
              source={require("../../../assets/images/a_mobile_phone_chatting_screen.png")}
              size={"xlarge"}
              avatarStyle={sidebarStyles.topAvatar}
              containerStyle={sidebarStyles.topAvatarContainer}
            />

            <MyText
              numberOfLines={1}
              fontWeight="ubuntuMedium"
              style={[
                sidebarStyles.drawerItemLabel,
                {
                  fontSize: theme.sizes.largeFontSize * 1.2,
                },
              ]}
            >
              Chats
            </MyText>
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
            name={`sideBarChatAreDrawerScreen-#${index}`}
            component={SideBarChatArea}
          />
        );
      })}
    </Drawer.Navigator>
  );
}
