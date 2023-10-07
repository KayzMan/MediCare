import { View } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { onBoardingStyles } from "./onBoarding.styles";

// 👇 components
import ContainerView from "../../components/Global/Container/ContainerView";
import MyText from "../../components/Global/MyText/MyText";
import { Button } from "react-native-paper";

export default function OnBoarding() {
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
            <Button
              style={[
                onBoardingStyles.button,
                { backgroundColor: theme.colors.white },
              ]}
              labelStyle={[
                onBoardingStyles.buttonText,
                { color: theme.colors.primary },
              ]}
            >
              SIGN UP
            </Button>
            <Button
              style={onBoardingStyles.button}
              labelStyle={onBoardingStyles.buttonText}
            >
              LOG IN
            </Button>
          </View>
        </View>
      </View>
    </ContainerView>
  );
}
