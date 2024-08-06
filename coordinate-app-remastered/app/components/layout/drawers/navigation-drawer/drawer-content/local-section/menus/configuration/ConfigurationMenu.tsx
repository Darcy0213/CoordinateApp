import { IconGenerator } from '@common/icons'
import { SimpleBarScroll } from '@common/third-party'
import { useAuth } from '@context/AuthContext'
import { useConfigContext } from '@context/ConfigContext'
import { Box, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { emptyWorkspaceInfo, WorkspaceInfo } from 'app/recoil/atoms'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { SetterOrUpdater } from 'recoil'
import ListItemButtonStyled from '../../lists-items/list-item-button/ListItemButtonStyled'
import ThemeFont from './ThemeFont'
import ThemeMode from './ThemeMode'
interface ConfigurationMenuProps {
	theme: Theme
	setCurrentWorkspace: SetterOrUpdater<WorkspaceInfo>
}

const ConfigurationMenu = ({ theme, setCurrentWorkspace }: ConfigurationMenuProps) => {
	//hook for getting the current theme and font family
	const { fontFamily, mode } = useConfigContext()
	//hook for logout
	const { logout } = useAuth()
	//useMemo for theme mode
	const router = useRouter()
	const themeMode = useMemo(() => <ThemeMode />, [mode])
	const themeFont = useMemo(() => <ThemeFont />, [fontFamily])
	//function for logout
	const handleLogout = async () => {
		try {
			// Clear the navigation tab value before logout.
			setCurrentWorkspace(emptyWorkspaceInfo)
			localStorage.setItem('currentWorkspace', JSON.stringify(emptyWorkspaceInfo))
			logout(router)
		} catch (err) {
			console.error(err)
		}
	}
	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			gap={theme.dimensions.frame.spacing.sm}
			height={'-webkit-fill-available'}
		>
			<Box
				display={'flex'}
				padding={theme.dimensions.common.padding.lg}
				alignItems={'center'}
				flexDirection={'row'}
				gap={theme.dimensions.common.spacing.lg}
			>
				<IconGenerator
					iconName="settings"
					widthToken={theme.dimensions.common.width.xl as string}
					heightToken={theme.dimensions.common.height.xl as string}
					colorToken={theme.palette.surface.on_surface_variant}
				/>
				<Typography variant="sys.typo.t1">Settings</Typography>
			</Box>
			<SimpleBarScroll sx={{ maxHeight: '80vh' }}>
				<Box
					display={'flex'}
					flexDirection={'column'}
					gap={'10px'}
					padding={theme.dimensions.common.padding.lg}
				>
					<Typography
						variant="subtitle1"
						color="textPrimary"
					>
						Theme Mode
					</Typography>
					<Typography
						variant="caption"
						color="textSecondary"
					>
						Choose light or dark mode
					</Typography>
					{themeMode}

					<Typography
						variant="subtitle1"
						color="textPrimary"
					>
						Font Family
					</Typography>
					<Typography
						variant="caption"
						color="textSecondary"
					>
						Choose your font family.
					</Typography>
					{themeFont}
				</Box>
			</SimpleBarScroll>

			<ListItemButtonStyled
				isActive={false}
				theme={theme}
				sx={{ height: 'fit-content', flexGrow: 0 }}
				onClick={handleLogout}
			>
				<IconGenerator
					iconName="logout"
					widthToken={theme.dimensions.icon.width.lg}
					heightToken={theme.dimensions.icon.height.lg}
					colorToken={theme.palette.surface.on_surface_variant}
				/>
				<Typography variant="sys.typo.st1_semibold">Logout</Typography>
			</ListItemButtonStyled>
		</Box>
	)
}

export default ConfigurationMenu
