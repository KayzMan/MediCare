import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import {
  calculateDimension,
  center_flexRow,
  isExtraExtraSmallDevice,
  isLargeDeviceOrBigger,
  isLargerThanMobileSize,
} from "../../../utilities/styles.utility";

export const homeDoctorStyles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: calculateDimension(30, theme.sizes.screenHeight),
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
  doctorItem: {
    marginBottom: theme.sizes.appMargin,
    backgroundColor: theme.colors.silver20,
    borderRadius: theme.sizes.radius * 2,
    padding: theme.sizes.appPadding * 1,
    ...center_flexRow,
  },
  rightDetail: {
    marginLeft: theme.sizes.appMargin * 0.5,
    width: "75%",
  },
  rightDetailTop: {
    marginBottom: theme.sizes.appMargin * 0.25,
  },
  rightDetailTopName: {
    marginBottom: theme.sizes.appMargin * 0.25,
  },
  rightDetailTopProfession: {
    fontSize: theme.fonts.titleSmall.fontSize,
    color: theme.colors.grey700,
  },
  rightDetailBottom: {
    ...center_flexRow,
    flexWrap: "wrap",
    maxWidth: "95%",
    marginTop: theme.sizes.appMargin * 0.25,
  },
  ratingDetailBottomRatingText: {
    color: theme.colors.grey700,
    marginTop: isExtraExtraSmallDevice(theme.sizes.screenWidth)
      ? theme.sizes.appMargin * 0.25
      : 0,
    fontSize: theme.sizes.smallFontSize - 2,
  },
});
