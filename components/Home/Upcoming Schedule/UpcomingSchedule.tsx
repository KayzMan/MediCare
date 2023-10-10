import { View, useWindowDimensions } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { upcomingScheduleStyles } from "./upcomingSchedule.styles";

// 👇 utilities
import { common_icon_props } from "../../../utilities/props.utility";
import {
  isGreaterThanExtraLarge,
  isLargeDeviceOrBigger,
  isSmallDeviceOrBigger,
} from "../../../utilities/styles.utility";

// 👇 components
import MyText from "../../Global/MyText/MyText";

export default function UpcomingSchedule() {
  const { width } = useWindowDimensions();

  return (
    <View
      style={[
        upcomingScheduleStyles.container,
        {
          marginTop: isLargeDeviceOrBigger(width)
            ? theme.sizes.appMargin * 2
            : 0,
          maxWidth: theme.sizes.smallDevice,
          minWidth: isSmallDeviceOrBigger(width)
            ? isGreaterThanExtraLarge(width)
              ? theme.sizes.mediumDevice
              : isLargeDeviceOrBigger(width)
              ? theme.sizes.smallDevice
              : theme.sizes.smallDevice - 50
            : 0,
          marginHorizontal: isSmallDeviceOrBigger(width) ? "auto" : 0,
        },
      ]}
    >
      {/* 👇 top bar */}
      <View style={upcomingScheduleStyles.topBar}>
        <MyText
          style={upcomingScheduleStyles.topBarBigText}
          fontWeight="ubuntuMedium"
        >
          Upcoming Schedule
        </MyText>

        <MyText
          // fontWeight="ubuntuLight"
          style={upcomingScheduleStyles.topBarSmallText}
        >
          See all
        </MyText>
      </View>

      {/* 👇 schedule box */}
      <View style={upcomingScheduleStyles.scheduleBox}>
        <View style={upcomingScheduleStyles.scheduleBoxTop}>
          <View style={upcomingScheduleStyles.scheduleBoxTopLeft}>
            <Avatar
              source={require("../../../assets/images/avatars/avatar2.jpg")}
              size={"medium"}
              avatarStyle={{ borderRadius: theme.sizes.radius }}
            />

            <View style={upcomingScheduleStyles.scheduleBoxTopLeftDetail}>
              <MyText
                style={upcomingScheduleStyles.scheduleBoxTopLeftDetailName}
                fontWeight="ubuntuMedium"
              >
                Dr. Ngoni Katsidzira
              </MyText>

              <MyText
                style={
                  upcomingScheduleStyles.scheduleBoxTopLeftDetailProfession
                }
              >
                Dermatologist
              </MyText>
            </View>
          </View>

          <View style={upcomingScheduleStyles.scheduleBoxTopRight}>
            <MaterialCommunityIcons
              {...common_icon_props}
              name="video-outline"
              size={theme.sizes.icon * 0.7}
            />
          </View>
        </View>

        <View style={upcomingScheduleStyles.scheduleBoxBottom}>
          <MaterialCommunityIcons
            {...common_icon_props}
            name="clock"
            color={theme.colors.grey300}
            size={theme.sizes.icon * 0.8}
          />

          <MyText style={upcomingScheduleStyles.scheduleBoxBottomText}>
            Sun, Jan 19, 08:00am - 10:00am
          </MyText>
        </View>
      </View>
    </View>
  );
}
