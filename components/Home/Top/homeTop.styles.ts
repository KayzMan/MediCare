import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import {
  center_flexRow,
  center_flexRow_spaceApart,
  isExtraExtraSmallDevice,
} from "../../../utilities/styles.utility";

export const homeTopStyles = StyleSheet.create({
  container: {
    marginBottom: theme.sizes.appMargin * 1.2,
  },
  top: {
    ...center_flexRow_spaceApart,
  },
  topLeft: {
    flex: 1,
  },
  topLeftText: {
    textAlign: "center",
    marginBottom: theme.sizes.appMargin * 0.25,
    fontSize: theme.sizes.smallFontSize - 2,
  },
  topLeftLocationWrapper: {
    alignSelf: "center",
    ...center_flexRow,
  },
  topLeftLocationWrapperText: {
    marginLeft: theme.sizes.appMargin * 0.25,
  },
  topRightIcon: {
    height: 30,
    width: 30,
    borderRadius: theme.sizes.radius,
    backgroundColor: theme.colors.ghostWhite,
    alignItems: "center",
    justifyContent: "center",
  },
  textInputWrapper: {
    ...center_flexRow,

    borderRadius: theme.sizes.radius * 2,
    backgroundColor: theme.colors.ghostWhite,
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
