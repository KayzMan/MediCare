import { View } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { homeDoctorStyles } from "./homeDoctors.styles";

// 👇 models
import { HomeDoctorItem as iHomeDoctorItem } from "./homeDoctors.model";

// 👇 components
import MyText from "../../Global/MyText/MyText";

export default function HomeDoctorItem({
  name,
  avatar,
  profession,
  rating,
  ratingText,
}: iHomeDoctorItem) {
  return (
    <View style={homeDoctorStyles.doctorItem}>
      {/* 👇 left */}
      <Avatar source={avatar} size={"large"} containerStyle={{}} />
    </View>
  );
}
