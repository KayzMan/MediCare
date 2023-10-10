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
    marginBottom: theme.sizes.appMargin * 1.2,
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
