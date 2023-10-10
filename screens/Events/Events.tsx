import { View } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { eventsStyles } from "./events.styles";

// 👇 components
import ContainerView from "../../components/Global/Container/ContainerView";
import MyText from "../../components/Global/MyText/MyText";
import TopBar from "../../components/Events/TopBar/TopBar";
import TopImage from "../../components/Events/TopImage/TopImage";
import AllEvents from "../../components/Events/AllEvents/AllEvents";

export default function Events() {
  return (
    <ContainerView>
      <View style={[eventsStyles.container]}>
        <TopBar />
        <TopImage />
        <AllEvents />
      </View>
    </ContainerView>
  );
}
