import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// 👇 theme
import { theme } from "../../theme";

// 👇 utilities
import { get_common_mainStackOptions } from "../../utilities/props.utility";

// 👇 screens
import OnBoarding from "../../screens/OnBoarding/OnBoarding";

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ ...get_common_mainStackOptions() }}>
        <Stack.Screen name="onBoardingScreen" component={OnBoarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
