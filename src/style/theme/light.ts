import { Theme } from "@/typings";
import { theme } from "./theme";

export const light: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    black: "#123",
  },
};
