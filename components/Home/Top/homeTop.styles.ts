import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import {
  center_flexRow,
  center_flexRow_spaceApart,
  isExtraExtraSmallDevice,
  isLargeDeviceOrBigger,
  isLargerThanMobileSize,
} from "../../../utilities/styles.utility";

export const homeTopStyles = StyleSheet.create({
  container: {
    marginBottom: theme.sizes.appMargin,
  },
  top: {
    ...center_flexRow_spaceApart,
  },
  topLeft: {
    flex: 1,
  },
  topLeftText: {
    textAlign: "center",
    marginBottom: theme.sizes.appMargin * 0.25,
  },
  topLeftLocationWrapper: {
    alignSelf: "center",
    ...center_flexRow,
  },
  topLeftLocationWrapperText: {
    marginLeft: theme.sizes.appMargin * 0.25,
  },
  topRightIcon: {},
  textInputWrapper: {
    ...center_flexRow,
    // marginTop: theme.sizes.appMargin,
    marginTop: isLargeDeviceOrBigger(theme.sizes.screenWidth)
      ? theme.sizes.appMargin * 2
      : theme.sizes.appMargin,
    borderRadius: theme.sizes.radius * 2,
    backgroundColor: theme.colors.silver20,
    paddingHorizontal: theme.sizes.appPadding * 0.5,
    maxWidth: theme.sizes.maxMobileSize,
    minWidth: isLargerThanMobileSize(theme.sizes.screenWidth)
      ? theme.sizes.maxMobileSize
      : 0,
    alignSelf: isLargerThanMobileSize(theme.sizes.screenWidth)
      ? "center"
      : "stretch",
  },
  textInput: {
    flex: 1,
    backgroundColor: theme.colors.transparent,
    height: isExtraExtraSmallDevice(theme.sizes.screenWidth)
      ? theme.sizes.smallButtonHeight
      : theme.sizes.mediumButtonHeight,
  },
  textInputContent: {},
});
