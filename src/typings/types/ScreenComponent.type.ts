import { ParamListBase, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Screen } from "../enums";

interface TypedStackNavigationProps extends StackNavigationProp<any, Screen> {
  navigate: (
    route:
      | Screen
      | {
          key: string;
          params?: ParamListBase[Screen];
        }
      | {
          name: Screen;
          key?: string;
          params: ParamListBase[Screen];
        }
  ) => void;
}

type Props<T = string> = {
  route: RouteProp<any, T>;
  navigation: TypedStackNavigationProps;
};

export type ScreenComponent<T = Screen> = React.FC<Props<T>>;
