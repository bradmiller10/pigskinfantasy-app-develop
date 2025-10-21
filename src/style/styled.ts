import { createElement, FC } from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider as SThemeProvider } from "styled-components/native";
import * as themes from "./theme";

/**
 * Nice wrapper over ThemeProvider for loading the appropriate theme based on the users device settings
 *
 * @param props
 * @returns
 * @author jordanskomer
 * @since 0.0.1
 */
export const ThemeProvider: FC = (props) => {
  const colorScheme = useColorScheme();
  return createElement(SThemeProvider, {
    ...props,
    theme: themes[colorScheme || "theme"],
  });
};
