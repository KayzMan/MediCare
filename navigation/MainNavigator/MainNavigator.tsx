import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// 👇 theme
import { theme } from "../../theme";

// 👇 utilities
import { get_common_mainStackOptions } from "../../utilities/props.utility";

// 👇 screens
import OnBoarding from "../../screens/OnBoarding/OnBoarding";
import Login from "../../screens/Registration/Login/Login";
import SignUp from "../../screens/Registration/SignUp/SignUp";
import ForgotPassword from "../../screens/Registration/ForgotPassword/ForgotPassword";
import BottomTabs from "../BottomTabs/BottomTabs";

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ ...get_common_mainStackOptions() }}>
        <Stack.Screen
          name="onBoardingScreen"
          component={OnBoarding}
          options={{
            title: "OnBoarding | MediCare",
            headerTitle: "OnBoarding | MediCare",
          }}
        />

        <Stack.Screen
          name="loginScreen"
          component={Login}
          options={{
            title: "Login | MediCare",
            headerTitle: "Login | MediCare",
          }}
        />

        <Stack.Screen
          name="signUpScreen"
          component={SignUp}
          options={{
            title: "SignUp | MediCare",
            headerTitle: "SignUp | MediCare",
          }}
        />

        <Stack.Screen
          name="forgotPasswordScreen"
          component={ForgotPassword}
          options={{
            title: "Forgot Password | MediCare",
            headerTitle: "Forgot Password | MediCare",
          }}
        />

        <Stack.Screen
          name="bottomTabsScreen"
          component={BottomTabs}
          options={{
            title: "Bottom Tabs | MediCare",
            headerTitle: "Bottom Tabs | MediCare",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}