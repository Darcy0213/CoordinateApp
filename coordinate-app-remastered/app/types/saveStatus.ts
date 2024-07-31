export interface statusType {
	title: string
	connector: string
	color: string
}

export interface statusTypes {
	notSaved: statusType
	saved: statusType
	saving: statusType
	draft: statusType
	new: statusType
	error: statusType
}
