import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../theme";

// 👇 utilities
import { calculateImageDimension } from "../../utilities/styles.utility";

const { width: imageWidth, height: imageHeight } = calculateImageDimension(
  368,
  485,
  undefined,
  undefined,
  2800
);

export const sidebarStyles = StyleSheet.create({
  drawerContainer: {
    padding: theme.sizes.appPadding * 0.5,
    paddingBottom: theme.sizes.appPadding * 2.5,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: theme.sizes.appMargin * 0.5,
    padding: theme.sizes.appPadding * 0.5,
    borderRadius: theme.sizes.radius,
  },
  drawerItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  drawerItemSection: {
    marginVertical: theme.sizes.appMargin * 0.5,
    borderTopColor: theme.colors.silver20,
    borderTopWidth: 1,
  },
  drawerItemSectionHeader: {
    color: theme.colors.grey700,
    marginLeft: theme.sizes.appMargin * 0.5,
    fontSize: theme.sizes.mediumFontSize,
  },
  drawerItemLabel: {
    color: theme.colors.grey700,
    marginLeft: theme.sizes.appMargin * 0.5,
    fontSize: theme.sizes.smallFontSize,
  },
  topAvatar: {},
  topAvatarContainer: {
    width: imageWidth,
    height: imageHeight,
    left: 20,
    marginBottom: theme.sizes.appMargin,
  },
});
