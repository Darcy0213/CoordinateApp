'use client'
import { CoorIconButton } from '@common/buttons'
import { CategoryTypeOption, isValueInCategories, RenderListsOptions, RenderOption } from '@common/selects'
import { Box, Collapse, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useEffect, useState } from 'react'

interface Props {
	value: string[] | string | number[] | number | null
	option: CategoryTypeOption
	active: boolean
	itemType: 'simpleIcon' | 'squareIconChip' | 'chip' | 'custom'
	customOption?: any
	handleChangeValue: (newValue: string | number | string[] | number[]) => void
	gap?: boolean
	level?: number
}

export default function CoorListTreeItem({ value, option, active, itemType, customOption, handleChangeValue, gap, level = 0 }: Props) {
	//MUI active theme
	const theme = useTheme()

	//State to expand or collapse the sub options tree
	const [expand, setExpand] = useState(false)

	//Effect to set the expand state based on the value and the sub options
	useEffect(() => {
		setExpand(isValueInCategories(option?.subOptions ?? [], value))
	}, [value])

	return (
		<Stack direction="column">
			<Stack
				direction="row"
				gap={theme.dimensions.common.spacing.md}
				alignItems={'center'}
				sx={{
					margin: 0,
					padding: theme.dimensions.common.padding.md,
					width: '100%',
					height: 'fit-content',
					display: 'flex',
					alignItems: 'center',
					'&:hover': {
						background: theme.palette.state.hover,
						cursor: 'pointer !important'
					},
					borderRadius: theme.dimensions.radius.md,
					...(gap && { marginBottom: theme.dimensions.frame.spacing.md })
				}}
				onClick={() => {
					handleChangeValue(option?.id)
				}}
			>
				<Box minWidth={24 * level}></Box>
				<CoorIconButton
					intensity="lowest"
					color="main"
					size="xs"
					iconName={!expand ? 'KeyboardArrowRight' : 'KeyboardArrowDown'}
					onClick={(e) => {
						e.stopPropagation()
						setExpand(!expand)
					}}
				/>
				<RenderOption
					option={option}
					active={active}
					itemType={itemType}
					{...(customOption && { customOption: customOption })}
				/>
			</Stack>
			<Collapse
				in={expand}
				timeout="auto"
				unmountOnExit
			>
				<Box padding={theme.dimensions.common.padding.md}>
					<RenderListsOptions
						value={value}
						handleChangeValue={handleChangeValue}
						options={option?.subOptions ?? []}
						itemType={itemType}
						customOption={customOption}
						gap={gap}
						level={level + 1}
					/>
				</Box>
			</Collapse>
		</Stack>
	)
}
