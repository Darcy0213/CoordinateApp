'use client'
import { CategoryChip } from '@common/chips'
import { SelectBodySearchBar } from '@common/search-bars'
import { SimpleBarScroll } from '@common/third-party'
import { ChipColor } from '@globalTypes/general'
import { Box, Stack, Typography, useTheme } from '@mui/material'
import { Dispatch, useEffect, useState } from 'react'
import RenderListsOptions from './RenderListsCases'

type itemTypes = 'simpleIcon' | 'squareIconChip' | 'chip' | 'custom'

export interface CategoryTypeOption {
	id: string | number
	name: string
	color?: ChipColor
	image?: string
	icon?: string
	subOptions?: CategoryTypeOption[]
}

export interface CategoryType {
	name: string
	listItemType: itemTypes
	options: CategoryTypeOption[]
	icon?: string
	useDefaultChangeValue?: boolean
}

interface Props {
	value: string[] | string | number[] | number | null
	setValue:
		| Dispatch<React.SetStateAction<string>>
		| Dispatch<React.SetStateAction<number>>
		| Dispatch<React.SetStateAction<string[]>>
		| Dispatch<React.SetStateAction<number[]>>
		| any //  must be any, because the type use its too complex
	maxSelection?: number
	searchPlaceholder?: string
	categories: CategoryType[]
	setLimitReached?: React.Dispatch<React.SetStateAction<boolean>>
	customAction?: React.ReactNode
	customOption?: any
	gap?: boolean
	customSearchValue?: string
}

export default function GeneralSelectBody({
	value,
	setValue,
	maxSelection = 1,
	searchPlaceholder,
	categories,
	setLimitReached,
	customAction,
	customOption,
	gap = false,
	customSearchValue
}: Props) {
	//MUI active theme
	const theme = useTheme()

	const [categoriesLocal, setCategoriesLocal] = useState<CategoryType[]>([])
	useEffect(() => {
		setCategoriesLocal(categories)
	}, [categories])

	//Constants to handle classification
	const [classification, setClassification] = useState('')
	const [classificationData, setClassificationData] = useState<CategoryType | undefined>(undefined)
	useEffect(() => {
		setClassificationData(categoriesLocal?.length ? categoriesLocal[0] : undefined)
	}, [categoriesLocal])
	//Always select the firs category to display options to the user
	useEffect(() => {
		categoriesLocal?.length && handleClassificationChange(categoriesLocal[0]?.name)
		setLimitReached && setLimitReached(Array.isArray(value) ? value?.length === maxSelection : false)
	}, [])

	//Constant to handle change classification and get the data of the selected classification
	const handleClassificationChange = (selectedClassification: string) => {
		setClassification(selectedClassification)
		setClassificationData(categoriesLocal?.find((category: CategoryType) => category.name === selectedClassification))
	}

	//constant to determine if the component is a select or a multi select depending on maxSelection value
	const multiple = maxSelection > 1 || maxSelection === Infinity ? true : false

	//Constant to handle change value depending on the maxSelection (select | multi select)
	const handleChangeValue = (newValue: string | number | string[] | number[]) => {
		if (!classificationData?.useDefaultChangeValue) {
			// Check if it's a multi-select component
			if (multiple && Array.isArray(value)) {
				// Check if a limit is set and if the current selection count equals the maximum allowed selections
				setLimitReached && setLimitReached(Array.isArray(value) ? value?.length + 1 === maxSelection : false)
				// Check if the new value is already selected. If so, remove it from the selection
				// Create a new array with the values of the current value to check if the new value is already selected avoiding type errors
				const valueArr: (string | number)[] = Array.isArray(value) ? (value as (string | number)[]) : []
				if (valueArr.includes(newValue as string | number)) {
					// If so, remove it from the selection
					setValue((valueArr as (string | number)[]).filter((val) => val !== newValue) as string[] | number[])
				} else {
					// If not, and if the selection count hasn't reached the maximum limit, add the new value to the selection
					maxSelection >= valueArr?.length + 1 && setValue([...valueArr, newValue])
				}
			} else {
				// For single-select components, directly set the new value
				setValue(newValue)
			}
		}
	}

	//TextOptions to handle search bar
	const [searchText, setSearchText] = useState<string>('')

	//Constant to handle displayed options depending on the search text
	const [displayedOptions, setDisplayedOptions] = useState<CategoryTypeOption[]>([])

	//Effect to filter the options depending on the search text
	useEffect(() => {
		const search = customSearchValue ?? searchText

		const filteredOptions =
			classificationData &&
			(search === ''
				? classificationData.options
				: classificationData.options.filter((option) => option.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())))

		setDisplayedOptions(filteredOptions ?? [])
	}, [searchText, customSearchValue, classificationData])

	//Divider component to use dynamically
	const Divider = () => {
		return (
			<Box
				width={'100%'}
				marginBottom={`${theme.dimensions.frame.spacing.md}`}
				sx={{
					borderBottom: `1px solid ${theme.palette.outline.variant}`
				}}
			/>
		)
	}

	return (
		<Stack minWidth={'100px'}>
			{searchPlaceholder && (
				<>
					<Box marginBottom={`${theme.dimensions.frame.spacing.md}`}>
						<SelectBodySearchBar
							setSearchText={setSearchText}
							placeholder={searchPlaceholder}
						/>
					</Box>
					{categoriesLocal.length === 1 && <Divider />}
				</>
			)}

			{/* show categories if there are more than one */}
			{categoriesLocal?.length > 1 && (
				<>
					<Stack
						direction={'row'}
						justifyContent={'flex-start'}
						marginBottom={`${theme.dimensions.frame.spacing.md}`}
					>
						{/* Category chips */}

						{categoriesLocal?.map((category) => {
							return (
								<CategoryChip
									key={category.name}
									category={category}
									active={category.name === classification ? true : false}
									onClick={handleClassificationChange}
								/>
							)
						})}
					</Stack>
					<Divider />
				</>
			)}

			{/* display options in the select body */}
			<SimpleBarScroll
				className="container scroll"
				sx={{ maxHeight: '240px', overflowY: 'auto', width: '100%' }}
			>
				{classificationData && (
					<>
						<RenderListsOptions
							options={displayedOptions}
							value={value}
							handleChangeValue={handleChangeValue}
							itemType={classificationData.listItemType}
							customOption={customOption}
							gap={gap}
						/>

						{customAction && (
							<Box marginTop={`${theme.dimensions.frame.spacing.md}`}>
								<Divider />
								{customAction}
							</Box>
						)}
					</>
				)}
			</SimpleBarScroll>

			{/* Show selected items if maxSelection is not 1 or infinity */}
			{maxSelection !== Infinity && maxSelection !== 1 && (
				<Stack
					direction={'row'}
					marginTop={'12px'}
					justifyContent={'flex-end'}
				>
					<Typography
						variant="sys.typo.st1"
						color={'#9E9E9E'}
					>
						Selected: {Array.isArray(value) ? value?.length : 1}/{maxSelection}
					</Typography>
				</Stack>
			)}
		</Stack>
	)
}
