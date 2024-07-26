export type size = '7xl' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type color = 'blue' | 'cyan' | 'lime' | 'green' | 'yellow' | 'orange' | 'red' | 'purple' | 'magenta' | 'gray'
export type contrast = 'softest' | 'soft' | 'lowest' | 'low' | 'intermediate' | 'medium' | 'high'
export type style = 'outline+30%' | 'outline' | '30%' | '100%'
export interface ChipStyle {
	fontColor: string
	backgroundColor: string
	paddingChip: string
	outline: string
	outlineOffset: string
	borderRadius: string
}
