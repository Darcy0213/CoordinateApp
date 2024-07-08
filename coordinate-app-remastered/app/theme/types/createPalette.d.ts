import "@mui/material/styles";
// eslint-disable-next-line

import {
  AlertColorsProps,
  BackgroundColorsProps,
  ChipColorsProps,
  ColorStatesProps,
  CustomPaletteProps,
  MainColorsProps,
  OutlineColorsProps,
  PrimaryColorsProps,
  SecondaryColorsProps,
  SurfaceColorsProps,
  TertiaryColorsProps,
} from "./theme";

declare module "@mui/material/styles" {
  interface CoordinatePaletteColorOptions {
    0?: string;
    25?: string;
    35?: string;
    75?: string;
    60?: string;
    80?: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    "400-30%"?: string;
    "400-50%"?: string;
    500: string;
    "500-30%"?: string;
    "500-50%"?: string;
    600: string;
    700: string;
    "700-30%"?: string;
    "700-50%"?: string;
    800: string;
    "800-30%"?: string;
    "800-50%"?: string;
    900: string;
    950?: string;
    1000?: string;
  }

  export interface SysCustomPalette {
    low: {
      "50%": string;
      "30%": string;
      normal: string;
    };
    medium: {
      "50%": string;
      "30%": string;
      normal: string;
    };
    high: {
      "50%": string;
      "30%": string;
      normal: string;
    };
    softest: {
      normal: string;
    };
    soft: {
      normal: string;
    };
    intermediate: {
      normal: string;
    };
    lowest: {
      normal: string;
    };
    medium: {
      "50%": string;
      "30%": string;
      normal: string;
    };

    outline: {
      medium: string;
      high: string;
      low: string;
    };
  }

  export interface Palette {
    blue?: PaletteColor;
    red?: PaletteColor;
    yellow?: PaletteColor;
    cyan?: PaletteColor;
    magenta?: PaletteColor;
    green?: PaletteColor;
    sys_gray?: PaletteColor;
    lime?: PaletteColor;
    orange?: PaletteColor;
    purple?: PaletteColor;
    state: ColorStatesProps;
    surface: SurfaceColorsProps;
    bckg: BackgroundColorsProps;
    chip: ChipColorsProps;
    alert: AlertColorsProps;
    sys_primary: PrimaryColorsProps;
    sys_secondary: SecondaryColorsProps;
    sys_tertiary: TertiaryColorsProps;
    outline: OutlineColorsProps;
    custom_palette: CustomPaletteProps;
    main: MainColorsProps;
  }

  export interface PaletteOptions {
    state: ColorStatesProps;
    surface: SurfaceColorsProps;
    bckg: BackgroundColorsProps;
    chip: ChipColorsProps;
    alert: AlertColorsProps;
    sys_primary: PrimaryColorsProps;
    sys_secondary: SecondaryColorsProps;
    sys_tertiary: TertiaryColorsProps;
    outline: OutlineColorsProps;
    custom_palette: CustomPaletteProps;
    main: MainColorsProps;
  }
}
