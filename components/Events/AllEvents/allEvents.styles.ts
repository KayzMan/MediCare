import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import {
  center_flexRow,
  center_flexRow_spaceApart,
} from "../../../utilities/styles.utility";

export const allEvents = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: theme.sizes.appMargin,
    minHeight: theme.sizes.screenHeight - (theme.sizes.screenHeight - 200),
  },
  eventItem: {
    marginBottom: theme.sizes.appMargin * 0.75,
    backgroundColor: theme.colors.silver20,
    borderRadius: theme.sizes.radius * 1.5,
    ...center_flexRow_spaceApart,
    paddingHorizontal: theme.sizes.appPadding,
    height: 100,
  },
  eventItemLeft: {
    ...center_flexRow,
  },
  eventItemLeftDateWrapper: {
    height: 65,
    width: 65,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.sizes.radius * 2,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  eventItemLeftDateDay: {
    color: theme.colors.primary,
    textAlign: "center",
    marginBottom: theme.sizes.appMargin * 0.25,
    fontSize: theme.fonts.titleMedium.fontSize,
  },
  eventItemLeftDateMonth: {
    color: theme.colors.primary,
    textAlign: "center",
    fontSize: theme.fonts.titleMedium.fontSize,
  },
  eventItemLeftDetailWrapper: {
    marginLeft: theme.sizes.appMargin,
  },
  eventItemLeftDetailTitle: {
    marginBottom: theme.sizes.appMargin * 0.125,
    fontSize: theme.fonts.titleMedium.fontSize,
  },
  eventItemLeftDetailTime: {
    color: theme.colors.grey700,
    fontSize: theme.fonts.titleSmall.fontSize,
    marginBottom: theme.sizes.appMargin * 0.125,
  },
  eventItemLeftDetailDoctorName: {
    color: theme.colors.grey700,
    fontSize: theme.fonts.titleSmall.fontSize,
  },
});
