import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import {
  center_flexRow,
  center_flexRow_spaceApart,
} from "../../../utilities/styles.utility";

export const topBarStyles = StyleSheet.create({
  container: {
    marginBottom: theme.sizes.appMargin,
    ...center_flexRow_spaceApart,
  },
  title: {
    flex: 1,
    alignSelf: "center",
    textAlign: "center",
  },
});
