import { View, useWindowDimensions } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { makeAppointmentStyles } from "./makeAppointment.styles";

// 👇 utilities
import { isExtraExtraSmallDevice } from "../../../utilities/styles.utility";

// 👇 components
import TopBar from "../../../components/MakeAppointment/TopBar/TopBar";
import AppointmentDates from "../../../components/MakeAppointment/AppointmentDates/AppointmentDates";
import OpenSlots from "../../../components/MakeAppointment/OpenSlots/OpenSlots";
import ActionButton from "../../../components/Global/ActionButton/ActionButton";
import ContainerView from "../../../components/Global/Container/ContainerView";

export default function MakeAppointment() {
  const { width, height } = useWindowDimensions();

  return (
    <ContainerView>
      <View style={[makeAppointmentStyles.container, { minHeight: height }]}>
        <ActionButton
          onPress={() => {}}
          style={{
            position: "absolute",
            bottom: 20,
            left: isExtraExtraSmallDevice(width) ? 10 : 20,
            right: isExtraExtraSmallDevice(width) ? 10 : 20,
          }}
        >
          Confirm Appointment
        </ActionButton>

        <TopBar />
        <AppointmentDates />
        <OpenSlots />
      </View>
    </ContainerView>
  );
}
