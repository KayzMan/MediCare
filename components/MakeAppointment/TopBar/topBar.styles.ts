import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";
import { center_flexRow_spaceApart } from "../../../utilities/styles.utility";

// 👇 utilities

export const topBarStyles = StyleSheet.create({
  container: {
    marginBottom: theme.sizes.appMargin,
    ...center_flexRow_spaceApart,
  },
  title: {
    fontSize: theme.sizes.smallFontSize + 2,
    flex: 1,
    alignSelf: "center",
    textAlign: "center",
  },
});
