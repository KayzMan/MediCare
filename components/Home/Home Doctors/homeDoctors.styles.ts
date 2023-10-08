import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import {
  calculateDimension,
  center_flexRow,
} from "../../../utilities/styles.utility";

export const homeDoctorStyles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: calculateDimension(30, theme.sizes.screenHeight),
  },
  doctorItem: {
    marginBottom: theme.sizes.appMargin,
  },
});
