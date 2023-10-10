import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import {
  center_flexRow,
  center_flexRow_spaceApart,
  isLargeDeviceOrBigger,
  isLargerThanMobileSize,
} from "../../../utilities/styles.utility";

export const topBarStyles = StyleSheet.create({
  container: {
    ...center_flexRow_spaceApart,
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
  title: {
    flex: 1,
    alignSelf: "center",
    textAlign: "center",
  },
});
