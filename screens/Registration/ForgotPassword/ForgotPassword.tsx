import { useGlobalContext } from "../../../context/MyGlobalContext";
import { View } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { NavigationProp } from "@react-navigation/native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { forgotPasswordStyles } from "./forgotPassword.styles";

// 👇 utilities
import {
  common_icon_props,
  common_text_input_props,
} from "../../../utilities/props.utility";
import { isExtraExtraSmallDevice } from "../../../utilities/styles.utility";

// 👇 models
import { mainNavigationProp } from "../../../navigation/MainNavigator/mainNavigator.mode";

// 👇 components
import ContainerView from "../../../components/Global/Container/ContainerView";
import MyText from "../../../components/Global/MyText/MyText";
import ActionButton from "../../../components/Global/ActionButton/ActionButton";

export default function ForgotPassword({
  navigation,
}: {
  navigation: NavigationProp<mainNavigationProp>;
}) {
  const { Ubuntu_FontLoaded } = useGlobalContext();
  const iconSize = theme.sizes.icon * 0.8;

  return (
    <ContainerView>
      <View style={forgotPasswordStyles.container}>
        {/* 👇 top image */}
        <Avatar
          source={require("../../../assets/images/black_girl_with_a_laptop.png")}
          avatarStyle={forgotPasswordStyles.avatar}
          containerStyle={forgotPasswordStyles.avatarContainer}
        />

        {/* 👇 text input container */}
        <View style={forgotPasswordStyles.textInputsContainer}>
          {/* 👇 text input */}
          <View style={forgotPasswordStyles.textInputWrapper}>
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
              style={forgotPasswordStyles.textInput}
              contentStyle={[
                forgotPasswordStyles.textInputContent,
                Ubuntu_FontLoaded && { fontFamily: theme.font.ubuntu },
              ]}
            />
          </View>
        </View>

        {/* 👇 action button */}
        <ActionButton onPress={() => {}}>Forgot Password</ActionButton>

        {/* 👇 label  */}
        <MyText
          style={[
            forgotPasswordStyles.formLabel,
            { alignSelf: "center", textDecorationLine: "underline" },
          ]}
          onPress={() => {
            navigation.navigate("signUpScreen");
          }}
        >
          I don't have an account.
        </MyText>
      </View>
    </ContainerView>
  );
}
