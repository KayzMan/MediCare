import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import {
  calculateImageDimension,
  center_flexRow,
  isExtraExtraSmallDevice,
  isLargerThanMobileSize,
} from "../../../utilities/styles.utility";

const { width: imageWidth, height: imageHeight } = calculateImageDimension(
  368,
  765,
  undefined,
  undefined,
  750
);

const { width: biggerImageWidth, height: biggerImageHeight } =
  calculateImageDimension(368, 765, undefined, undefined, 1000);

export const signUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: isExtraExtraSmallDevice(theme.sizes.screenWidth)
      ? theme.sizes.appPadding * 0.5
      : theme.sizes.appPadding,
    maxWidth: theme.sizes.maxMobileSize,
    minWidth: isLargerThanMobileSize(theme.sizes.screenWidth)
      ? theme.sizes.maxMobileSize
      : 0,
    marginHorizontal: "auto",
  },
  avatar: {},
  avatarContainer: {
    width: isLargerThanMobileSize(theme.sizes.screenWidth)
      ? biggerImageWidth
      : imageWidth,
    height: isLargerThanMobileSize(theme.sizes.screenWidth)
      ? biggerImageHeight
      : imageHeight,
    alignSelf: "center",
    left: 20,
  },
  textInputsContainer: {
    marginTop: theme.sizes.appMargin,
  },
  textInputWrapper: {
    ...center_flexRow,
    backgroundColor: theme.colors.primary_faded,
    paddingHorizontal: theme.sizes.appPadding * 0.5,
    borderRadius: theme.sizes.radius,
    marginVertical: theme.sizes.appMargin * 0.5,
  },
  textInput: {
    backgroundColor: theme.colors.transparent,
    height: isExtraExtraSmallDevice(theme.sizes.screenWidth)
      ? theme.sizes.smallButtonHeight
      : theme.sizes.mediumButtonHeight,
  },
  textInputContent: {
    fontSize: isExtraExtraSmallDevice(theme.sizes.screenWidth)
      ? theme.fonts.titleSmall.fontSize
      : theme.fonts.titleMedium.fontSize,
  },
  formLabel: {
    marginVertical: theme.sizes.appMargin * 0.5,
    color: theme.colors.primary,
    fontSize: theme.fonts.titleSmall.fontSize,
  },
});
