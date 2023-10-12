import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import {
  center_flexRow_justifyCenter,
  center_flexRow_spaceApart,
} from "../../../utilities/styles.utility";

export const topBarStyles = StyleSheet.create({
  container: {
    ...center_flexRow_spaceApart,
    marginBottom: theme.sizes.appMargin,
  },
  iconContainer: {
    width: 35,
    height: 35,
    ...center_flexRow_justifyCenter,
    borderRadius: theme.sizes.radius,
    backgroundColor: theme.colors.ghostWhite,
  },
});
