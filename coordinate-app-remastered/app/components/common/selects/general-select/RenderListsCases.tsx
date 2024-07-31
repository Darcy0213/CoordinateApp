'use client'
import { CoorListItem, CoorListTreeItem } from '@common/lists'
import { List, Stack, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import { CategoryTypeOption } from './GeneralSelectBody'
import RenderOption from './RenderOptions'

interface Props {
	value: string[] | string | number[] | number | null
	options: CategoryTypeOption[]
	itemType: 'simpleIcon' | 'squareIconChip' | 'chip' | 'custom'
	handleChangeValue: (newValue: string | number | string[] | number[]) => void
	customOption?: any
	gap?: boolean
	level?: number //This is used to indent the options in the tree and know the level of the option
}
export default function RenderListsOptions({ value, handleChangeValue, options, itemType, customOption, gap, level = 0 }: Props) {
	//MUI active theme
	const theme = useTheme()

	return (
		<List sx={{ padding: 0, margin: 0 }}>
			{options?.map((option, index: number) => {
				//Check if the value is an array or a single value
				const valueArr = Array.isArray(value) ? (value as (string | number)[]) : []

				//Check if the option is active
				const active = valueArr?.includes(option.id as string | number) || value === option.id ? true : false

				//Check if the option is a tree with sub options
				const isTree = option?.subOptions && option?.subOptions?.length > 0

				return (
					// item container and click action
					isTree ? (
						<CoorListTreeItem
							key={`${option.id}-${index}`}
							value={value}
							option={option}
							active={active}
							itemType={itemType}
							handleChangeValue={handleChangeValue}
							gap={gap}
							level={level}
							{...(customOption && { customOption: customOption })}
						/>
					) : (
						<CoorListItem
							key={`${option.id}-${index}`}
							gap={gap}
							onClick={() => {
								handleChangeValue(option?.id)
							}}
						>
							<Stack
								direction="row"
								gap={theme.dimensions.common.spacing.md}
								alignItems={'center'}
								width="100%"
							>
								<Box minWidth={level === 0 ? 0 : 24 * (level + 1)}></Box>
								<RenderOption
									option={option}
									active={active}
									itemType={itemType}
									{...(customOption && { customOption: customOption })}
								/>
							</Stack>
						</CoorListItem>
					)
				)
			})}
		</List>
	)
}
