import { Divider, useTheme } from '@mui/material'
import React from 'react'

const MenuDivider: React.FC = () => {
	const theme = useTheme()
	return <Divider sx={{ height: '1px', borderColor: theme.palette.sys_primary.outline.lowest }} />
}

export default MenuDivider
