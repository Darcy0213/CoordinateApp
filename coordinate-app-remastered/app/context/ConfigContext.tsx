'use client'
import React, { createContext, ReactNode, useCallback, useContext } from 'react'

// types

import { CustomizationProps, FontFamily, I18n, PresetColor, ThemeMode } from '@globalTypes/customization'
import useLocalStorage from '@hooks/useLocalStorage'
import { defaultCustomization } from '@globalTypes/config'

// initial state
const initialState: CustomizationProps = {
	...defaultCustomization,
	onChangeLocalization: () => {},
	onChangeMode: () => {},
	onChangePresetColor: () => {},
	onChangeFontFamily: () => {}
}

// Create the context
const ConfigContext = createContext<CustomizationProps>(initialState)

type ConfigProviderProps = {
	children: ReactNode
}

const ConfigProvider: React.FC<ConfigProviderProps> = ({ children }) => {
	const [configState, setConfigState] = useLocalStorage<CustomizationProps>('coordinate-app-config', initialState)

	const onChangeLocalization = useCallback(
		(lang: I18n) => {
			setConfigState((prevState: CustomizationProps) => ({ ...prevState, i18n: lang }))
		},
		[setConfigState]
	)

	const onChangeMode = useCallback(
		(mode: ThemeMode) => {
			setConfigState((prevState: CustomizationProps) => ({
				...prevState,
				mode
			}))
		},
		[setConfigState]
	)

	const onChangePresetColor = useCallback(
		(theme: PresetColor) => {
			setConfigState((prevState: CustomizationProps) => ({
				...prevState,
				presetColor: theme
			}))
		},
		[setConfigState]
	)

	const onChangeFontFamily = useCallback(
		(fontFamily: FontFamily) => {
			setConfigState((prevState: CustomizationProps) => ({
				...prevState,
				fontFamily
			}))
		},
		[setConfigState]
	)

	return (
		<ConfigContext.Provider
			value={{
				...configState,
				onChangeLocalization,
				onChangeMode,
				onChangePresetColor,
				onChangeFontFamily
			}}
		>
			{children}
		</ConfigContext.Provider>
	)
}

const useConfigContext = () => useContext(ConfigContext)

export { ConfigProvider, useConfigContext }
