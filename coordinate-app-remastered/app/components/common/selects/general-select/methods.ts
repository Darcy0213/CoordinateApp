import { CategoryTypeOption } from './GeneralSelectBody'

export function isValueInCategories(categories: CategoryTypeOption[], value: string[] | string | number[] | number | null): boolean {
	if (value === null) return false

	const values = Array.isArray(value) ? value : [value]

	function search(categories: CategoryTypeOption[]): boolean {
		for (const category of categories) {
			if (values.includes(category.id)) {
				return true
			}
			if (category.subOptions && search(category.subOptions)) {
				return true
			}
		}
		return false
	}

	return search(categories)
}
