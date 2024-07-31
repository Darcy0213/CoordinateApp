import { Stack, Typography, useTheme } from '@mui/material'
import React from 'react'

import { CoorButton } from '@common/buttons'
import { IconGenerator } from '@common/icons'
import { PopperContainerStyled } from '@common/poppers'
import { ChipColor } from '@globalTypes/general'
import { CategoryType, CategoryTypeOption, GeneralSelectBody } from '../general-select'

export default function SelectsExamples() {
	//#Dummy data
	const options = [
		{
			id: '123467890',
			name: 'Option 1',
			icon: 'AirplaneTicket',
			color: {
				color: 'blue',
				contrast: 'high',
				variant: '100%'
			}
		},
		{
			id: '0987654321',
			name: 'Option 2',
			icon: 'TaskAlt',
			color: {
				color: 'lime',
				contrast: 'low',
				variant: '100%'
			}
		},
		{
			id: '0987612345',
			name: 'Option 3',
			icon: 'MapsHomeWork',
			color: {
				color: 'orange',
				contrast: 'soft',
				variant: 'outline'
			}
		}
	]

	//------------------ SIMPLE SELECT
	const simpleSelectData: CategoryType[] = [
		{
			name: 'Basic',
			listItemType: 'simpleIcon',
			options: options?.map((option: any) => {
				return {
					id: option.id,
					name: option.name
				}
			})
		}
	]
	const [selected1, setSelected1] = React.useState<string>('')
	const [selected2, setSelected2] = React.useState<string[]>([])

	//------------------ SIMPLE ICON SELECT
	const simpleIconSelectData: CategoryType[] = [
		{
			name: '',
			listItemType: 'simpleIcon',
			options: options?.map((option: any) => {
				return {
					id: option.id,
					name: option.name,
					icon: option.icon
				}
			})
		}
	]
	const [selected3, setSelected3] = React.useState<string>('')
	const [selected4, setSelected4] = React.useState<string[]>([])

	//------------------ CHIP SELECT
	const chipSelectData: CategoryType[] = [
		{
			name: '',
			listItemType: 'chip',
			options: options?.map((option: any) => {
				return {
					id: option.id,
					name: option.name,
					color: option.color
				}
			})
		}
	]
	const [selected5, setSelected5] = React.useState<string>('')
	const [selected6, setSelected6] = React.useState<string[]>([])

	//------------------ ICON CHIP SELECT
	const iconChipSelectData: CategoryType[] = [
		{
			name: '',
			listItemType: 'chip',
			options: options?.map((option: any) => {
				return {
					id: option.id,
					name: option.name,
					icon: option.icon,
					color: option.color
				}
			})
		}
	]
	const [selected7, setSelected7] = React.useState<string>('')
	const [selected8, setSelected8] = React.useState<string[]>([])

	//------------------ SQUARE ICON CHIP SELECT
	const squareIconChipSelectData: CategoryType[] = [
		{
			name: '',
			icon: 'EmojiFoodBeverage',
			listItemType: 'squareIconChip',
			options: options?.map((option: any) => {
				return {
					id: option.id,
					name: option.name,
					color: option.color,
					icon: option.icon
				}
			})
		}
	]
	const [selected9, setSelected9] = React.useState<string>('')
	const [selected10, setSelected10] = React.useState<string[]>([])

	//------------------ SELECT WITH SEARCH BAR
	const [selectedSearch, setSelectedSearch] = React.useState<string>('')
	const [selectedSearchMultiple, setSelectedSearchMultiple] = React.useState<string[]>([])

	//------------------ SELECT WITH SPACING ON ITEMS
	const [selectedSpacing, setSelectedSpacing] = React.useState<string>('')

	//------------------ SELECT WITH CATEGORIES

	const simpleCategories: CategoryType[] = [
		{
			name: 'Category 1',
			listItemType: 'simpleIcon',
			options: options?.map((option: any) => {
				return {
					id: option.id,
					name: option.name,
					icon: option.icon
				}
			})
		},
		{
			name: 'Category 2',
			listItemType: 'chip',
			options: options?.map((option: any) => {
				return {
					id: option.id + '2',
					name: option.name,
					color: option.color
				}
			})
		}
	]

	const [selectedSimpleCategory, setSelectedSimpleCategory] = React.useState<string>('')
	const [selectedMultipleCategory, setSelectedMultipleCategory] = React.useState<string[]>([])

	//------------------ SELECT WITH CATEGORIES ICON
	const iconCategories: CategoryType[] = [
		{
			name: 'Category 1',
			icon: 'EmojiFoodBeverage',
			listItemType: 'simpleIcon',
			options: options?.map((option: any) => {
				return {
					id: option.id,
					name: option.name,
					icon: option.icon
				}
			})
		},
		{
			name: 'Category 2',
			icon: 'EmojiFoodBeverage',
			listItemType: 'chip',
			options: options?.map((option: any) => {
				return {
					id: option.id + '2',
					name: option.name,
					color: option.color
				}
			})
		}
	]

	const [selectedIconSimpleCategory, setSelectedIconSimpleCategory] = React.useState<string>('')
	const [selectedIconMultipleCategory, setSelectedIconMultipleCategory] = React.useState<string[]>([])

	//------------------ SELECT WITH CATEGORIES COMBINED
	const combinedCategories: CategoryType[] = [
		{
			name: 'Category 1',
			listItemType: 'simpleIcon',
			options: options?.map((option: any) => {
				return {
					id: option.id,
					name: option.name,
					icon: option.icon
				}
			})
		},
		{
			name: 'Category 2',
			icon: 'AutoAwesome',
			listItemType: 'chip',
			options: options?.map((option: any) => {
				return {
					id: option.id + '2',
					name: option.name,
					color: option.color
				}
			})
		},
		{
			name: 'Category 3',
			icon: 'Camera',
			listItemType: 'squareIconChip',
			options: options?.map((option: any) => {
				return {
					id: option.id + '3',
					name: option.name,
					color: option.color,
					icon: option.icon
				}
			})
		}
	]

	const [selectedCombined, setSelectedCombined] = React.useState<string>('')

	//------------------ SELECT WITH EXTEND COMPONENTES
	const extendCategory: CategoryType[] = [
		{
			name: '',
			listItemType: 'custom',
			options: options?.map((option: any) => {
				return {
					id: option.id,
					name: option.name,
					color: option.color,
					icon: option.icon
				}
			})
		}
	]

	const [selectedExpanded, setSelectedExpanded] = React.useState<string>('')
	const [selectedExpandedMultiple, setSelectedExpandedMultiple] = React.useState<string[]>([])

	//----------------- TREE SELECT

	const treeOptions: CategoryTypeOption[] = [
		{
			id: 71,
			name: 'Option 1',
			color: {
				color: 'green',
				variant: '100%',
				contrast: 'intermediate'
			},
			icon: 'Grass',
			subOptions: [
				{
					id: 127,
					name: 'Sub option 1',
					color: {
						color: 'lime',
						variant: '100%',
						contrast: 'low'
					},
					icon: 'AutoMode',
					subOptions: [
						{
							id: 128,
							name: 'Sub option 1',
							color: {
								color: 'cyan',
								variant: '100%',
								contrast: 'low'
							},
							icon: 'Hive',
							subOptions: [
								{
									id: 129,
									name: 'Sub Option 1',
									color: {
										color: 'yellow',
										variant: '100%',
										contrast: 'low'
									},
									icon: 'OnlinePrediction',
									subOptions: []
								},
								{
									id: 130,
									name: 'Sub sub sub 2',
									color: {
										color: 'yellow',
										variant: '100%',
										contrast: 'low'
									},
									icon: 'Diamond',
									subOptions: []
								}
							]
						}
					]
				}
			]
		},
		{
			id: 73,
			name: 'Option 2',
			color: {
				color: 'purple',
				variant: '100%',
				contrast: 'intermediate'
			},
			icon: 'FilterVintage',
			subOptions: [
				{
					id: 76,
					name: 'Option 1',
					color: {
						color: 'red',
						variant: '100%',
						contrast: 'lowest'
					},
					icon: 'BikeScooter',
					subOptions: [
						{
							id: 77,
							name: 'Option 1',
							color: {
								color: 'purple',
								variant: '100%',
								contrast: 'high'
							},
							icon: 'Adb',
							subOptions: []
						}
					]
				},
				{
					id: 123,
					name: 'Option 2',
					color: {
						color: 'gray',
						variant: '30%',
						contrast: 'low'
					},
					icon: 'HelpIcon',
					subOptions: []
				},
				{
					id: 124,
					name: 'Option 3',
					color: {
						color: 'gray',
						variant: '30%',
						contrast: 'low'
					},
					icon: 'HelpIcon',
					subOptions: []
				}
			]
		},
		{
			id: 74,
			name: 'Option 3',
			color: {
				color: 'red',
				variant: '100%',
				contrast: 'low'
			},
			icon: 'HeartBroken',
			subOptions: []
		}
	]

	const [selectedTree, setSelectedTree] = React.useState<string>('')
	const [selectedTreeMultiple, setSelectedTreeMultiple] = React.useState<number[]>([])

	//MUI active theme
	const theme = useTheme()
	return (
		<Stack
			width="100%"
			display="flex"
			direction="column"
			textAlign="center"
			spacing="40px"
		>
			<Typography variant="h1">Coordinate Selects</Typography>

			<Stack
				display="flex"
				direction="row"
				spacing={'40px'}
			>
				<Stack
					display="flex"
					direction="column"
					spacing={'20px'}
				>
					<Typography variant="h2">Simple</Typography>

					<Stack
						display="flex"
						direction="row"
						spacing={'20px'}
					>
						<Stack width="fit-content">
							<Typography variant="h3">Single</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selected1}
									setValue={setSelected1}
									categories={simpleSelectData}
								/>
							</PopperContainerStyled>
						</Stack>

						<Stack width="fit-content">
							<Typography variant="h3">Multiple</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selected2}
									setValue={setSelected2}
									maxSelection={2}
									categories={simpleSelectData}
								/>
							</PopperContainerStyled>
						</Stack>
					</Stack>
				</Stack>

				<Stack
					display="flex"
					direction="column"
					spacing={'20px'}
				>
					<Typography variant="h2">Simple Icon</Typography>

					<Stack
						display="flex"
						direction="row"
						spacing={'20px'}
					>
						<Stack width="fit-content">
							<Typography variant="h3">Single</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selected3}
									setValue={setSelected3}
									categories={simpleIconSelectData}
								/>
							</PopperContainerStyled>
						</Stack>

						<Stack width="fit-content">
							<Typography variant="h3">Multiple</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selected4}
									setValue={setSelected4}
									maxSelection={2}
									categories={simpleIconSelectData}
								/>
							</PopperContainerStyled>
						</Stack>
					</Stack>
				</Stack>

				<Stack
					display="flex"
					direction="column"
					spacing={'20px'}
				>
					<Typography variant="h2">Chip</Typography>

					<Stack
						display="flex"
						direction="row"
						spacing={'20px'}
					>
						<Stack width="fit-content">
							<Typography variant="h3">Single</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selected5}
									setValue={setSelected5}
									categories={chipSelectData}
								/>
							</PopperContainerStyled>
						</Stack>

						<Stack width="fit-content">
							<Typography variant="h3">Multiple</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selected6}
									setValue={setSelected6}
									maxSelection={2}
									categories={chipSelectData}
								/>
							</PopperContainerStyled>
						</Stack>
					</Stack>
				</Stack>
			</Stack>

			<Stack
				display="flex"
				direction="row"
				spacing={'40px'}
			>
				<Stack
					display="flex"
					direction="column"
					spacing={'20px'}
				>
					<Typography variant="h2">Icon Chip</Typography>

					<Stack
						display="flex"
						direction="row"
						spacing={'20px'}
					>
						<Stack width="fit-content">
							<Typography variant="h3">Single</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selected7}
									setValue={setSelected7}
									categories={iconChipSelectData}
								/>
							</PopperContainerStyled>
						</Stack>

						<Stack width="fit-content">
							<Typography variant="h3">Multiple</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selected8}
									setValue={setSelected8}
									maxSelection={2}
									categories={iconChipSelectData}
								/>
							</PopperContainerStyled>
						</Stack>
					</Stack>
				</Stack>

				<Stack
					display="flex"
					direction="column"
					spacing={'20px'}
				>
					<Typography variant="h2">Square Icon Chip</Typography>

					<Stack
						display="flex"
						direction="row"
						spacing={'20px'}
					>
						<Stack width="fit-content">
							<Typography variant="h3">Single</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selected9}
									setValue={setSelected9}
									categories={squareIconChipSelectData}
								/>
							</PopperContainerStyled>
						</Stack>

						<Stack width="fit-content">
							<Typography variant="h3">Multiple</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selected10}
									setValue={setSelected10}
									maxSelection={2}
									categories={squareIconChipSelectData}
								/>
							</PopperContainerStyled>
						</Stack>
					</Stack>
				</Stack>

				<Stack
					display="flex"
					direction="column"
					spacing={'20px'}
				>
					<Typography variant="h2">Optional Search Bar</Typography>

					<Stack
						display="flex"
						direction="row"
						spacing={'20px'}
					>
						<Stack width="fit-content">
							<Typography variant="h3">Single</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selectedSearch}
									setValue={setSelectedSearch}
									categories={simpleIconSelectData}
									searchPlaceholder="Search for an option"
								/>
							</PopperContainerStyled>
						</Stack>

						<Stack width="fit-content">
							<Typography variant="h3">Multiple</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selectedSearchMultiple}
									setValue={setSelectedSearchMultiple}
									maxSelection={2}
									categories={simpleIconSelectData}
									searchPlaceholder="searchPlaceholder shows search"
								/>
							</PopperContainerStyled>
						</Stack>
					</Stack>
				</Stack>
			</Stack>

			<Stack
				display="flex"
				direction="row"
				spacing={'40px'}
			>
				<Stack
					display="flex"
					direction="column"
					spacing={'20px'}
				>
					<Typography variant="h2">Optional Categories</Typography>

					<Stack
						display="flex"
						direction="row"
						spacing={'20px'}
					>
						<Stack width="fit-content">
							<Typography variant="h3">Single</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selectedSimpleCategory}
									setValue={setSelectedSimpleCategory}
									categories={simpleCategories}
								/>
							</PopperContainerStyled>
						</Stack>

						<Stack width="fit-content">
							<Typography variant="h3">Multiple</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selectedMultipleCategory}
									setValue={setSelectedMultipleCategory}
									maxSelection={2}
									categories={simpleCategories}
								/>
							</PopperContainerStyled>
						</Stack>
					</Stack>
				</Stack>

				<Stack
					display="flex"
					direction="column"
					spacing={'20px'}
				>
					<Typography variant="h2">Optional Icon Categories</Typography>

					<Stack
						display="flex"
						direction="row"
						spacing={'20px'}
					>
						<Stack width="fit-content">
							<Typography variant="h3">Single</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selectedIconSimpleCategory}
									setValue={setSelectedIconSimpleCategory}
									categories={iconCategories}
								/>
							</PopperContainerStyled>
						</Stack>

						<Stack width="fit-content">
							<Typography variant="h3">Multiple</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selectedIconMultipleCategory}
									setValue={setSelectedIconMultipleCategory}
									maxSelection={2}
									categories={iconCategories}
								/>
							</PopperContainerStyled>
						</Stack>
					</Stack>
				</Stack>
			</Stack>

			<Stack
				display="flex"
				direction="row"
				spacing={'40px'}
			>
				<Stack
					display="flex"
					direction="column"
					spacing={'20px'}
				>
					<Typography variant="h2">Optional Combined</Typography>

					<Stack
						display="flex"
						direction="row"
						spacing={'20px'}
					>
						<Stack width="fit-content">
							<Typography variant="h3">Single</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selectedSearch}
									setValue={setSelectedSearch}
									categories={combinedCategories}
									searchPlaceholder="Type to find"
								/>
							</PopperContainerStyled>
						</Stack>

						<Stack width="fit-content">
							<Typography variant="h3">Multiple</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selectedCombined}
									setValue={setSelectedCombined}
									maxSelection={2}
									categories={combinedCategories}
								/>
							</PopperContainerStyled>
						</Stack>
					</Stack>
				</Stack>

				<Stack
					display="flex"
					direction="column"
					spacing={'20px'}
				>
					<Typography variant="h2">Optional Spacing</Typography>

					<Stack
						display="flex"
						direction="row"
						spacing={'20px'}
					>
						<Stack width="fit-content">
							<Typography variant="h3">Spacing On Items</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selectedSpacing}
									setValue={setSelectedSpacing}
									categories={combinedCategories}
									searchPlaceholder="Type to find"
									gap
								/>
							</PopperContainerStyled>
						</Stack>
					</Stack>
				</Stack>
			</Stack>

			<Stack
				display="flex"
				direction="row"
				spacing={'40px'}
			>
				<Stack
					display="flex"
					direction="column"
					spacing={'40px'}
				>
					<Typography variant="h2">Tree variant</Typography>

					<Stack
						display="flex"
						direction="row"
						spacing={'20px'}
					>
						<Stack width="fit-content">
							<Typography variant="h3">Single option tree</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selectedTree}
									setValue={setSelectedTree}
									categories={[
										{
											name: '',
											listItemType: 'chip',
											options: treeOptions
										}
									]}
									searchPlaceholder="Search something"
									gap
								/>
							</PopperContainerStyled>
						</Stack>

						<Stack width="fit-content">
							<Typography variant="h3">Single option tree</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selectedTree}
									setValue={setSelectedTree}
									categories={[
										{
											name: '',
											listItemType: 'squareIconChip',
											options: treeOptions
										}
									]}
									searchPlaceholder="Search something"
									gap
								/>
							</PopperContainerStyled>
						</Stack>

						<Stack width="fit-content">
							<Typography variant="h3">Single option tree</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selectedTree}
									setValue={setSelectedTree}
									categories={[
										{
											name: '',
											listItemType: 'custom',
											options: treeOptions
										}
									]}
									searchPlaceholder="Search custom option"
									customOption={(id: string, name: string, icon: string, color: ChipColor, active: boolean) => {
										return (
											<Stack
												direction="row"
												display="flex"
												alignItems="center"
												justifyContent={'space-between'}
												sx={{
													width: '100%',
													padding: '4px',
													'&:hover': { cursor: 'pointer' },
													background: 'linear-gradient(148deg, rgba(63,94,251,1) 0%, rgba(175,80,249,1) 45%, rgba(252,70,89,1) 100%)'
												}}
												onClick={() => alert('You have to develop this list option')}
											>
												<Typography
													variant="sys.typo.st1"
													color="white"
												>
													{name} - Custom
												</Typography>
												{active && (
													<IconGenerator
														colorToken={'#FFF'}
														iconName={'AutoFixHigh'}
														heightToken={'14px'}
														widthToken={'14px'}
													/>
												)}
											</Stack>
										)
									}}
									customAction={
										<Stack
											direction="row"
											display="flex"
											alignItems="center"
											justifyContent={'left'}
											sx={{ width: '100%', padding: '4px', '&:hover': { cursor: 'pointer' } }}
											padding={theme.dimensions.common.padding.md}
											spacing={'6px'}
										>
											<CoorButton
												intensity="outline"
												size="md"
												color="success"
												label="Action 1"
												onClick={() => alert('You have to develop this component with the correct tokens and sizes')}
											/>

											<CoorButton
												intensity="high"
												size="md"
												color="warning"
												label="Action 2"
												onClick={() => alert('Action 2')}
											/>
										</Stack>
									}
								/>
							</PopperContainerStyled>
						</Stack>
					</Stack>

					<Stack
						display="flex"
						direction="row"
						spacing={'40px'}
					>
						<Stack width="fit-content">
							<Typography variant="h3">Multiple option tree</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selectedTreeMultiple}
									setValue={setSelectedTreeMultiple}
									categories={[
										{
											name: '',
											listItemType: 'simpleIcon',
											options: treeOptions
										}
									]}
									maxSelection={3}
									searchPlaceholder="Search something"
									gap
								/>
							</PopperContainerStyled>
						</Stack>

						<Stack width="fit-content">
							<Typography variant="h3">Multiple option tree</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selectedTreeMultiple}
									setValue={setSelectedTreeMultiple}
									categories={[
										{
											name: '',
											listItemType: 'squareIconChip',
											options: treeOptions
										}
									]}
									maxSelection={3}
									searchPlaceholder="Search something"
									gap
								/>
							</PopperContainerStyled>
						</Stack>
					</Stack>
				</Stack>
			</Stack>

			<Stack
				display="flex"
				direction="row"
				spacing={'40px'}
			>
				<Stack
					display="flex"
					direction="column"
					spacing={'40px'}
				>
					<Typography variant="h2">Optional Extend</Typography>

					<Stack
						display="flex"
						direction="row"
						spacing={'20px'}
					>
						<Stack width="fit-content">
							<Typography variant="h3">Adding a custom item component</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selectedExpanded}
									setValue={setSelectedExpanded}
									categories={extendCategory}
									searchPlaceholder="Search custom option"
									customOption={(id: string, name: string, icon: string, color: ChipColor, active: boolean) => {
										return (
											<Stack
												direction="row"
												display="flex"
												alignItems="center"
												justifyContent={'space-between'}
												sx={{ width: '100%', padding: '4px', '&:hover': { cursor: 'pointer' } }}
												onClick={() => alert('You have to develop this list option')}
											>
												<Typography
													variant="sys.typo.st1"
													color="error"
												>
													{name} - Custom
												</Typography>
												{active && (
													<IconGenerator
														colorToken={'#A569BD'}
														iconName={'Star'}
														heightToken={'14px'}
														widthToken={'14px'}
													/>
												)}
											</Stack>
										)
									}}
								/>
							</PopperContainerStyled>
						</Stack>

						<Stack width="fit-content">
							<Typography variant="h3">Adding a custom action</Typography>
							<PopperContainerStyled theme={theme}>
								<GeneralSelectBody
									value={selectedExpandedMultiple}
									setValue={setSelectedExpandedMultiple}
									categories={extendCategory}
									searchPlaceholder="Search custom option"
									maxSelection={3}
									customOption={(id: string, name: string, icon: string, color: ChipColor, active: boolean) => {
										return (
											<Stack
												direction="row"
												display="flex"
												alignItems="center"
												justifyContent={'space-between'}
												sx={{
													width: '100%',
													padding: '4px',
													'&:hover': { cursor: 'pointer' },
													background: 'linear-gradient(148deg, rgba(63,94,251,1) 0%, rgba(175,80,249,1) 45%, rgba(252,70,89,1) 100%)'
												}}
												onClick={() => alert('You have to develop this list option')}
											>
												<Typography
													variant="sys.typo.st1"
													color="white"
												>
													{name} - Custom
												</Typography>
												{active && (
													<IconGenerator
														colorToken={'#FFF'}
														iconName={'AutoFixHigh'}
														heightToken={'14px'}
														widthToken={'14px'}
													/>
												)}
											</Stack>
										)
									}}
									customAction={
										<Stack
											direction="row"
											display="flex"
											alignItems="center"
											justifyContent={'left'}
											sx={{ width: '100%', padding: '4px', '&:hover': { cursor: 'pointer' } }}
											padding={theme.dimensions.common.padding.md}
											spacing={'6px'}
										>
											<CoorButton
												intensity="outline"
												size="md"
												color="success"
												label="Action 1"
												onClick={() => alert('You have to develop this component with the correct tokens and sizes')}
											/>

											<CoorButton
												intensity="high"
												size="md"
												color="warning"
												label="Action 2"
												onClick={() => alert('Action 2')}
											/>
										</Stack>
									}
								/>
							</PopperContainerStyled>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	)
}
