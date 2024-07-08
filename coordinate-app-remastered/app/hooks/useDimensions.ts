import { useMemo } from 'react'

import * as SystemTokens from '@theme/systemTokens'
import * as Dimensions from '@theme/systemTokens/dimensions'

export default function useDimensions(mobile: boolean, tablet: boolean, laptopDesktop: boolean, onlyDesktop: boolean, onlyLaptop: boolean) {
	return {
		themeRadius: useMemo(() => Dimensions.Radius(), []),
		themeElementWidth: useMemo(() => Dimensions.ElementWidth(mobile, tablet, laptopDesktop), [mobile, tablet, laptopDesktop]),
		themeElementPadding: useMemo(() => Dimensions.ElementPadding(laptopDesktop, onlyDesktop, onlyLaptop), [laptopDesktop, onlyDesktop, onlyLaptop]),
		themeElementSpacing: useMemo(
			() => Dimensions.ElementSpacing(mobile, laptopDesktop, onlyDesktop, onlyLaptop),
			[mobile, laptopDesktop, onlyDesktop, onlyLaptop]
		),
		themeElementHeight: useMemo(() => Dimensions.ElementHeight(mobile, tablet, laptopDesktop), [mobile, tablet, laptopDesktop]),
		themeSwitchWidth: useMemo(() => Dimensions.SwitchWidth(laptopDesktop, mobile, tablet), [laptopDesktop, mobile, tablet]),
		themeSwitchHeight: useMemo(() => Dimensions.SwitchHeight(laptopDesktop, mobile, tablet), [laptopDesktop, mobile, tablet]),
		themeSwitchPadding: useMemo(() => Dimensions.SwitchPadding(laptopDesktop, mobile), [laptopDesktop, mobile]),
		themeLayoutPadding: useMemo(() => Dimensions.LayoutPadding(mobile, tablet, laptopDesktop), [mobile, tablet, laptopDesktop]),
		themeLayoutSpacing: useMemo(() => Dimensions.LayoutSpacing(mobile, tablet, laptopDesktop), [mobile, tablet, laptopDesktop]),
		themeFramePadding: useMemo(() => Dimensions.FramePadding(onlyLaptop, laptopDesktop, onlyDesktop), [onlyLaptop, laptopDesktop, onlyDesktop]),
		themeFrameSpacing: useMemo(() => Dimensions.FrameSpacing(mobile, tablet, laptopDesktop), [mobile, tablet, laptopDesktop]),
		themeAvatarWidth: useMemo(() => Dimensions.AvatarWidth(laptopDesktop), [laptopDesktop]),
		themeAvatarHeight: useMemo(() => Dimensions.AvatarHeight(laptopDesktop), [laptopDesktop]),
		themeIconButtonPadding: useMemo(() => Dimensions.IconButtonPadding(mobile, laptopDesktop), [mobile, laptopDesktop]),
		themeButtonHorizontalPadding: useMemo(
			() => Dimensions.ButtonHorizontalPadding(laptopDesktop, mobile, onlyDesktop, tablet),
			[laptopDesktop, mobile, onlyDesktop, tablet]
		),
		themeButtonVerticalPadding: useMemo(() => Dimensions.ButtonVerticalPadding(mobile, onlyDesktop), [mobile, onlyDesktop]),
		themeCellPadding: useMemo(() => Dimensions.CellPadding(laptopDesktop), [laptopDesktop]),
		themeCellSpacing: useMemo(() => Dimensions.CellSpacing(laptopDesktop), [laptopDesktop]),
		themeCellWidth: useMemo(() => Dimensions.CellWidth(laptopDesktop), [laptopDesktop]),
		themeCellHeight: useMemo(() => Dimensions.CellHeight(), []),
		themePagePadding: useMemo(() => Dimensions.PagePadding(laptopDesktop, tablet, mobile), [laptopDesktop, tablet, mobile]),
		themePageWidth: useMemo(() => Dimensions.PageWidth(onlyLaptop, onlyDesktop, tablet), [onlyLaptop, onlyDesktop, tablet]),
		themePageSpacing: useMemo(() => Dimensions.PageSpacing(laptopDesktop, tablet, mobile), [laptopDesktop, tablet, mobile]),
		themeScreenPadding: useMemo(() => Dimensions.ScreenPadding(laptopDesktop, tablet), [laptopDesktop, tablet]),
		themeScreenWidth: useMemo(() => Dimensions.ScreenWidth(laptopDesktop, tablet), [laptopDesktop, tablet]),
		themeScreenSpacing: useMemo(() => Dimensions.ScreenSpacing(laptopDesktop), [laptopDesktop]),
		themeModalWidth: useMemo(() => Dimensions.ModalsWidth(laptopDesktop), [laptopDesktop]),
		themeDrawerWidth: useMemo(() => Dimensions.DrawerWidth(laptopDesktop), [laptopDesktop]),

		themeModalElevation: useMemo(() => Dimensions.ModalElevation(), []),

		themeTextIconGap: useMemo(() => Dimensions.TextIconGap(laptopDesktop), [laptopDesktop]),
		themeBackground: useMemo(() => SystemTokens.Background(), []),
		themeElevation: useMemo(() => SystemTokens.Elevation(), [])
	}
}
