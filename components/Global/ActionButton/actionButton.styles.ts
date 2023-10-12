import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import { isExtraExtraSmallDevice } from "../../../utilities/styles.utility";

export const actionButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.sizes.radius,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: theme.sizes.appMargin * 0.5,
  },
  buttonText: {
    color: theme.colors.white,
    width: "90%",
    textAlign: "center",
    fontSize: theme.sizes.smallFontSize,
  },
});
