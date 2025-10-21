import { Theme } from "@/typings";
import { theme } from "./theme";

export const dark: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: "red",
    black: "#000",
  },
};
