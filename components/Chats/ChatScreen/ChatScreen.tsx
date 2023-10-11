import { StyleSheet, Text, View } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles

// 👇 components
import ContainerView from "../../Global/Container/ContainerView";
import MyText from "../../Global/MyText/MyText";

export default function ChatScreen() {
  return (
    // <ContainerView>
    <View style={styles.container}>
      <MyText
        style={{
          fontSize: theme.sizes.largeFontSize,
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        Chat Screen! 🚀⭐👋
      </MyText>
    </View>
    // {/* </ContainerView> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
