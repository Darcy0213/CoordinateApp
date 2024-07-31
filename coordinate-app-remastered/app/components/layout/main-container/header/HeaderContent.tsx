'use client'
import { OpenNavButton, SaveIndicator, ShareButton } from '@components/layout/header-components'
import { Box, Theme } from '@mui/material'
import { CloudStatusType, GeneralCloudStatus } from 'app/recoil/atoms'
import { useRecoilState } from 'recoil'

interface HeaderContentProps {
	theme: Theme
}

const HeaderContent: React.FC<HeaderContentProps> = ({ theme }) => {
	const [cloudStatus] = useRecoilState<CloudStatusType>(GeneralCloudStatus)
	return (
		<Box
			display={'flex'}
			gap={theme.dimensions.frame.spacing.md}
			alignItems={'center'}
			flexDirection={'row'}
		>
			<OpenNavButton />
			<SaveIndicator status={'saved'} />
			<ShareButton />
		</Box>
	)
}

export default HeaderContent
