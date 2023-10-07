import { useGlobalContext } from "../../../context/MyGlobalContext";
import { Platform, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { NavigationProp } from "@react-navigation/native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { signUpStyles } from "./signUp.styles";

// 👇 utilities
import {
  common_icon_props,
  common_text_input_props,
} from "../../../utilities/props.utility";
import {
  isExtraExtraSmallDevice,
  isMediumDeviceOrBigger,
} from "../../../utilities/styles.utility";

// 👇 models
import { mainNavigationProp } from "../../../navigation/MainNavigator/mainNavigator.mode";

// 👇 components
import ContainerView from "../../../components/Global/Container/ContainerView";
import MyText from "../../../components/Global/MyText/MyText";
import ActionButton from "../../../components/Global/ActionButton/ActionButton";

export default function SignUp({
  navigation,
}: {
  navigation: NavigationProp<mainNavigationProp>;
}) {
  const { Ubuntu_FontLoaded } = useGlobalContext();
  const iconSize = theme.sizes.icon * 0.8;

  return (
    <ContainerView>
      <View style={signUpStyles.container}>
        {/* 👇 top image */}
        <Avatar
          source={require("../../../assets/images/black_doctor_writing_something.png")}
          avatarStyle={signUpStyles.avatar}
          containerStyle={signUpStyles.avatarContainer}
        />

        {/* 👇 text input container */}
        <View style={signUpStyles.textInputsContainer}>
          {/* 👇 text input */}
          <View style={signUpStyles.textInputWrapper}>
            <MaterialCommunityIcons
              {...common_icon_props}
              name="account-outline"
              size={
                isExtraExtraSmallDevice(theme.sizes.screenWidth)
                  ? iconSize
                  : theme.sizes.icon
              }
            />

            <TextInput
              {...common_text_input_props}
              placeholder="Name "
              placeholderTextColor={theme.colors.primary}
              style={signUpStyles.textInput}
              contentStyle={[
                signUpStyles.textInputContent,
                Ubuntu_FontLoaded && { fontFamily: theme.font.ubuntu },
              ]}
            />
          </View>

          {/* 👇 text input */}
          <View style={signUpStyles.textInputWrapper}>
            <MaterialCommunityIcons
              {...common_icon_props}
              name="email-outline"
              size={
                isExtraExtraSmallDevice(theme.sizes.screenWidth)
                  ? iconSize
                  : theme.sizes.icon
              }
            />

            <TextInput
              {...common_text_input_props}
              placeholder="Email Address "
              placeholderTextColor={theme.colors.primary}
              style={signUpStyles.textInput}
              contentStyle={[
                signUpStyles.textInputContent,
                Ubuntu_FontLoaded && { fontFamily: theme.font.ubuntu },
              ]}
            />
          </View>

          {/* 👇 text input */}
          <View style={signUpStyles.textInputWrapper}>
            <MaterialCommunityIcons
              {...common_icon_props}
              name="lock-outline"
              size={
                isExtraExtraSmallDevice(theme.sizes.screenWidth)
                  ? iconSize
                  : theme.sizes.icon
              }
            />

            <TextInput
              {...common_text_input_props}
              placeholder="Password "
              placeholderTextColor={theme.colors.primary}
              style={signUpStyles.textInput}
              secureTextEntry={true}
              contentStyle={[
                signUpStyles.textInputContent,
                Ubuntu_FontLoaded && { fontFamily: theme.font.ubuntu },
              ]}
            />
          </View>
        </View>

        {/* 👇 label */}
        <MyText
          style={[signUpStyles.formLabel, { alignSelf: "flex-end" }]}
          onPress={() => {
            navigation.navigate("forgotPasswordScreen");
          }}
        >
          Forgot Password?
        </MyText>

        {/* 👇 action button */}
        <ActionButton
          onPress={() => {
            if (isMediumDeviceOrBigger(theme.sizes.screenWidth)) {
              navigation.navigate("sideBarScreen");
            } else {
              navigation.navigate("bottomTabsScreen");
            }
          }}
        >
          Create an Account
        </ActionButton>

        {/* 👇 label  */}
        <MyText
          style={[
            signUpStyles.formLabel,
            { alignSelf: "center", textDecorationLine: "underline" },
          ]}
          onPress={() => {
            navigation.navigate("loginScreen");
          }}
        >
          I already have an account.
        </MyText>
      </View>
    </ContainerView>
  );
}
