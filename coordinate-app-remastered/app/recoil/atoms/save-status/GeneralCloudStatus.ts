'use client'
import { atom } from 'recoil'

export type CloudStatusType = 'draft' | 'saved' | 'saving' | 'notSaved' | 'new' | 'error' | ''

export const GeneralCloudStatus = atom<CloudStatusType>({
	key: 'GeneralCloudStatus',
	default: ''
})
