import { View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { TouchableRipple } from "react-native-paper";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { profileBottomStyles } from "./profileBottom.styles";

// 👇 utilities
import { common_icon_props } from "../../../utilities/props.utility";

// 👇 models
import { iProfileBottom } from "./profileBottom.model";
import { mainNavigationProp } from "../../../navigation/MainNavigator/mainNavigator.mode";

// 👇 components
import MyText from "../../Global/MyText/MyText";

export default function ProfileBottomItem({
  icon,
  iconSource,
  title,
}: iProfileBottom) {
  const navigation = useNavigation<NavigationProp<mainNavigationProp>>();

  return (
    <TouchableRipple
      style={profileBottomStyles.bottomItem}
      rippleColor={theme.colors.ghostWhite}
      onPress={() => {
        if (icon === "logout") {
          navigation.navigate("onBoardingScreen");
        }
      }}
    >
      <>
        {/* 👇 left */}
        <View style={profileBottomStyles.bottomItemLeft}>
          {/* 👇 icon */}
          <View style={profileBottomStyles.bottomItemIconWrapper}>
            {iconSource === "antDesign" && (
              <AntDesign
                {...common_icon_props}
                name={icon}
                size={theme.sizes.icon * 0.75}
              />
            )}

            {iconSource === "materialCommunity" && (
              <MaterialCommunityIcons
                {...common_icon_props}
                name={icon}
                size={theme.sizes.icon * 0.75}
              />
            )}
          </View>

          {/* 👇 title */}
          <MyText style={profileBottomStyles.bottomItemTitle}>
            {title || "title"}
          </MyText>
        </View>

        {/* 👇 right icon */}
        <MaterialCommunityIcons {...common_icon_props} name="chevron-right" />
      </>
    </TouchableRipple>
  );
}
