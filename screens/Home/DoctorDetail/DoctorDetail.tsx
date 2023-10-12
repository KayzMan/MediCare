import { View } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { doctorDetailStyles } from "./doctorDetail.styles";

// 👇 components
import ContainerView from "../../../components/Global/Container/ContainerView";
import TopBar from "../../../components/DoctorDetail/TopBar/TopBar";
import TopDetail from "../../../components/DoctorDetail/TopDetail/TopDetail";
import DoctorBottom from "../../../components/DoctorDetail/DoctorBottom/DoctorBottom";

export default function DoctorDetail() {
  return (
    <ContainerView>
      <View style={doctorDetailStyles.container}>
        <TopBar />
        <TopDetail />
        <DoctorBottom />
      </View>
    </ContainerView>
  );
}
