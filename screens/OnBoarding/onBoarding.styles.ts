import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../theme";

// 👇 utilities
import {
  calculateImageDimension,
  center_flexRow_spaceApart,
  isExtraExtraSmallDevice,
  isLargerThanMobileSize,
} from "../../utilities/styles.utility";

const { width: imageWidth, height: imageHeight } = calculateImageDimension(
  368,
  329
);
const { width: biggerImageWidth, height: biggerImageHeight } =
  calculateImageDimension(
    368,
    329,
    theme.sizes.maxMobileSize,
    theme.sizes.screenWidth,
    100
  );

export const onBoardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: isExtraExtraSmallDevice(theme.sizes.screenWidth)
      ? theme.sizes.appPadding * 0.5
      : theme.sizes.appPadding,
    minHeight: theme.sizes.screenHeight,
    minWidth: isLargerThanMobileSize(theme.sizes.screenWidth)
      ? theme.sizes.maxMobileSize
      : 0,
    maxWidth: theme.sizes.maxMobileSize,
    width: "100%",
    marginHorizontal: "auto",
  },
  title: {
    color: theme.colors.primary,
    fontSize: isExtraExtraSmallDevice(theme.sizes.screenWidth)
      ? theme.fonts.headlineMedium.fontSize
      : theme.fonts.headlineLarge.fontSize,
    // textAlign: isLargerThanMobileSize(theme.sizes.screenWidth)
    //   ? "center"
    //   : "left",
  },
  avatar: {},
  avatarContainer: {
    width: isLargerThanMobileSize(theme.sizes.screenWidth)
      ? biggerImageWidth
      : imageWidth,
    height: isLargerThanMobileSize(theme.sizes.screenWidth)
      ? biggerImageHeight
      : imageHeight,
    marginTop: isExtraExtraSmallDevice(theme.sizes.screenWidth)
      ? theme.sizes.appMargin * 0.5
      : 0,
    top: isExtraExtraSmallDevice(theme.sizes.screenWidth) ? 0 : "15%",
  },
  buttonsWrapper: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonsContainer: {
    position: "absolute",
    bottom: isExtraExtraSmallDevice(theme.sizes.screenWidth) ? 10 : 20,
    left: 0,
    right: 0,
    ...center_flexRow_spaceApart,
  },
  button: {
    flex: 1,
    marginHorizontal: isExtraExtraSmallDevice(theme.sizes.screenWidth)
      ? theme.sizes.appMargin * 0.5
      : theme.sizes.appMargin,
    marginVertical: 0,
  },
});
