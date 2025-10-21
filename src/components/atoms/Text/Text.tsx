import React from "react";
import { Animated, TextStyle } from "react-native";
import { ThemeFontSizes, ThemeColors } from "@/typings";
import * as S from "./Text.styles";

export interface TextProps {
  /**
   * Toggles the text's font family between bold and regular
   * @author shenellepeart
   */
  bold?: boolean;
  /**
   * Sets the font-size based on the theme object
   * @author shenellepeart
   */
  size?: keyof ThemeFontSizes;
  /**
   * Sets the color based on teh theme object
   * @author shenellepeart
   */
  color?: keyof ThemeColors;
  /**
   * Sets teh font-style to italic
   * @author shenellepeart
   */
  italic?: boolean;

  uppercase?: boolean;
  /**
   * The displayed text
   * @author shenellepeart
   */
  children: string | string[];

  animate?: Animated.WithAnimatedObject<TextStyle>;
}

export const Text: React.FC<TextProps> = ({
  bold,
  size,
  color,
  italic,
  children,
  animate,
  uppercase,
}) => (
  <S.Text
    bold={bold}
    size={size}
    color={color}
    italic={italic}
    animate={animate}
    uppercase={uppercase}
    style={animate}
  >
    {children}
  </S.Text>
);
