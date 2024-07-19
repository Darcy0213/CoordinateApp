import styled from '@emotion/styled'
import { useTheme } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import ResizableDrawerStyled from './DrawerStyled'

const Resizer = styled.div`
	width: 10px;
	cursor: ew-resize;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	z-index: 1000;
`

interface ResizableDrawerProps {}
export const ResizableDrawer: React.FC<ResizableDrawerProps> = ({}) => {
	const theme = useTheme()
	const initialWidth = 240
	const minWidth = 300
	const maxWidth = 800

	const [drawerWidth, setDrawerWidth] = useState(initialWidth)
	const [isResizing, setIsResizing] = useState(false)

	const handleMouseDown = () => {
		setIsResizing(true)
	}

	const handleMouseMove = (event: MouseEvent) => {
		if (!isResizing) return
		const newWidth = window.innerWidth - event.clientX
		if (newWidth >= minWidth && newWidth <= maxWidth) {
			setDrawerWidth(newWidth)
		}
	}

	const handleMouseUp = () => {
		setIsResizing(false)
	}

	useEffect(() => {
		document.addEventListener('mousemove', handleMouseMove)
		document.addEventListener('mouseup', handleMouseUp)
		return () => {
			document.removeEventListener('mousemove', handleMouseMove)
			document.removeEventListener('mouseup', handleMouseUp)
		}
	}, [isResizing])

	return (
		<ResizableDrawerStyled
			open
			drawerWidth={drawerWidth}
			anchor="right"
			variant="permanent"
			theme={theme}
			hideBackdrop
		>
			<Resizer onMouseDown={handleMouseDown} />
			<h1>Resizable Drawer</h1>
		</ResizableDrawerStyled>
	)
}
