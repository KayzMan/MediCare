import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import { center_flexRow_spaceApart } from "../../../utilities/styles.utility";

export const topBarStyles = StyleSheet.create({
  container: {
    ...center_flexRow_spaceApart,
    marginBottom: theme.sizes.appMargin * 1.2,
  },
  title: {
    flex: 1,
    alignSelf: "center",
    textAlign: "center",
  },
});
