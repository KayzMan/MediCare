import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import {
  center_flexRow,
  center_flexRow_justifyCenter,
} from "../../../utilities/styles.utility";

export const openSlotsStyles = StyleSheet.create({
  container: {
    marginBottom: theme.sizes.appMargin,
  },
  title: {
    marginVertical: theme.sizes.appMargin,
    fontSize: theme.sizes.mediumFontSize,
  },
  slotItems: {
    ...center_flexRow,
    flexWrap: "wrap",
  },
  slotItem: {
    marginRight: theme.sizes.appMargin,
    backgroundColor: theme.colors.ghostWhite,
    height: 32,
    ...center_flexRow_justifyCenter,
    paddingHorizontal: theme.sizes.appPadding * 0.75,
    marginBottom: theme.sizes.appMargin,
    borderRadius: theme.sizes.radius,
  },
  slotItemText: {},
});
