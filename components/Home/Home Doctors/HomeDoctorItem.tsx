import { View, useWindowDimensions } from "react-native";
import React from "react";
import { Avatar, AirbnbRating } from "react-native-elements";

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
      <Avatar
        source={avatar}
        size={"large"}
        avatarStyle={{ borderRadius: theme.sizes.radius * 2 }}
        containerStyle={{ width: 90, height: 90 }}
      />

      {/* 👇 right detail */}
      <View style={homeDoctorStyles.rightDetail}>
        <View style={homeDoctorStyles.rightDetailTop}>
          <MyText
            fontWeight="ubuntuMedium"
            style={homeDoctorStyles.rightDetailTopName}
          >
            {name || "name"}
          </MyText>
          <MyText style={homeDoctorStyles.rightDetailTopProfession}>
            {profession || "profession"}
          </MyText>
        </View>

        {/* 👇 rating */}
        <View style={homeDoctorStyles.rightDetailBottom}>
          {/* 👇 rating bar */}
          <AirbnbRating
            count={5}
            defaultRating={5}
            size={12}
            showRating={false}
          />

          {/* spacer */}
          <View style={{ marginHorizontal: theme.sizes.appMargin * 0.25 }} />

          <MyText
            style={homeDoctorStyles.ratingDetailBottomRatingText}
            numberOfLines={1}
          >
            {ratingText || "rating"}
          </MyText>
        </View>
      </View>
    </View>
  );
}
