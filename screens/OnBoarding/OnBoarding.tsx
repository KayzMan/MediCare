import { View } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { NavigationProp } from "@react-navigation/native";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { onBoardingStyles } from "./onBoarding.styles";

// 👇 models
import { mainNavigationProp } from "../../navigation/MainNavigator/mainNavigator.mode";

// 👇 components
import ContainerView from "../../components/Global/Container/ContainerView";
import MyText from "../../components/Global/MyText/MyText";
import ActionButton from "../../components/Global/ActionButton/ActionButton";

export default function OnBoarding({
  navigation,
}: {
  navigation: NavigationProp<mainNavigationProp>;
}) {
  return (
    <ContainerView>
      <View style={onBoardingStyles.container}>
        <MyText style={onBoardingStyles.title}>Welcome to</MyText>
        <MyText style={onBoardingStyles.title}>MediCare</MyText>

        <Avatar
          source={require("../../assets/images/smart_black_doctor_siting_on_his_laptop.png")}
          avatarStyle={onBoardingStyles.avatar}
          containerStyle={[onBoardingStyles.avatarContainer]}
        />

        <View style={onBoardingStyles.buttonsWrapper}>
          <View style={onBoardingStyles.buttonsContainer}>
            <ActionButton
              onPress={() => {
                navigation.navigate("signUpScreen");
              }}
              rippleColor={theme.colors.primary_faded}
              style={[
                { backgroundColor: theme.colors.white },
                onBoardingStyles.button,
              ]}
              labelStyle={{ color: theme.colors.primary }}
            >
              SIGN UP
            </ActionButton>

            <ActionButton
              onPress={() => {
                navigation.navigate("loginScreen");
              }}
              style={[onBoardingStyles.button]}
              rippleColor={theme.colors.primary_faded}
            >
              LOG IN
            </ActionButton>
          </View>
        </View>
      </View>
    </ContainerView>
  );
}
