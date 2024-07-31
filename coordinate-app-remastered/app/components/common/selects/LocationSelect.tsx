'use client'
import { PopperContainerStyled } from '@common/poppers'
import { WorkspaceOption } from '@globalTypes/workspaces'
import { ClickAwayListener, Popper, useTheme } from '@mui/material'
import { LocationInfo } from 'app/recoil/atoms'
import { useEffect, useState } from 'react'
import { SetterOrUpdater } from 'recoil'
import { CategoryType, GeneralSelectBody } from './general-select'

interface Props {
	selected: LocationInfo
	setSelected: SetterOrUpdater<LocationInfo>
	parent: React.RefObject<HTMLDivElement>
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function LocationSelect({ open, setOpen, selected, setSelected, parent }: Props) {
	const theme = useTheme()

	//Handler popper close event
	const handleClickAway = () => {
		setOpen(false)
	}

	const workspacesList = JSON.parse(localStorage.getItem('workspacesList') || '[]') as WorkspaceOption[]

	//Handler to select the object type
	const handleSelection = (id: string) => {
		const selected = workspacesList.find((option) => option.id === id)
		if (selected) {
			setSelected({
				entity: 'workspace',
				id: selected.id,
				icon: selected.icon,
				color: selected.color,
				name: selected.name,
				personRole: selected?.personRole
			} as LocationInfo)
		}
	}

	const [width, setWidth] = useState<number | undefined>(parent?.current?.offsetWidth)

	useEffect(() => {
		setWidth(parent?.current?.offsetWidth)
	}, [selected])

	const categories: CategoryType[] = [
		{
			name: '',
			listItemType: 'squareIconChip',
			options: workspacesList
		}
	]

	return (
		<ClickAwayListener onClickAway={handleClickAway}>
			<Popper
				className="simple-popper"
				open={open}
				placement={'bottom-start'}
				anchorEl={parent.current}
				sx={{ zIndex: 1306, width: width }}
				modifiers={[
					{
						name: 'offset',
						options: {
							offset: [0, 3]
						}
					}
				]}
			>
				<PopperContainerStyled theme={theme}>
					<GeneralSelectBody
						value={selected?.id || ''}
						setValue={handleSelection}
						categories={categories}
						searchPlaceholder="Search something"
						gap
					/>
				</PopperContainerStyled>
			</Popper>
		</ClickAwayListener>
	)
}
