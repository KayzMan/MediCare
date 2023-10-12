import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import {
  center_flexRow,
  center_flexRow_justifyCenter,
} from "../../../utilities/styles.utility";

export const topDetailStyles = StyleSheet.create({
  container: {
    marginBottom: theme.sizes.appMargin,
    ...center_flexRow,
  },
  right: {
    marginLeft: theme.sizes.appMargin,
  },
  rightTop: {
    marginBottom: theme.sizes.appMargin * 0.5,
  },
  username: {
    marginBottom: theme.sizes.appMargin * 0.25,
    fontSize: theme.sizes.mediumFontSize,
  },
  profession: {
    color: theme.colors.grey700,
  },
  rightBottom: {},
  ratingItem: {
    ...center_flexRow,
    marginBottom: theme.sizes.appMargin * 0.35,
  },
  iconContainer: {
    height: 35,
    width: 35,
    backgroundColor: theme.colors.ghostWhite,
    ...center_flexRow_justifyCenter,
  },
  ratingItemRight: {
    marginLeft: theme.sizes.appMargin * 0.5,
  },
  ratingItemTitle: {
    fontSize: theme.sizes.smallFontSize - 2,
    color: theme.colors.grey700,
    marginBottom: theme.sizes.appMargin * 0.1,
  },
  ratingItemValue: {
    fontSize: theme.sizes.smallFontSize - 2,
  },
});
