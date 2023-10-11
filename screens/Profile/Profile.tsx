import { View } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { profileStyles } from "./profile.styles";

// 👇 components
import ContainerView from "../../components/Global/Container/ContainerView";
import ProfileTop from "../../components/Profile/Top/ProfileTop";
import ProfileBottom from "../../components/Profile/ProfileBottom/ProfileBottom";

export default function Profile() {
  return (
    <ContainerView>
      <View style={profileStyles.container}>
        <ProfileTop />
        <ProfileBottom />
      </View>
    </ContainerView>
  );
}
