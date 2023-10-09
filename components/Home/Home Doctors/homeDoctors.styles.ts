import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import {
  calculateDimension,
  center_flexRow,
} from "../../../utilities/styles.utility";

export const homeDoctorStyles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: calculateDimension(30, theme.sizes.screenHeight),
  },
  doctorItem: {
    marginBottom: theme.sizes.appMargin,
    backgroundColor: theme.colors.silver20,
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.appPadding * 0.5,
    ...center_flexRow,
  },
  rightDetail: {
    marginLeft: theme.sizes.appMargin * 0.5,
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
  },
  ratingDetailBottomRatingText: {
    marginLeft: theme.sizes.appMargin * 0.5,
    fontSize: theme.fonts.titleSmall.fontSize,
    color: theme.colors.grey500,
  },
});
