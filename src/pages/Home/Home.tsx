import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScreenComponent } from "@/typings";
import { Games, League, Profile } from "./pages";

const Tab = createBottomTabNavigator();

export const Home: ScreenComponent = ({ navigation }) => {
  navigation.setOptions({ headerTitle: "Test " });
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Games"
        component={Games}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="football-helmet"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="League"
        component={League}
        options={{
          title: "My League",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="account-group"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "My Profile",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="face-profile"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
