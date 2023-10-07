import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../theme";

export const bottomTabsStyles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: theme.colors.silver20,
    height: 65,
  },
  tabItem: {
    alignItems: "center",
    alignSelf: "center",
    flex: 1,
  },
  tabIcon: {
    padding: theme.sizes.appPadding * 0.4,
    borderRadius: theme.sizes.radius * 1.5,
  },
});
