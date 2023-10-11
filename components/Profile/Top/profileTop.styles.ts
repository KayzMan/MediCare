import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import { center_flexRow } from "../../../utilities/styles.utility";

export const profileTopStyles = StyleSheet.create({
  container: {
    marginBottom: theme.sizes.appMargin,
  },
  username: {
    marginTop: theme.sizes.appMargin,
    alignSelf: "center",
    textAlign: "center",
    fontSize: theme.sizes.largeFontSize,
  },
  premiumWrapper: {
    ...center_flexRow,
    alignSelf: "center",
    marginTop: theme.sizes.appMargin * 0.5,
  },
  premiumText: {
    color: theme.colors.primary,
    marginLeft: theme.sizes.appMargin * 0.25,
  },
});
