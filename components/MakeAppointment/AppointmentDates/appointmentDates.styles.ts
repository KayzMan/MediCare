import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";
import { center_flexRow_justifyCenter } from "../../../utilities/styles.utility";

export const appointmentDatesStyles = StyleSheet.create({
  container: {
    marginBottom: theme.sizes.appMargin,
  },
  dateItem: {
    backgroundColor: theme.colors.ghostWhite,
    marginRight: theme.sizes.appMargin * 0.5,
    borderRadius: theme.sizes.radius,
    ...center_flexRow_justifyCenter,
    flexDirection: "column",
    width: 45,
    height: 70,
  },
  dateItemDay: {
    marginBottom: theme.sizes.appMargin * 0.5,
  },
  dateItemDate: {},
});
