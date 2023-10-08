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
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";

const Drawer = createDrawerNavigator();

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { sidebarStyles } from "./sideBar.styles";

// 👇 utilities
import {
  get_drawer_mainStackOptions,
  common_icon_props,
} from "../../utilities/props.utility";

// 👇 components
import ContainerView from "../../components/Global/Container/ContainerView";
import MyText from "../../components/Global/MyText/MyText";

// 👇 screens
import Home from "../../screens/Home/Home";
import Events from "../../screens/Events/Events";
import Chats from "../../screens/Chats/Chats";
import Profile from "../../screens/Profile/Profile";
import {
  isGreaterThanExtraLarge,
  isLargeDeviceOrBigger,
} from "../../utilities/styles.utility";

export default function SideBar() {
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

            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.jumpTo(drawerItem.route.name);
                }}
                activeOpacity={theme.sizes.touchableOpacity_medium}
                style={[
                  sidebarStyles.drawerItem,
                  focused && {
                    backgroundColor: theme.colors.primary_variableFade(0.15),
                  },
                ]}
                key={`drawerItem-#${descriptors[key].route.key}-#${index}`}
              >
                {drawerItem.options.drawerIcon &&
                  drawerItem.options.drawerIcon({
                    color: color,
                    size: theme.sizes.icon,
                    focused: focused,
                  })}

                <MyText
                  numberOfLines={1}
                  fontWeight={focused ? "ubuntuBold" : "ubuntu"}
                  style={[
                    sidebarStyles.drawerItemLabel,
                    focused && {
                      color: theme.colors.primary,
                    },
                  ]}
                >
                  {drawerItem.options.drawerLabel?.toString() || name}
                </MyText>
              </TouchableOpacity>
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
              source={require("../../assets/images/two_doctors_standing_together.png")}
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
                  fontSize: theme.fonts.headlineMedium.fontSize,
                  color: theme.colors.primary,
                },
              ]}
            >
              Medi
              <MyText
                fontWeight="ubuntuMedium"
                color={theme.colors.pinkAccent_CanCan}
                style={{ fontSize: theme.fonts.headlineMedium.fontSize }}
              >
                Care
              </MyText>
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
        drawerType: isLargeDeviceOrBigger(width) ? "permanent" : "front",
        headerShown: isLargeDeviceOrBigger(width) ? false : true,
      }}
      drawerContent={drawerContent}
    >
      <Drawer.Screen
        name="homeDrawerScreen"
        component={Home}
        options={{
          title: "Home | MediCare",
          headerTitle: "Home",
          drawerLabel: "Home",
          drawerIcon: ({ color, focused, size }) => (
            <MaterialCommunityIcons
              {...common_icon_props}
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="eventsDrawerScreen"
        component={Events}
        options={{
          title: "Schedule & Events | MediCare",
          headerTitle: "Schedule & Events",
          drawerLabel: "Schedule & Events",
          drawerIcon: ({ color, focused, size }) => (
            <MaterialCommunityIcons
              {...common_icon_props}
              name={focused ? "calendar" : "calendar-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="chatsDrawerScreen"
        component={Chats}
        options={{
          title: "Chats | MediCare",
          headerTitle: "Chats",
          drawerLabel: "Chats",
          drawerIcon: ({ color, focused, size }) => (
            <MaterialIcons
              {...common_icon_props}
              name={focused ? "chat-bubble" : "chat-bubble-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="profileDrawerScreen"
        component={Profile}
        options={{
          title: "Profile | MediCare",
          headerTitle: "Profile",
          drawerLabel: "Profile",
          drawerIcon: ({ color, focused, size }) => (
            <MaterialCommunityIcons
              {...common_icon_props}
              name={focused ? "account" : "account-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
