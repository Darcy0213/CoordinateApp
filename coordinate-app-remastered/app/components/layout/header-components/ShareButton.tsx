'use client'
import { CoorButton } from '@common/buttons'
import { ClickHeaderButton, OpenShareModal } from 'app/recoil/atoms'

import { useRecoilState, useSetRecoilState } from 'recoil'

const ShareButton = () => {
	const [showModal, setOpenShowModal] = useRecoilState(OpenShareModal)
	const setClickButton = useSetRecoilState(ClickHeaderButton)

	return (
		<CoorButton
			color="main"
			intensity="high"
			size="md"
			label="Share"
			onClick={() => {
				setOpenShowModal(!showModal)
				setClickButton(true)
			}}
		/>
	)
}

export default ShareButton
