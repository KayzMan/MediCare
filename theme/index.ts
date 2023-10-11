import { Dimensions, PixelRatio } from "react-native";
import { DefaultTheme, MD3Colors, MD2Colors } from "react-native-paper";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

interface sizesType {
  appPadding: number;
  appMargin: number;
  icon: number;
  radius: number;

  smallFontSize: number;
  mediumFontSize: number;
  largeFontSize: number;

  touchableOpacity_high?: number;
  touchableOpacity_medium?: number;
  touchableOpacity_low?: number;

  skeletonTime: number;

  PixelRatio: number;
  PixelRatioFontScale: number;

  extraLargeDevice: number;
  largeDevice: number;
  mediumDevice: number;
  smallDevice: number;
  extraSmallDevice: number;
  extraExtraSmallDevice: number;

  smallButtonHeight: number;
  smallButtonHPadding: number;
  mediumButtonHeight: number;
  mediumButtonHPadding: number;
  largeButtonHeight: number;
  largeButtonHPadding: number;

  screenWidth: number;
  screenHeight: number;
  maxMobileSize: number;

  fontWeight_bold?:
    | "700"
    | "400"
    | "100"
    | "normal"
    | "bold"
    | "200"
    | "300"
    | "500"
    | "600"
    | "800"
    | "900"
    | undefined;
  fontWeight_medium?:
    | "700"
    | "400"
    | "100"
    | "normal"
    | "bold"
    | "200"
    | "300"
    | "500"
    | "600"
    | "800"
    | "900"
    | undefined;
  fontWeight_light:
    | "700"
    | "400"
    | "100"
    | "normal"
    | "bold"
    | "200"
    | "300"
    | "500"
    | "600"
    | "800"
    | "900"
    | undefined;
}

export const theme = {
  ...DefaultTheme,
  sizes: {
    appPadding: 20,
    appMargin: 20,
    icon: 25,
    radius: 5,

    smallFontSize: DefaultTheme.fonts.titleSmall.fontSize,
    mediumFontSize: DefaultTheme.fonts.titleMedium.fontSize,
    largeFontSize: DefaultTheme.fonts.titleLarge.fontSize,

    touchableOpacity_high: 0.8,
    touchableOpacity_medium: 0.5,
    touchableOpacity_low: 0.2,

    skeletonTime: 1000,

    PixelRatio: PixelRatio.get(),
    PixelRatioFontScale: PixelRatio.getFontScale(),

    extraLargeDevice: 1399.98,
    largeDevice: 1199.98,
    mediumDevice: 991.98,
    smallDevice: 767.98,
    extraSmallDevice: 575.98,
    extraExtraSmallDevice: 350,

    smallButtonHeight: 40,
    smallButtonHPadding: 20,
    mediumButtonHeight: 48,
    mediumButtonHPadding: 28,
    largeButtonHeight: 56,
    largeButtonHPadding: 36,

    maxMobileSize: 500,
    screenHeight,
    screenWidth,

    fontWeight_bold: "700",
    fontWeight_medium: "400",
    fontWeight_light: "100",
  } as sizesType,
  colors: {
    ...DefaultTheme.colors,
    ...MD3Colors,
    ...MD2Colors,
    primary: "rgb(110, 168, 156)",
    primary_faded: "rgba(110, 168, 156, 0.20)",
    primary_variableFade: (opacity: number) =>
      `rgba(110, 168, 156, ${opacity})`,
    black20: "rgba(0, 0, 0, 0.20)",
    pinkAccent_CanCan: "rgb(199, 141, 159)",
    silver20: "rgba(189, 189, 189, .20)",
    ghostWhite: "rgb(248, 248, 255)",
    statusBarTranslucentColor: "rgba(0, 0, 0, .5)",
    topTabsLabelInActiveColor: "#ccc",
    topTabsIndicatorColor: "limegreen",
  },
  font: {
    ubuntu: "ubuntu",
    ubuntuItalic: "ubuntuItalic",
    ubuntuLight: "ubuntuLight",
    ubuntuLightItalic: "ubuntuLightItalic",
    ubuntuMedium: "ubuntuMedium",
    ubuntuMediumItalic: "ubuntuMediumItalic",
    ubuntuBold: "ubuntuBold",
    ubuntuBoldItalic: "ubuntuBoldItalic",
  },
};
