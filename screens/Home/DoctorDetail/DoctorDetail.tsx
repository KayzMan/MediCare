import { View, useWindowDimensions } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { doctorDetailStyles } from "./doctorDetail.styles";

// utilities
import {
  isGreaterThanExtraLarge,
  isLargeDeviceOrBigger,
  isSmallDeviceOrBigger,
} from "../../../utilities/styles.utility";

// 👇 models
import { mainNavigationProp } from "../../../navigation/MainNavigator/mainNavigator.mode";

// 👇 components
import ContainerView from "../../../components/Global/Container/ContainerView";
import TopBar from "../../../components/DoctorDetail/TopBar/TopBar";
import TopDetail from "../../../components/DoctorDetail/TopDetail/TopDetail";
import DoctorBottom from "../../../components/DoctorDetail/DoctorBottom/DoctorBottom";
import ActionButton from "../../../components/Global/ActionButton/ActionButton";

export default function DoctorDetail({
  navigation,
}: {
  navigation: NavigationProp<mainNavigationProp>;
}) {
  const { width } = useWindowDimensions();

  return (
    <ContainerView>
      <View style={doctorDetailStyles.container}>
        <TopBar />
        <TopDetail />
        <DoctorBottom />

        <ActionButton
          onPress={() => {
            navigation.navigate("makeAppointmentScreen");
          }}
          style={{
            maxWidth: theme.sizes.smallDevice,
            minWidth: isSmallDeviceOrBigger(width)
              ? isGreaterThanExtraLarge(width)
                ? theme.sizes.extraSmallDevice
                : isLargeDeviceOrBigger(width)
                ? theme.sizes.extraSmallDevice
                : theme.sizes.smallDevice - 50
              : 0,
            marginHorizontal: isSmallDeviceOrBigger(width) ? "auto" : 0,
          }}
        >
          Make Appointment
        </ActionButton>
      </View>
    </ContainerView>
  );
}
