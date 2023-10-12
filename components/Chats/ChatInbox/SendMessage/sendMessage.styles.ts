import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../../theme";

// 👇 utilities
import { center_flexRow_spaceApart } from "../../../../utilities/styles.utility";

export const sendMessageStyles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    backgroundColor: theme.colors.ghostWhite,
    borderRadius: theme.sizes.radius * 2,
    ...center_flexRow_spaceApart,
    paddingRight: theme.sizes.appMargin * 0.5,
  },
  textInput: {
    backgroundColor: theme.colors.transparent,
    flex: 1,
  },
  textInputContent: {
    fontSize: theme.sizes.smallFontSize,
  },
});
