import { View } from "react-native";
import React, { useCallback } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Moment from "moment";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { allEvents } from "./allEvents.styles";

// 👇 models
import { iEventItem } from "./allEvents.model";

// 👇 utilities
import { common_icon_props } from "../../../utilities/props.utility";

// 👇 components
import MyText from "../../Global/MyText/MyText";

export default function EventItem({
  title,
  completed,
  date,
  doctorName,
}: iEventItem) {
  const day = new Date(date).getDate().toString();
  let monthNumber: number = new Date(date).getMonth();
  const month: string = Moment.monthsShort()[monthNumber];

  const getTime = useCallback(() => {
    const timeString = new Date(date).toTimeString().slice(0, 5);
    const [hour, minute] = timeString.split(":");

    let extraText =
      Number(hour) > 12
        ? "PM"
        : Number(hour) === 12
        ? "noon"
        : Number(hour) === 0
        ? "midnight"
        : "AM";

    let newHour = (Number(hour) % 12).toString().padStart(2, "0");
    let newMinute = minute.padStart(2, "0");

    return newHour + ":" + newMinute + " " + extraText;
  }, []);

  return (
    <View style={allEvents.eventItem}>
      {/* 👇 left */}
      <View style={allEvents.eventItemLeft}>
        {/* 👇 date */}
        <View
          style={[
            allEvents.eventItemLeftDateWrapper,
            !completed && {
              backgroundColor: theme.colors.primary_faded,
            },
          ]}
        >
          <MyText
            fontWeight="ubuntuBold"
            style={allEvents.eventItemLeftDateDay}
          >
            {day}
          </MyText>
          <MyText style={allEvents.eventItemLeftDateMonth}>{month}</MyText>
        </View>

        {/* 👇 detail */}
        <View style={allEvents.eventItemLeftDetailWrapper}>
          <MyText
            fontWeight="ubuntuMedium"
            style={allEvents.eventItemLeftDetailTitle}
          >
            {title}
          </MyText>
          <MyText style={allEvents.eventItemLeftDetailTime}>{getTime()}</MyText>
          <MyText style={allEvents.eventItemLeftDetailDoctorName}>
            {doctorName}
          </MyText>
        </View>
      </View>

      {/* 👇 right */}
      <View style={allEvents.iconContainer}>
        <MaterialCommunityIcons
          {...common_icon_props}
          color={theme.colors.grey700}
          size={theme.sizes.icon * 0.8}
          name={completed ? "phone-outline" : "video-outline"}
        />
      </View>
    </View>
  );
}
