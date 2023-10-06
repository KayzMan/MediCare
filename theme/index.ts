import { PixelRatio } from "react-native";
import { DefaultTheme, MD3Colors, MD2Colors } from "react-native-paper";

interface sizesType {
  appPadding: number;
  icon: number;
  radius: number;
  title_fontSize: number;

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

  smallButtonHeight: number;
  smallButtonHPadding: number;
  mediumButtonHeight: number;
  mediumButtonHPadding: number;
  largeButtonHeight: number;
  largeButtonHPadding: number;

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
    appPadding: 10,
    icon: 25,
    radius: 5,
    title_fontSize: PixelRatio.getFontScale() * 20 * 1.2,

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

    smallButtonHeight: 40,
    smallButtonHPadding: 20,
    mediumButtonHeight: 48,
    mediumButtonHPadding: 28,
    largeButtonHeight: 56,
    largeButtonHPadding: 36,

    fontWeight_bold: "700",
    fontWeight_medium: "400",
    fontWeight_light: "100",
  } as sizesType,
  colors: {
    ...DefaultTheme.colors,
    ...MD3Colors,
    ...MD2Colors,
    primary: "rgb(255, 0, 255)",
    primary_faded: "rgba(255, 0, 255, 0.15)",
    primary_variableFade: (opacity: number) => `rgba(255, 0, 255, ${opacity})`,
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
