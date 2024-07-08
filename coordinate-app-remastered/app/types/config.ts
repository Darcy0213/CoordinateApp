// types

import { DefaultConfigProps } from './customization'

export const JWT_API = {
	secret: 'SECRET-KEY',
	timeout: '7 days'
}

export const defaultCustomization: DefaultConfigProps = {
	fontFamily: `'Open Sans', sans-serif`,
	i18n: 'en',
	mode: 'light',
	presetColor: 'default'
}
