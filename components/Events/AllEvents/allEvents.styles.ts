import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import {
  center_flexRow,
  center_flexRow_justifyCenter,
  center_flexRow_spaceApart,
  isLargeDeviceOrBigger,
  isLargerThanMobileSize,
} from "../../../utilities/styles.utility";

export const allEvents = StyleSheet.create({
  container: {
    flex: 1,
    // minHeight: theme.sizes.screenHeight - (theme.sizes.screenHeight - 200),
    minHeight: theme.sizes.screenHeight / 2,
    marginTop: isLargeDeviceOrBigger(theme.sizes.screenWidth)
      ? theme.sizes.appMargin * 2
      : 0,
    marginBottom: theme.sizes.appMargin,
    maxWidth: theme.sizes.maxMobileSize * 2,
    minWidth: isLargerThanMobileSize(theme.sizes.screenWidth)
      ? isLargeDeviceOrBigger(theme.sizes.screenWidth)
        ? theme.sizes.maxMobileSize * 2
        : theme.sizes.maxMobileSize * 1.3
      : 0,
    marginHorizontal: isLargerThanMobileSize(theme.sizes.screenWidth)
      ? "auto"
      : 0,
  },
  eventItem: {
    marginBottom: theme.sizes.appMargin * 0.75,
    backgroundColor: theme.colors.silver20,
    borderRadius: theme.sizes.radius * 2,
    ...center_flexRow_spaceApart,
    paddingHorizontal: theme.sizes.appPadding,
    height: 90,
  },
  eventItemLeft: {
    ...center_flexRow,
  },
  eventItemLeftDateWrapper: {
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.sizes.radius,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  eventItemLeftDateDay: {
    color: theme.colors.primary,
    textAlign: "center",
  },
  eventItemLeftDateMonth: {
    color: theme.colors.primary,
    textAlign: "center",
  },
  eventItemLeftDetailWrapper: {
    marginLeft: theme.sizes.appMargin,
  },
  eventItemLeftDetailTitle: {
    marginBottom: theme.sizes.appMargin * 0.2,
  },
  eventItemLeftDetailTime: {
    marginBottom: theme.sizes.appMargin * 0.2,
    fontSize: theme.sizes.smallFontSize - 2,
  },
  eventItemLeftDetailDoctorName: {
    fontSize: theme.sizes.smallFontSize - 2,
  },
  iconContainer: {
    height: 30,
    width: 30,
    backgroundColor: theme.colors.grey50,
    borderRadius: theme.sizes.radius * 1000,
    ...center_flexRow_justifyCenter,
  },
});
