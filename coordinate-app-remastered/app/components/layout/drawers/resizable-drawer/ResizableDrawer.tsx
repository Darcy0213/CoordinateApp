'use client'
import styled from '@emotion/styled'
import { Theme } from '@mui/material/styles'
import { removePxString } from '@utils/other'
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

interface ResizableDrawerProps {
	children?: React.ReactNode
	theme: Theme
}
export const ResizableDrawer: React.FC<ResizableDrawerProps> = ({ children, theme }) => {
	const initialWidth = removePxString(theme.dimensions.drawer.width.min)
	const minWidth = removePxString(theme.dimensions.drawer.width.min)
	const maxWidth = removePxString(theme.dimensions.drawer.width.max)

	const [drawerWidth, setDrawerWidth] = useState(initialWidth)
	const [isResizing, setIsResizing] = useState(false)

	//Function to handle the mousedown event
	const handleMouseDown = () => {
		setIsResizing(true)
	}

	//Function to handle the mousemove event
	const handleMouseMove = (event: MouseEvent) => {
		if (!isResizing) return
		//Calculating the new width of the drawer based on the mouse position
		const newWidth = window.innerWidth - event.clientX
		//Checking if the new width is within the min and max width of the drawer
		if (newWidth >= minWidth && newWidth <= maxWidth) {
			setDrawerWidth(newWidth)
		}
	}

	//Function to handle the mouseup event
	const handleMouseUp = () => {
		setIsResizing(false)
	}

	useEffect(() => {
		// Add event listeners for mouse events when resizing the drawer
		//Mousemove event is used to resize the drawer width based on the mouse position
		document.addEventListener('mousemove', handleMouseMove)
		//Mouseup event is used to stop resizing the drawer width when the mouse is released
		document.addEventListener('mouseup', handleMouseUp)
		//Cleanup function to remove the event listeners when the component is unmounted
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
			{children}
		</ResizableDrawerStyled>
	)
}
