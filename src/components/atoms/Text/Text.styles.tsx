import { ThemeColors } from "@/typings";
import { Animated } from "react-native";
import styled, { css } from "styled-components/native";
import { TextProps } from "./Text";

export const thmeColor = css<{ color?: keyof ThemeColors }>`
  color: ${({ theme, color }) => theme.colors[color || "black"]};
`;

export const Text = styled(Animated.Text)<Partial<TextProps>>`
  font-size: ${({ size, theme }) => theme.fonts.sizes[size || "body"]};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  color: ${({ color, theme }) => theme.colors[color || "black"]};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};
`;
