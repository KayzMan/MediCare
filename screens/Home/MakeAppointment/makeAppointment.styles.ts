import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import { isExtraExtraSmallDevice } from "../../../utilities/styles.utility";

export const makeAppointmentStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: isExtraExtraSmallDevice(theme.sizes.screenWidth)
      ? theme.sizes.appMargin * 0.5
      : theme.sizes.appMargin,
  },
});
