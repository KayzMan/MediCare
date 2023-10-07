import { TextProps } from "react-native";

type FontWeightType =
  | "ubuntu"
  | "ubuntuItalic"
  | "ubuntuLight"
  | "ubuntuLightItalic"
  | "ubuntuMedium"
  | "ubuntuMediumItalic"
  | "ubuntuBold"
  | "ubuntuBoldItalic";

export interface MYTextProps extends TextProps {
  fontWeight?: FontWeightType;
  color?: string;
}
