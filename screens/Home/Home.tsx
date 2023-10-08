import { View } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { homeStyles } from "./home.styles";

// 👇 components
import ContainerView from "../../components/Global/Container/ContainerView";
import Top from "../../components/Home/Top/Top";
import UpcomingSchedule from "../../components/Home/Upcoming Schedule/UpcomingSchedule";
import DoctorCategories from "../../components/Home/Doctor_Categories/DoctorCategories";
import HomeDoctors from "../../components/Home/Home Doctors/HomeDoctors";

export default function Home() {
  return (
    <ContainerView>
      <View style={homeStyles.container}>
        <Top />
        <UpcomingSchedule />
        <DoctorCategories />
        <HomeDoctors />
      </View>
    </ContainerView>
  );
}
