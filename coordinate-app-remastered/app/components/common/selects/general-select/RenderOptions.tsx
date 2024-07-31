'use client'
import { IconChipItem, SimpleIconItem, SquareIconChipItem } from '@common/lists'
import { DefaultColor } from '@globalTypes/general'
import { CategoryTypeOption } from './GeneralSelectBody'

interface RenderOptionProps {
	option: CategoryTypeOption
	active: boolean
	itemType: 'simpleIcon' | 'squareIconChip' | 'chip' | 'custom'
	customOption?: any
}

export default function RenderOption({ option, active, itemType, customOption }: RenderOptionProps) {
	return (
		<>
			{itemType === 'simpleIcon' && (
				<SimpleIconItem
					name={option?.name}
					icon={option?.icon ?? option?.image}
					active={active as boolean}
				/>
			)}
			{itemType === 'chip' && (
				<IconChipItem
					name={option?.name}
					color={option?.color}
					icon={option?.icon}
					active={active as boolean}
				/>
			)}
			{itemType === 'squareIconChip' && (
				<SquareIconChipItem
					name={option?.name}
					color={option?.color}
					icon={option?.icon}
					active={active as boolean}
				/>
			)}

			{itemType === 'custom' &&
				customOption(option?.id as string, option?.name, option?.icon as string, option?.color ?? DefaultColor, active as boolean)}
		</>
	)
}
