import React, { FC, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "@/style";
import { User, UserRole } from "@/typings";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { Auth, Draft, Home, Error, Admin, Manage } from "./pages";

const Stack = createStackNavigator();

export const App: FC = () => {
  // @todo replace with auth checking
  const [user, setUser] = useState<User>({
    name: {
      first: "John",
      last: "Doe",
    },
    phoneNumber: "+18176004439",
    role: UserRole.User,
    leagues: [],
  });

  if (typeof user === "undefined") return <AppLoading />;

  console.log("Got user", user);
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={user.role ? "Home" : "Auth"}>
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Draft" component={Draft} />
            <Stack.Screen name="Error" component={Error} />
            <Stack.Screen name="Home" component={Home} />
            {user.role === UserRole.Owner && (
              <Stack.Screen name="Admin" component={Admin} />
            )}
            {user.role !== UserRole.User && user.leagues.length && (
              <Stack.Screen name="Manage" component={Manage} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};
