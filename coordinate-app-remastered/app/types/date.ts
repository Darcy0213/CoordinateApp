import { DateRange } from '@mui/x-date-pickers-pro'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from 'dayjs'

export type DateFormats = ['MM-DD-YYYY'] | ['MM-DD-YYYY', 'MM-DD-YYYY'] | ['MM-DD-YYYY HH:mm:ss'] | ['MM-DD-YYYY HH:mm:ss', 'MM-DD-YYYY HH:mm:ss']

export interface DateProperties {
	id: string
	name: string
	format: DateFormats
	time: boolean
	adapter?: AdapterDayjs
}

export const DateFormatOptions: DateProperties[] = [
	{ id: 'Date', name: 'MM-DD-YYYY', format: ['MM-DD-YYYY'], time: false },
	{ id: 'Date range', name: 'MM-DD-YYYY → MM-DD-YYYY', format: ['MM-DD-YYYY', 'MM-DD-YYYY'], time: false },
	{ id: 'Date - time', name: 'MM-DD-YYYY HH:mm:ss', format: ['MM-DD-YYYY HH:mm:ss'], time: true },
	{
		id: 'Date - time range',
		name: 'MM-DD-YYYY HH:mm:ss → MM-DD-YYYY HH:mm:ss',
		format: ['MM-DD-YYYY HH:mm:ss', 'MM-DD-YYYY HH:mm:ss'],
		time: true
	}
]

// Type to store the value of a date property using dayjs
export type DatePropertyTypes = Dayjs | Dayjs[] | DateRange<Dayjs> | DateRange<Dayjs>[]

// Type to store the value of a date property on database without using dayjs
export type DateDBPropertyTypes = string | string[] | string[][] | null[][] | [null] | null

// Type to store the value of a date property on an object using dayjs or string values that come from the database
export type DatePropertyValueOnObject = {
	timezone: string | null
	data: DatePropertyTypes | DateDBPropertyTypes
}
