import { View, useWindowDimensions } from "react-native";
import React from "react";
import { Avatar, AirbnbRating } from "react-native-elements";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { homeDoctorStyles } from "./homeDoctors.styles";

// 👇 models
import { HomeDoctorItem as iHomeDoctorItem } from "./homeDoctors.model";

// 👇 utilities
import { isLargeDeviceOrBigger } from "../../../utilities/styles.utility";

// 👇 components
import MyText from "../../Global/MyText/MyText";

export default function HomeDoctorItem({
  name,
  avatar,
  profession,
  ratingText,
  rating,
  id,
}: iHomeDoctorItem) {
  const { width } = useWindowDimensions();

  return (
    <View
      style={[
        homeDoctorStyles.doctorItem,
        isLargeDeviceOrBigger(width) && {
          flex: 1,
          marginLeft: id % 2 === 0 ? theme.sizes.appMargin : 0,
        },
      ]}
    >
      {/* 👇 left */}
      <Avatar
        source={avatar}
        size={"large"}
        avatarStyle={{ borderRadius: theme.sizes.radius }}
        // containerStyle={{ width: 80, height: 80 }}
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
            defaultRating={rating}
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
