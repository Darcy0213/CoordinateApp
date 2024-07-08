import { TypographyVariantsOptions } from '@mui/material/styles'

import { FontFamily } from '@components/customization/types'
import { typography } from '../referenceTokens/typography'

const Typography = (fontFamily: FontFamily, tablet: boolean, laptopDesktop: boolean): TypographyVariantsOptions => {
	return {
		fontFamily,
		'sys.typo.h1': laptopDesktop ? typography['40-48.semibold.16'] : tablet ? typography['38-44.semibold.114'] : typography['30-40.semibold.06'],
		'sys.typo.h2': laptopDesktop ? typography['30-32.semibold.3'] : tablet ? typography['28-30.semibold.056'] : typography['26-30.semibold.052'],
		'sys.typo.h3': laptopDesktop ? typography['24-28.semibold.048'] : tablet ? typography['22-26.semibold.044'] : typography['20-24.semibold.02'],
		'sys.typo.h4': laptopDesktop ? typography['20-24.semibold.02'] : tablet ? typography['18-22.semibold.018'] : typography['18-22.semibold.018'],
		'sys.typo.h5': laptopDesktop ? typography['20-24.regular.2'] : tablet ? typography['18-22.regular.018'] : typography['18-22.regular.018'],
		'sys.typo.t1': laptopDesktop ? typography['16-20.semibold.0'] : tablet ? typography['16-20.semibold.0'] : typography['14-20.semibold.0'],
		'sys.typo.t2': laptopDesktop ? typography['16-20.regular.0'] : tablet ? typography['16-20.regular.0'] : typography['14-20.semibold.0'],
		'sys.typo.st1': laptopDesktop ? typography['14-16.regular.0'] : tablet ? typography['14-16.regular.0'] : typography['12-16.regular.0'],
		'sys.typo.st2': laptopDesktop ? typography['12-16.regular.0'] : tablet ? typography['12-14.regular.0'] : typography['10-14.regular.0'],
		'sys.typo.st3': laptopDesktop ? typography['10-12.regular.0'] : tablet ? typography['10-12.regular.0'] : typography['10-12.regular.0'],
		'sys.typo.st2_semibold': laptopDesktop
			? typography['12-16.semibold.0']
			: tablet
			? typography['12-14.semibold.0']
			: typography['10-14.semibold.0'],
		'sys.typo.st1_semibold': laptopDesktop ? typography['14-16.semibold.0'] : tablet ? typography['14-16.semibold.0'] : typography['12-16.semibold.0']
	}
}

export default Typography
