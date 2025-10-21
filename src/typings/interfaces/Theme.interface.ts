export interface ThemeColors {
  primary: string;
  secondary: string;
  black: string;
  white: string;
}

export interface ThemeFontSizes {
  body: string;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
}

export interface Theme {
  colors: ThemeColors;
  fonts: {
    sizes: ThemeFontSizes;
  };
}
