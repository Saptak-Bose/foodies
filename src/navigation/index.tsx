import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "@features/auth/splash-screen";
import LoginScreen from "@features/auth/login-screen";
import { navigationRef } from "@utils/navigation-utils";

type Props = object;

const Stack = createNativeStackNavigator();

const Navigation = (props: Props) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          options={{
            animation: "fade",
          }}
          name="LoginScreen"
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
