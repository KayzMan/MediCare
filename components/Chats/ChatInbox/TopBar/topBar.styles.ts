import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../../theme";

// 👇 utilities
import {
  center_flexRow,
  center_flexRow_justifyCenter,
  center_flexRow_spaceApart,
} from "../../../../utilities/styles.utility";

export const topBarStyles = StyleSheet.create({
  container: {
    // marginBottom: theme.sizes.appMargin,
    borderBottomColor: theme.colors.silver20,
    borderBottomWidth: 1,
    paddingBottom: theme.sizes.appMargin,
  },
  top: {
    ...center_flexRow_spaceApart,
    marginBottom: theme.sizes.appMargin,
  },
  left: {
    ...center_flexRow,
    maxWidth: "80%",
  },
  leftAvatarDetailWrapper: {
    ...center_flexRow,
  },
  detailsWrapper: {
    marginLeft: theme.sizes.appMargin * 0.5,
  },
  username: {
    marginBottom: theme.sizes.appMargin * 0.1,
    // fontSize: theme.sizes.smallFontSize + 0.5,
  },
  onlineStatusWrapper: {
    ...center_flexRow,
  },
  onlineText: {
    marginLeft: theme.sizes.appMargin * 0.25,
    color: theme.colors.grey700,
    fontSize: theme.sizes.smallFontSize - 2,
  },
  right: {
    ...center_flexRow,
  },
  iconContainer: {
    backgroundColor: theme.colors.primary,
    height: 30,
    width: 30,
    borderRadius: theme.sizes.radius * 10000,
    ...center_flexRow_justifyCenter,
    marginLeft: theme.sizes.appMargin * 0.5,
  },
  timeBar: {
    backgroundColor: theme.colors.primary_faded,
    ...center_flexRow_justifyCenter,
    borderRadius: theme.sizes.radius * 2,
    marginHorizontal: theme.sizes.appMargin,
    alignSelf: "center",
    paddingHorizontal: theme.sizes.appPadding * 1.5,
  },
  timeBarText: {
    color: theme.colors.primary,
    marginLeft: theme.sizes.appMargin * 0.5,
    fontSize: theme.sizes.smallFontSize - 0.5,
  },
});
