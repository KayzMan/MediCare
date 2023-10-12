import { useGlobalContext } from "../../../context/MyGlobalContext";
import { View, useWindowDimensions } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { TouchableRipple } from "react-native-paper";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { topBarStyles } from "./topBar.styles";

// 👇 utilities
import { common_icon_props } from "../../../utilities/props.utility";
import {
  isGreaterThanExtraLarge,
  isLargeDeviceOrBigger,
  isSmallDeviceOrBigger,
} from "../../../utilities/styles.utility";

// 👇 models
import { mainNavigationProp } from "../../../navigation/MainNavigator/mainNavigator.mode";

export default function TopBar() {
  const { setSelectedChat, selectedDoctor } = useGlobalContext();
  const { width } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<mainNavigationProp>>();

  return (
    <View
      style={[
        topBarStyles.container,
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
      <>
        <TouchableRipple
          style={topBarStyles.iconContainer}
          rippleColor={theme.colors.primary_faded}
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            }
          }}
        >
          <MaterialCommunityIcons
            {...common_icon_props}
            name="chevron-left"
            color={theme.colors.grey700}
          />
        </TouchableRipple>

        <TouchableRipple
          style={topBarStyles.iconContainer}
          rippleColor={theme.colors.primary_faded}
          onPress={() => {
            if (selectedDoctor) {
              setSelectedChat({
                id: selectedDoctor.id,
                avatar: selectedDoctor?.avatar,
                name: selectedDoctor?.name,
              });
              navigation.navigate("chatInboxScreen");
            }
          }}
        >
          <MaterialCommunityIcons
            {...common_icon_props}
            name="chat-outline"
            color={theme.colors.grey700}
          />
        </TouchableRipple>
      </>
    </View>
  );
}
