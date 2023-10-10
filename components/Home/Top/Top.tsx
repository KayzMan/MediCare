import { View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { homeTopStyles } from "./homeTop.styles";

// 👇 utilities
import {
  common_icon_props,
  common_text_input_props,
} from "../../../utilities/props.utility";

// 👇 components
import MyText from "../../Global/MyText/MyText";

export default function Top() {
  return (
    <View style={homeTopStyles.container}>
      {/* 👇 top part */}
      <View style={homeTopStyles.top}>
        {/* 👇 top left */}
        <View style={homeTopStyles.topLeft}>
          <MyText style={homeTopStyles.topLeftText} fontWeight="ubuntuLight">
            Current Location
          </MyText>

          <View style={homeTopStyles.topLeftLocationWrapper}>
            <MaterialCommunityIcons
              {...common_icon_props}
              name="map-marker"
              size={theme.sizes.icon * 0.6}
            />

            <MyText
              fontWeight="ubuntuMedium"
              style={homeTopStyles.topLeftLocationWrapperText}
            >
              Budiriro 1, Harare
            </MyText>
          </View>
        </View>

        {/* 👇 top right */}
        <View style={homeTopStyles.topRightIcon}>
          <MaterialCommunityIcons
            {...common_icon_props}
            name="bell-badge"
            size={theme.sizes.icon * 0.8}
          />
        </View>
      </View>

      {/* 👇 search bar */}
      <View style={homeTopStyles.textInputWrapper}>
        <MaterialCommunityIcons {...common_icon_props} name="magnify" />

        <TextInput
          {...common_text_input_props}
          placeholder="Search a doctor or health issue"
          placeholderTextColor={theme.colors.grey600}
          style={homeTopStyles.textInput}
          contentStyle={homeTopStyles.textInputContent}
        />
      </View>
    </View>
  );
}
