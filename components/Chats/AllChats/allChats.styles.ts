import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 utilities
import {
  center_flexRow,
  center_flexRow_spaceApart,
} from "../../../utilities/styles.utility";

export const allChatsStyles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: theme.sizes.screenHeight,
  },
  chatItem: {
    marginBottom: theme.sizes.appMargin * 0.8,
    backgroundColor: theme.colors.ghostWhite,
    borderRadius: theme.sizes.radius * 2.5,
    padding: theme.sizes.appPadding * 0.6,
    paddingVertical: theme.sizes.appMargin * 0.8,
    ...center_flexRow_spaceApart,
  },
  chatItemLeft: {
    ...center_flexRow,
  },
  chatItemAvatarWrapper: {},
  chatItemAvatar: {},
  chatItemAvatarBadge: {
    height: 10,
    width: 10,
    backgroundColor: theme.colors.green500,
    borderRadius: theme.sizes.radius * 1000,
    position: "absolute",
    bottom: 2,
    right: 4,
  },
  chatItemLeftDetail: {
    marginLeft: theme.sizes.appMargin * 0.5,
  },
  chatItemName: {
    marginBottom: theme.sizes.appMargin * 0.25,
    fontSize: theme.sizes.smallFontSize + 0.5,
  },
  chatItemMessage: {
    color: theme.colors.grey700,
    fontSize: theme.sizes.smallFontSize - 2,
  },
  chatItemRight: {
    alignItems: "center",
  },
  chatItemTime: {
    marginBottom: theme.sizes.appMargin * 0.5,
    fontSize: theme.sizes.smallFontSize - 2.5,
    color: theme.colors.grey500,
  },
  chatItemLastMessagesWrapper: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.sizes.radius * 1000,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  chatItemLastMessagesCount: {
    fontSize: theme.sizes.smallFontSize - 3,
    color: theme.colors.white,
  },
});
