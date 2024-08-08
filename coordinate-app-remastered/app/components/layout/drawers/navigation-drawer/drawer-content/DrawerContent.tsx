import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useRecoilState } from 'recoil'

import { CommonLocalTabSelected, ExpandedItems, GlobalTabSelected } from 'app/recoil/atoms'

import { GlobalSection } from './global-section'
import { LocalSection } from './local-section'

const DrawerContent = () => {
	const theme = useTheme()
	const [expandedItems, setExpandedItems] = useRecoilState(ExpandedItems)
	const [localTab, setLocalTab] = useRecoilState(CommonLocalTabSelected)
	const [selectedGlobalTab, setSelectedGlobalTab] = useRecoilState(GlobalTabSelected)
	/* console.log('selectedGlobalTab', selectedGlobalTab)
	console.log('localTab', localTab) */

	return (
		<Box
			className="drawer-content"
			flexDirection={'row'}
			display={'flex'}
			height={'-webkit-fill-available'}
			borderRadius={theme.dimensions.radius.xl}
			gap={theme.dimensions.drawer.spacing.xs}
			sx={{ backgroundColor: theme.palette.sys_primary.background.highest }}
		>
			<GlobalSection
				theme={theme}
				setLocalTab={setLocalTab}
				globalTabSelected={selectedGlobalTab}
				setActiveGlobalTab={setSelectedGlobalTab}
			/>
			<LocalSection
				theme={theme}
				localTabSelected={localTab}
				globalTabSelected={selectedGlobalTab}
				setActiveGlobalTab={setSelectedGlobalTab}
				setExpandedItems={setExpandedItems}
				expandedItems={expandedItems}
				setLocalTab={setLocalTab}
			/>
		</Box>
	)
}

export default DrawerContent
