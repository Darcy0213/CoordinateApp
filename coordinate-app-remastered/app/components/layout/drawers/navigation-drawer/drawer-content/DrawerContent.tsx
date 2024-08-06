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
			flexDirection={'row'}
			display={'flex'}
			height={'-webkit-fill-available'}
			boxShadow={'0px -0.5px 1.5px 0.5px rgba(0, 0, 0, 0.02), 0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 4px 4px 0px rgba(0, 0, 0, 0.08)'}
			borderRadius={theme.dimensions.radius.xl}
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
