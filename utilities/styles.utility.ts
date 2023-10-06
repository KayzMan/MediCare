// 👇 theme
import { Dimensions } from "react-native";
import { theme } from "../theme";

const { width } = Dimensions.get("window");

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
 * @param percentage your percentage value like 20 for 20%
 * @param base your base value for width or height e.g 300
 * @returns the percentage of the base value e.g 20% of 300
 */
export const calculateDimension = (percentage: number, base: number) => {
  return (percentage / 100) * base;
};

/**
 * Media Queries
 * @param width width of the screen
 * @returns returns a boolean specifying if a screen fits the description.
 */
export const isExtraSmallDevice = (width: number) =>
  width <= theme.sizes.extraSmallDevice;
export const isSmallDevice = (width: number) =>
  width >= theme.sizes.extraSmallDevice && width <= theme.sizes.smallDevice;
export const isMediumDevice = (width: number) =>
  width >= theme.sizes.smallDevice && width <= theme.sizes.mediumDevice;
export const isLargeDevice = (width: number) =>
  width >= theme.sizes.mediumDevice && width <= theme.sizes.largeDevice;
export const isExtraLargeDevice = (width: number) =>
  width >= theme.sizes.largeDevice && width <= theme.sizes.extraLargeDevice;
export const isGreaterThanExtraLarge = (width: number) =>
  width >= theme.sizes.extraLargeDevice;
