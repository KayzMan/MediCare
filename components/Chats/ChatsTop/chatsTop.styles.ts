import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import {
  center_flexRow,
  isExtraExtraSmallDevice,
} from "../../../utilities/styles.utility";

export const chatsTopStyles = StyleSheet.create({
  container: {
    marginBottom: theme.sizes.appMargin * 1.2,
  },
  title: {
    textAlign: "center",
    marginBottom: theme.sizes.appMargin,
    fontSize: theme.sizes.mediumFontSize,
  },
  textInputWrapper: {
    ...center_flexRow,

    borderRadius: theme.sizes.radius * 2,
    backgroundColor: theme.colors.silver20,
    paddingHorizontal: theme.sizes.appPadding * 0.5,
    maxWidth: theme.sizes.maxMobileSize * 2,
  },
  textInput: {
    flex: 1,
    backgroundColor: theme.colors.transparent,
    height: isExtraExtraSmallDevice(theme.sizes.screenWidth)
      ? theme.sizes.smallButtonHeight
      : theme.sizes.mediumButtonHeight,
    fontSize: theme.sizes.smallFontSize,
  },
  textInputContent: {},
});
