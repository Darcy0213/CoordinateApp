export const removePxString = (dimension: string) => {
	let dimensionSliced = dimension.slice(0, -2)

	return parseInt(dimensionSliced)
}
