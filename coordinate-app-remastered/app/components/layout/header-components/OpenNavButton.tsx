'use client'
import { CoorIconButton } from '@common/buttons'
import { OpenDrawerFromTopbar } from 'app/recoil/atoms'
import { useRecoilState } from 'recoil'

const OpenNavButton: React.FC = () => {
	const [isPinned, pinDrawer] = useRecoilState(OpenDrawerFromTopbar)
	return (
		<CoorIconButton
			iconName="leftPanelOpen"
			size={'md'}
			color={'main'}
			intensity={'lowest'}
			onClick={() => {
				pinDrawer(!isPinned)
			}}
			active={isPinned as boolean}
		/>
	)
}
export default OpenNavButton
