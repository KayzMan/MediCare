import { Platform, StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import {
  center_flexRow,
  center_flexRow_spaceApart,
  isExtraExtraSmallDevice,
} from "../../../utilities/styles.utility";

export const doctorCategoriesStyles = StyleSheet.create({
  container: {
    marginBottom:
      Platform.OS === "web" ? theme.sizes.appMargin * 2 : theme.sizes.appMargin,
  },
  topBar: {
    ...center_flexRow_spaceApart,
    marginBottom: theme.sizes.appMargin,
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
    fontSize: theme.fonts.titleSmall.fontSize,
    marginLeft: theme.sizes.appMargin * 0.25,
  },
});
