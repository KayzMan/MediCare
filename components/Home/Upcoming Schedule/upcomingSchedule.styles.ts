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

export const upcomingScheduleStyles = StyleSheet.create({
  container: {
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
  topBar: {
    ...center_flexRow_spaceApart,
  },
  topBarBigText: {},
  topBarSmallText: {
    color: theme.colors.primary,
    fontSize: theme.sizes.smallFontSize - 2,
  },
  scheduleBox: {
    marginTop: theme.sizes.appPadding,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.sizes.radius * 2,
    padding: theme.sizes.appPadding * 0.8,
  },
  scheduleBoxTop: {
    ...center_flexRow_spaceApart,
  },
  scheduleBoxTopLeft: {
    ...center_flexRow,
  },
  scheduleBoxTopLeftDetail: {
    marginLeft: theme.sizes.appMargin * 0.5,
  },
  scheduleBoxTopLeftDetailName: {
    color: theme.colors.white,
    marginBottom: theme.sizes.appMargin * 0.25,
  },
  scheduleBoxTopLeftDetailProfession: {
    color: theme.colors.grey100,
    marginBottom: theme.sizes.appMargin * 0.25,
    fontSize: theme.sizes.smallFontSize - 2,
  },
  scheduleBoxTopRight: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.sizes.radius * 1000,
    padding: theme.sizes.appPadding * 0.25,
  },
  scheduleBoxBottom: {
    backgroundColor: theme.colors.black20,
    borderRadius: theme.sizes.radius,
    marginTop: theme.sizes.appMargin,
    ...center_flexRow_justifyCenter,
    paddingVertical: theme.sizes.appPadding * 0.5,
  },
  scheduleBoxBottomText: {
    color: theme.colors.white,
    marginLeft: theme.sizes.appMargin * 0.5,
    fontSize: theme.sizes.smallFontSize - 1.5,
  },
});
