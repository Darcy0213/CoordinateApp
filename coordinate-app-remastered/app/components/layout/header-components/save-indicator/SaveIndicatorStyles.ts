import { statusTypes } from '@globalTypes/saveStatus'
import { Box, styled, Theme } from '@mui/material'
import { Stack } from '@mui/system'
import { CloudStatusType } from 'app/recoil/atoms'

interface PropsContainer {
	theme: Theme
	mode: 'create' | 'edit'
	openLocationPopper: boolean
	backgroundColor: string
	onDrawer?: boolean
}

export const SaveIndicatorContainerStyled = styled(Stack, {
	shouldForwardProp: (prop) => prop !== 'theme' && prop !== 'openLocationPopper' && prop !== 'mode' && prop !== 'onDrawer'
})(({ theme, mode, openLocationPopper = false, backgroundColor, onDrawer = false }: PropsContainer) => ({
	gap: theme.dimensions.common.spacing.md,
	padding: `${theme.dimensions.common.padding.md} ${theme.dimensions.common.padding.md}`,
	borderRadius: theme.dimensions.radius.sm,
	alignItems: 'center',
	minWidth: 'fit-content',
	backdropFilter: 'blur(25px)',
	//on hover event change background color
	...(onDrawer &&
		mode === 'create' && {
			'&:hover': {
				backgroundColor: backgroundColor,
				cursor: 'pointer'
			}
		}),
	backgroundColor: openLocationPopper === true ? backgroundColor : 'transparent'
}))

interface Props {
	statusData: statusTypes
	status: CloudStatusType
}
export const StatusDotStyled = styled(Box, { shouldForwardProp: (prop) => prop !== 'theme' && prop !== 'statusData' })(
	({ statusData, status }: Props) => ({
		background: status !== '' ? statusData[status]?.color : 'none',
		width: '12px!important',
		height: '12px!important',
		minWidth: '12px!important',
		borderRadius: '50%',
		...(status === 'saving' && {
			animationName: 'blink',
			animationDuration: '0.5s',
			animationIterationCount: 'infinite',
			'@keyframes blink': {
				'50%': {
					opacity: 0
				}
			}
		})
	})
)
