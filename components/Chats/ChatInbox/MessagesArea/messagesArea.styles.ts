import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../../../theme";

export const messagesAreaStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.sizes.appPadding,
  },

  messagesWrapper: {},
  message: {
    marginVertical: theme.sizes.appMargin * 0.5,
    backgroundColor: theme.colors.ghostWhite,
    borderRadius: theme.sizes.radius * 2,
    padding: theme.sizes.appPadding * 0.75,
  },
  otherMessage: {
    alignSelf: "flex-start",
    borderTopLeftRadius: 0,
  },
  yourMessage: {
    alignSelf: "flex-end",
    backgroundColor: theme.colors.primary,
    borderTopRightRadius: 0,
  },
  messageText: {
    marginBottom: theme.sizes.appMargin * 0.5,
  },
  otherMessageText: {
    color: theme.colors.grey700,
  },
  yourMessageText: {
    color: theme.colors.white,
  },
  messageTime: {
    alignSelf: "flex-end",
    fontSize: theme.sizes.smallFontSize - 2,
  },
  otherMessageTime: {
    color: theme.colors.grey700,
  },
  yourMessageTime: {
    color: theme.colors.white,
  },
});
