"use client";
import { ReactNode, useMemo } from "react";

import {
  CssBaseline,
  StyledEngineProvider,
  useMediaQuery,
} from "@mui/material";
import {
  Theme,
  ThemeOptions,
  ThemeProvider,
  TypographyVariantsOptions,
  createTheme,
} from "@mui/material/styles";

import Palette from "./palette";

import { useConfigContext } from "@context/ConfigContext";
import useDimensions from "@hooks/useDimensions";
import { Typography } from "./systemTokens";

type ThemeCustomizationProps = {
  children: ReactNode;
};

// ==============================|| DEFAULT THEME - MAIN  ||============================== //

export default function ThemeCustomization({
  children,
}: ThemeCustomizationProps) {
  const { mode, presetColor, fontFamily } = useConfigContext();

  const theme: Theme = useMemo<Theme>(
    () => Palette(mode, presetColor),
    [mode, presetColor]
  );
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const tablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const laptopDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const onlyDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const onlyLaptop = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const Dimensions = useDimensions(
    mobile,
    tablet,
    laptopDesktop,
    onlyDesktop,
    onlyLaptop
  );

  const themeTypography: TypographyVariantsOptions =
    useMemo<TypographyVariantsOptions>(
      () => Typography(fontFamily, tablet, laptopDesktop),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [mode, fontFamily, laptopDesktop, tablet]
    );

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
      palette: theme.palette,
      typography: themeTypography,
      elevation: Dimensions.themeElevation,
      modal: Dimensions.themeModalElevation,
      background: Dimensions.themeBackground,
      dimensions: {
        radius: Dimensions.themeRadius,
        layout: {
          padding: Dimensions.themeLayoutPadding,
          spacing: Dimensions.themeLayoutSpacing,
        },
        frame: {
          padding: Dimensions.themeFramePadding,
          spacing: Dimensions.themeFrameSpacing,
        },
        cell: {
          padding: Dimensions.themeCellPadding,
          spacing: Dimensions.themeCellSpacing,
          height: Dimensions.themeCellHeight,
          width: Dimensions.themeCellWidth,
        },
        page: {
          padding: Dimensions.themePagePadding,
          width: Dimensions.themePageWidth,
          spacing: Dimensions.themePageSpacing,
        },
        screen: {
          padding: Dimensions.themeScreenPadding,
          spacing: Dimensions.themeScreenSpacing,
          width: Dimensions.themeScreenWidth,
        },
        modal: {
          width: Dimensions.themeModalWidth,
        },
        drawer: {
          width: Dimensions.themeDrawerWidth,
        },

        element: {
          width: Dimensions.themeElementWidth,
          padding: Dimensions.themeElementPadding,
          spacing: Dimensions.themeElementSpacing,
          height: Dimensions.themeElementHeight,
          switch: {
            width: Dimensions.themeSwitchWidth,
            padding: Dimensions.themeSwitchPadding,
            height: Dimensions.themeSwitchHeight,
          },
          avatar: {
            width: Dimensions.themeAvatarWidth,
            height: Dimensions.themeAvatarHeight,
          },
          iconButton: {
            padding: Dimensions.themeIconButtonPadding,
          },
          buttonTextIcon: {
            padding: {
              horizontal: Dimensions.themeButtonHorizontalPadding,
              vertical: Dimensions.themeButtonVerticalPadding,
            },
          },
          iconText: {
            gap: Dimensions.themeTextIconGap,
          },
        },
      },
    }),
    [theme, themeTypography, Dimensions]
  );

  const themes: Theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
