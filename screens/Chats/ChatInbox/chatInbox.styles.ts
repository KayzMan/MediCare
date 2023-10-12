import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import { isExtraSmallDevice } from "../../../utilities/styles.utility";

export const chatInboxStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: isExtraSmallDevice(theme.sizes.screenWidth)
      ? theme.sizes.appPadding * 0.5
      : theme.sizes.appPadding,
  },
});
