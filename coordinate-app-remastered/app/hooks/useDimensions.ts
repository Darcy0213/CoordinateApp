import { useMemo } from 'react'

import * as SystemTokens from '@theme/systemTokens'
import * as Dimensions from '@theme/systemTokens/dimensions'

export default function useDimensions(mobile: boolean, tablet: boolean, laptopDesktop: boolean, onlyDesktop: boolean, onlyLaptop: boolean) {
	return {
		themeRadius: useMemo(() => Dimensions.Radius(), []),
		themeSwitchWidth: useMemo(() => Dimensions.SwitchWidth(), []),
		themeSwitchHeight: useMemo(() => Dimensions.SwitchHeight(), []),
		themeSwitchPadding: useMemo(() => Dimensions.SwitchPadding(), []),
		themeFramePadding: useMemo(() => Dimensions.FramePadding(), []),
		themeFrameSpacing: useMemo(() => Dimensions.FrameSpacing(), []),
		themeFrameWidth: useMemo(() => Dimensions.FrameWidth(), []),
		themeAvatarWidth: useMemo(() => Dimensions.AvatarWidth(), []),
		themeAvatarHeight: useMemo(() => Dimensions.AvatarHeight(), []),
		themeCellPadding: useMemo(() => Dimensions.CellPadding(), []),
		themeCellSpacing: useMemo(() => Dimensions.CellSpacing(), []),
		themeCellWidth: useMemo(() => Dimensions.CellWidth(), []),
		themeCellHeight: useMemo(() => Dimensions.CellHeight(), []),
		themePagePadding: useMemo(() => Dimensions.PagePadding(), []),
		themePageWidth: useMemo(() => Dimensions.PageWidth(onlyLaptop, onlyDesktop, tablet), [onlyLaptop, onlyDesktop, tablet]),
		themePageSpacing: useMemo(() => Dimensions.PageSpacing(), []),
		themeScreenPadding: useMemo(() => Dimensions.ScreenPadding(laptopDesktop, tablet), [laptopDesktop, tablet]),
		themeScreenWidth: useMemo(() => Dimensions.ScreenWidth(laptopDesktop, tablet), [laptopDesktop, tablet]),
		themeScreenSpacing: useMemo(() => Dimensions.ScreenSpacing(laptopDesktop), [laptopDesktop]),
		themeModalWidth: useMemo(() => Dimensions.ModalsWidth(laptopDesktop), [laptopDesktop]),
		themeModalHeight: useMemo(() => Dimensions.ModalsHeight(), []),
		themeModalPadding: useMemo(() => Dimensions.ModalPadding(), []),
		themeModalSpacing: useMemo(() => Dimensions.ModalSpacing(), []),
		themeDrawerWidth: useMemo(() => Dimensions.DrawerWidth(), []),
		themeDrawerSpacing: useMemo(() => Dimensions.DrawerSpacing(), []),
		themeDrawerPadding: useMemo(() => Dimensions.DrawerPadding(), []),
		themeCommonHeight: useMemo(() => SystemTokens.CommonHeight(), []),
		themeCommonPadding: useMemo(() => SystemTokens.CommonPadding(), []),
		themeCommonPaddingNonSide: useMemo(() => SystemTokens.CommonPaddingNonSide(), []),
		themeCommonSpacing: useMemo(() => SystemTokens.CommonSpacing(), []),
		themeCommonWidth: useMemo(() => SystemTokens.CommonWidth(), []),
		themeButtonChipPadding: useMemo(() => Dimensions.ButtonChipPadding(), []),
		themeButtonChipSpacing: useMemo(() => Dimensions.ButtonChipSpacing(), []),
		themeButtonChipPaddingNonSide: useMemo(() => Dimensions.ButtonChipPaddingNonSide(), []),
		themeIconWidth: useMemo(() => Dimensions.IconWidth(), []),
		themeIconHeight: useMemo(() => Dimensions.IconHeight(), [])
	}
}
