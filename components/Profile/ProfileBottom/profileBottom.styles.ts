import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import {
  center_flexRow,
  center_flexRow_justifyCenter,
  center_flexRow_spaceApart,
} from "../../../utilities/styles.utility";

export const profileBottomStyles = StyleSheet.create({
  container: {
    marginBottom: theme.sizes.appMargin,
    flex: 1,
    minHeight: theme.sizes.screenHeight,
  },
  title: {
    color: theme.colors.grey700,
    marginBottom: theme.sizes.appMargin,
  },
  bottomItem: {
    marginVertical: theme.sizes.appMargin * 0.5,
    ...center_flexRow_spaceApart,
    borderBottomColor: theme.colors.silver20,
    borderBottomWidth: 1,
    paddingBottom: theme.sizes.appPadding * 0.75,
  },
  bottomItemLeft: {
    ...center_flexRow,
  },
  bottomItemIconWrapper: {
    height: 40,
    width: 40,
    borderRadius: theme.sizes.radius,
    backgroundColor: theme.colors.ghostWhite,
    ...center_flexRow_justifyCenter,
  },
  bottomItemTitle: {
    marginLeft: theme.sizes.appMargin,
  },
});
