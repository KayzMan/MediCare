// 👇 theme
import { Dimensions } from "react-native";
import { theme } from "../theme";

const { width, height } = Dimensions.get("window");

interface Center {
  flexDirection: "row" | "column";
  alignItems: "baseline" | "center" | "flex-start" | "flex-end";
}

interface Center_spaceApart extends Center {
  justifyContent:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-evenly"
    | "space-around";
}

export const center_flexRow: Center = {
  flexDirection: "row",
  alignItems: "center",
};

const type1 = {
  flexDirection: "row",
  alignItems: "center",
};

export const center_flexRow_justifyCenter: Center_spaceApart = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};

export const center_flexRow_spaceApart: Center_spaceApart = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};

const type4 = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};

export const common_iOS_web_shadow = {
  shadowColor: theme.colors.black,
  shadowOpacity: 0.05,
  shadowRadius: theme.sizes.radius * 10,
  shadowOffset: { width: 5, height: 5 },
};

/**
 * calculateDimension
 * @param percentage - number e.g 20 for 20%
 * @param base - number like width or height e.g 300.
 * @returns percentage * base e.g 20% x 300
 */
export const calculateDimension = (percentage: number, base: number) => {
  return (percentage / 100) * base;
};

/**
 * calculateImageDimension
 * @param width - number e.g 300
 * @param height - number e.g 300
 * @param parentWidth - number e.g 1280
 * @param parentHeight - number e.g 800
 * @returns an object with new dimensions resized  according to parent width and height.
 */
export const calculateImageDimension = (
  width: number,
  height: number,
  parentWidth: number,
  parentHeight: number
): {
  width: number;
  height: number;
} => {
  const ratio = Math.min(parentWidth / width, parentHeight / height);
  return { width: width * ratio, height: height * ratio };
};

/**
 * Media Queries
 * @param width width of the screen
 * @returns returns a boolean specifying if a screen fits the description.
 */

export const isLargerThanMobileSize = (width: number) =>
  width > theme.sizes.maxMobileSize;

export const isExtraExtraSmallDevice = (width: number) =>
  width <= theme.sizes.extraExtraSmallDevice;

export const isExtraSmallDevice = (width: number) =>
  width >= theme.sizes.extraExtraSmallDevice &&
  width <= theme.sizes.extraSmallDevice;

export const isExtraSmallDeviceOrBigger = (width: number) =>
  width >= theme.sizes.extraSmallDevice;

export const isSmallDevice = (width: number) =>
  width >= theme.sizes.extraSmallDevice && width <= theme.sizes.smallDevice;

export const isSmallDeviceOrBigger = (width: number) =>
  width >= theme.sizes.smallDevice;

export const isMediumDevice = (width: number) =>
  width >= theme.sizes.smallDevice && width <= theme.sizes.mediumDevice;

export const isMediumDeviceOrBigger = (width: number) =>
  width >= theme.sizes.mediumDevice;

export const isLargeDevice = (width: number) =>
  width >= theme.sizes.mediumDevice && width <= theme.sizes.largeDevice;

export const isLargeDeviceOrBigger = (width: number) =>
  width >= theme.sizes.largeDevice;

export const isExtraLargeDevice = (width: number) =>
  width >= theme.sizes.largeDevice && width <= theme.sizes.extraLargeDevice;

export const isGreaterThanExtraLarge = (width: number) =>
  width >= theme.sizes.extraLargeDevice;
