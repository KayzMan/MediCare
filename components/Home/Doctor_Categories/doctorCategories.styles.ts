import { Platform, StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import {
  center_flexRow,
  center_flexRow_spaceApart,
  isLargeDeviceOrBigger,
  isLargerThanMobileSize,
} from "../../../utilities/styles.utility";

export const doctorCategoriesStyles = StyleSheet.create({
  container: {
    marginBottom:
      Platform.OS === "web" ? theme.sizes.appMargin * 2 : theme.sizes.appMargin,
    maxWidth: theme.sizes.maxMobileSize * 1.3,
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
    marginBottom: theme.sizes.appMargin,
    marginTop: isLargeDeviceOrBigger(theme.sizes.screenWidth)
      ? theme.sizes.appMargin * 2
      : 0,
  },
  topBar_text: {},
  categoryItem: {
    marginRight: theme.sizes.appMargin * 0.5,
    ...center_flexRow,
    backgroundColor: theme.colors.silver20,
    borderRadius: theme.sizes.radius * 2,
    height: theme.sizes.smallButtonHeight,
    paddingHorizontal: theme.sizes.smallButtonHPadding,
  },
  categoryItemText: {
    marginLeft: theme.sizes.appMargin * 0.25,
  },
});
