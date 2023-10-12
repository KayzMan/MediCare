import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import { center_flexRow } from "../../../utilities/styles.utility";

export const doctorBottomStyles = StyleSheet.create({
  container: {
    marginBottom: theme.sizes.appMargin,
    backgroundColor: theme.colors.ghostWhite,
    borderRadius: theme.sizes.radius * 2,
    padding: theme.sizes.appPadding,
  },
  title: {
    fontSize: theme.sizes.mediumFontSize,
  },
  text: {
    maxWidth: "90%",
    marginTop: theme.sizes.appMargin * 0.5,
    marginBottom: theme.sizes.appMargin,
    color: theme.colors.grey700,
    lineHeight: 22,
  },
  readMore: {
    color: theme.colors.blue500,
  },
});
