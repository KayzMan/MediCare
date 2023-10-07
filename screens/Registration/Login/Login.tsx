import { useGlobalContext } from "../../../context/MyGlobalContext";
import { View } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { loginStyles } from "./login.styles";

// 👇 utilities
import {
  common_icon_props,
  common_text_input_props,
} from "../../../utilities/props.utility";
import { isExtraExtraSmallDevice } from "../../../utilities/styles.utility";

// 👇 components
import ContainerView from "../../../components/Global/Container/ContainerView";
import MyText from "../../../components/Global/MyText/MyText";
import ActionButton from "../../../components/Global/ActionButton/ActionButton";

export default function Login() {
  const { Ubuntu_FontLoaded } = useGlobalContext();
  const iconSize = theme.sizes.icon * 0.8;

  return (
    <ContainerView>
      <View style={loginStyles.container}>
        {/* 👇 top image */}
        <Avatar
          source={require("../../../assets/images/a_doctors_notebook.png")}
          avatarStyle={loginStyles.avatar}
          containerStyle={loginStyles.avatarContainer}
        />

        {/* 👇 text input container */}
        <View style={loginStyles.textInputsContainer}>
          {/* 👇 text input */}
          <View style={loginStyles.textInputWrapper}>
            <MaterialCommunityIcons
              {...common_icon_props}
              name="email"
              size={
                isExtraExtraSmallDevice(theme.sizes.screenWidth)
                  ? iconSize
                  : theme.sizes.icon
              }
            />

            <TextInput
              {...common_text_input_props}
              placeholder="Email Address"
              placeholderTextColor={theme.colors.primary}
              style={loginStyles.textInput}
              contentStyle={[
                loginStyles.textInputContent,
                Ubuntu_FontLoaded && { fontFamily: theme.font.ubuntu },
              ]}
            />
          </View>

          {/* 👇 text input */}
          <View style={loginStyles.textInputWrapper}>
            <MaterialCommunityIcons
              {...common_icon_props}
              name="lock"
              size={
                isExtraExtraSmallDevice(theme.sizes.screenWidth)
                  ? iconSize
                  : theme.sizes.icon
              }
            />

            <TextInput
              {...common_text_input_props}
              placeholder="Password"
              placeholderTextColor={theme.colors.primary}
              style={loginStyles.textInput}
              secureTextEntry={true}
              contentStyle={[
                loginStyles.textInputContent,
                Ubuntu_FontLoaded && { fontFamily: theme.font.ubuntu },
              ]}
            />
          </View>

          {/* 👇 label */}
          <MyText
            style={[loginStyles.formLabel, { alignSelf: "flex-end" }]}
            onPress={() => {}}
          >
            Forgot Password?
          </MyText>

          {/* 👇 action button */}
          <ActionButton onPress={() => {}}>LOG IN</ActionButton>

          {/* 👇 label  */}
          <MyText
            style={[
              loginStyles.formLabel,
              { alignSelf: "center", textDecorationLine: "underline" },
            ]}
            onPress={() => {}}
          >
            I don't have an account.
          </MyText>
        </View>
      </View>
    </ContainerView>
  );
}
