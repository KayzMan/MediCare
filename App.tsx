import { StatusBar, StyleSheet, SafeAreaView, Text } from "react-native";
import { PaperProvider, ThemeProvider } from "react-native-paper";
import { MyGlobalContext } from "./context/MyGlobalContext";
import { useFonts } from "expo-font";

// 👇 theme
import { theme } from "./theme";

// 👇 navigators
import MainNavigator from "./navigation/MainNavigator/MainNavigator";

export default function App() {
  const [Ubuntu_FontLoaded] = useFonts({
    ubuntu: require("./assets/fonts/Ubuntu/Ubuntu-Regular.ttf"),
    ubuntuItalic: require("./assets/fonts/Ubuntu/Ubuntu-Italic.ttf"),
    ubuntuLight: require("./assets/fonts/Ubuntu/Ubuntu-Light.ttf"),
    ubuntuLightItalic: require("./assets/fonts/Ubuntu/Ubuntu-LightItalic.ttf"),
    ubuntuMedium: require("./assets/fonts/Ubuntu/Ubuntu-Medium.ttf"),
    ubuntuMediumItalic: require("./assets/fonts/Ubuntu/Ubuntu-MediumItalic.ttf"),
    ubuntuBold: require("./assets/fonts/Ubuntu/Ubuntu-Bold.ttf"),
    ubuntuBoldItalic: require("./assets/fonts/Ubuntu/Ubuntu-BoldItalic.ttf"),
  });

  return (
    <PaperProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <MyGlobalContext.Provider value={{ Ubuntu_FontLoaded }}>
          <SafeAreaView style={styles.container}>
            <StatusBar
              barStyle={"dark-content"}
              backgroundColor={"#fff"}
              hidden
            />
            <MainNavigator />
          </SafeAreaView>
        </MyGlobalContext.Provider>
      </ThemeProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
