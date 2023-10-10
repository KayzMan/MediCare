import React, { useCallback } from "react";
import { TouchableOpacity, View, useWindowDimensions } from "react-native";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { bottomTabsStyles } from "./bottomTabs.styles";

// 👇 utilities
import { common_icon_props } from "../../utilities/props.utility";
import { isMediumDeviceOrBigger } from "../../utilities/styles.utility";

// 👇 screens
import Home from "../../screens/Home/Home";
import Events from "../../screens/Events/Events";
import Chats from "../../screens/Chats/Chats";
import Profile from "../../screens/Profile/Profile";
import SideBar from "../SideBar/SideBar";

export default function BottomTabs() {
  const iconSize = theme.sizes.icon * 1.1;
  const { width } = useWindowDimensions();

  // 👇 get tab icon based on passed in index
  const getTabIcon = useCallback((index: number, focused: boolean) => {
    let name: any;

    switch (index) {
      case 0:
        name = focused ? "home" : "home-outline";
        break;
      case 1:
        name = focused ? "calendar" : "calendar-outline";
        break;
      case 2:
        return (
          <MaterialIcons
            {...common_icon_props}
            name={focused ? "chat-bubble" : "chat-bubble-outline"}
            size={iconSize}
            style={[
              bottomTabsStyles.tabIcon,
              focused && { backgroundColor: theme.colors.primary_faded },
            ]}
          />
        );
      case 3:
        name = focused ? "account" : "account-outline";
        break;
      default:
        name = "home";
    }

    return (
      <MaterialCommunityIcons
        {...common_icon_props}
        name={name}
        size={iconSize}
        style={[
          bottomTabsStyles.tabIcon,
          focused && { backgroundColor: theme.colors.primary_faded },
        ]}
      />
    );
  }, []);

  // 👇 custom tab bar
  const tabBar = useCallback((props: MaterialTopTabBarProps) => {
    let { descriptors, jumpTo, layout, navigation, position, state } = props;

    let keys: string[] = Object.keys(descriptors);

    // 👇 loop through the descriptors and create the tabs
    const createTabItems = () => {
      return keys.map((key, _index) => {
        let tabItem = descriptors[key];
        let isFocused = tabItem.navigation.isFocused();

        return (
          // 👇 tab item
          <TouchableOpacity
            onPress={() => {
              jumpTo(tabItem.route.key);
            }}
            activeOpacity={theme.sizes.touchableOpacity_medium}
            style={[bottomTabsStyles.tabItem]}
            key={`tabItem-#${_index}-#${tabItem.route.key}`}
          >
            {getTabIcon(_index, isFocused)}
          </TouchableOpacity>
        );
      });
    };

    return <View style={bottomTabsStyles.tabBar}>{createTabItems()}</View>;
  }, []);

  return isMediumDeviceOrBigger(width) ? (
    <SideBar />
  ) : (
    <Tab.Navigator tabBar={tabBar} tabBarPosition="bottom">
      <Tab.Screen
        name="homeTopTabScreen"
        component={Home}
        options={{
          title: "Home | MediCare",
        }}
      />
      <Tab.Screen
        name="eventsTopTabScreen"
        component={Events}
        options={{
          title: "Schedule | MediCare",
        }}
      />
      <Tab.Screen
        name="chatsTopTabScreen"
        component={Chats}
        options={{
          title: "Chats | MediCare",
        }}
      />
      <Tab.Screen
        name="profileTopTabScreen"
        component={Profile}
        options={{
          title: "Profile | MediCare",
        }}
      />
    </Tab.Navigator>
  );
}
