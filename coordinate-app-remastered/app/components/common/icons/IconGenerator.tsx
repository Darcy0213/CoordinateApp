import { Help } from '@mui/icons-material'
import { findIconById } from '@utils/colorMethods'
import { iconsForUsersArray } from './IconsForUsers'
import generateMDIIcon from './MDIIcons'
import { IconTypes } from './types'

export const IconsLibrary = {
	people: 'People',
	label: 'Label',
	selectField: 'List',
	calculationField: 'Calculate',
	relatedTasks: 'Route',
	expand: 'OpenInNew',
	close: 'Close',
	favorite: 'StarOutline',
	drafting: 'DataUsageOutlined',
	activity: 'Update',
	breadCrumb: 'KeyboardArrowRight',
	leftArrow: 'KeyboardArrowLeft',
	status: 'Speed',
	priority: 'Flag',
	assignees: 'PersonAddAlt1',
	followers: 'Star',
	date: 'CalendarToday',
	timeTracker: 'Timer',
	timeEstimate: 'Schedule',
	tags: 'Sell',
	textField: 'StickyNote2',
	lowest: 'KeyboardDoubleArrowDown',
	low: 'KeyboardArrowDown',
	medium: 'DragHandle',
	high: 'KeyboardArrowUp',
	urgent: 'KeyboardDoubleArrowUp',
	pause: 'PauseCircle',
	drive: 'Cloud',
	notSaveState: 'CloudOffOutlined',
	savingState: 'CloudUploadOutlined',
	savedState: 'CloudDoneOutlined',
	arrowBack: 'ArrowBack',
	arrowRight: 'ArrowForward',
	arrowUp: 'ArrowUpward',
	projects: 'Assignment',
	tasks: 'AssignmentTurnedIn',
	fields: 'Extension',
	homePage: 'Home',
	templates: 'Interests',
	policies: 'Lock',
	members: 'Person',
	library: 'AutoStories',
	add: 'Add',
	checkConfirm: 'Check',
	groups: 'SupervisorAccount',
	workTypes: 'Work',
	deleteForever: 'DeleteForever',
	editFilled: 'Edit',
	editOutline: 'EditOutlined',
	meatballMenu: 'MoreHorizOutlined',
	folder: 'Folder',
	table: 'GridOn',
	card: 'GridView',
	kebabMenu: 'MoreVert',
	notificationFilled: 'Notifications',
	notificationOutlined: 'NotificationsNone',
	playButton: 'PlayCircle',
	pinFilled: 'PushPin',
	pinOutline: 'PushPinOutlined',
	search: 'SearchOutlined',
	uploadFile: 'UploadFile',
	uploadFileSharp: 'UploadFileSharp',
	uploadCustomFields: 'FileUploadOutlined',
	listIcon: 'TableRowsOutlined',
	help: 'Help',
	questionHelp: 'HelpOutlined',
	excelFile: 'InsertDriveFile',
	exclamationFile: 'InsertDriveFile',
	imageFile: 'PermMedia',
	markdownFile: 'InsertDriveFile',
	pdfFile: 'PictureAsPdf',
	pptxFile: 'InsertDriveFile',
	unknownFile: 'HelpCenter',
	description: 'Description',
	zipFile: 'FolderZip',
	globalFile: 'DriveFolderUpload',
	bold: 'FormatBold',
	italic: 'FormatItalic',
	underlined: 'FormatUnderlined',
	strikethrought: 'StrikethroughS',
	colorText: 'FormatColorText',
	highlight: 'BorderColor',
	colorFill: 'FormatColorFill',
	orderedList: 'FormatListNumbered',
	alignCenter: 'FormatAlignCenter',
	alignLeft: 'FormatAlignLeft',
	alignRight: 'FormatAlignRight',
	sort: 'SortByAlpha',
	fileField: 'InsertDriveFile',
	locationField: 'LocationOn',
	numberField: 'Numbers',
	phoneField: 'Call',
	emailField: 'Mail',
	currencyField: 'AttachMoney',
	userField: 'Group',
	hyperlinkField: 'Link',
	checkboxField: 'CheckBox',
	classification: 'Category',
	darkMode: 'DarkMode',
	lightMode: 'LightMode',
	tune: 'Tune',
	filter: 'FilterList',
	sorting: 'SwapVert',
	groping: 'Dashboard',
	reminders: 'NotificationsActive',
	recurrence: 'Repeat',
	key: 'Key',
	userSettings: 'ManageAccounts',
	project: 'Assessment',
	task: 'Task',
	company: 'BusinessCenter',
	file: 'InsertDriveFileOutlined',
	workspaces: 'Workspaces',
	tree: 'AccountTree',
	topic: 'Topic',
	expandObject: 'OpenInFull',
	collapseObject: 'CloseFullscreen',
	homeFilled: 'HomeFilled',
	deployedCode: 'DeployedCode',
	searchFilled: 'Search',
	starFilled: 'Star',
	supervisorAccount: 'SupervisorAccount',
	menu: 'Menu',
	groupsMenu: 'Groups',
	gridOn: 'GridOn',
	leftPanelOpen: 'LeftPanelOpen',
	rightPanelOpen: 'RightPanelOpen',
	rightPanelClose: 'RightPanelClose',
	checkCircleOutline: 'CheckCircleOutline',
	update: 'Update',
	logout: 'Logout',
	download: 'Download',
	moreHoriz: 'MoreHoriz',
	capture: 'Capture'
}

interface IconGeneratorProps {
	iconName: IconTypes | string // Adjust according to your IconTypes definition.
	widthToken: string
	heightToken: string
	colorToken: string
	iconLibrary?: 'MUI' | 'MDI'
}

/**
 * A React component to dynamically generate icons.
 * It supports icons from the Material UI (MUI) library and custom MDI icons.
 *
 * @param props - The properties passed to the IconGenerator component.
 * @returns A React element representing the requested icon.
 */
const IconGenerator: React.FC<IconGeneratorProps> = ({ iconName, widthToken, heightToken, colorToken, iconLibrary = 'MUI' }) => {
	// Access the icon library from the context.
	const icons = iconsForUsersArray

	// Retrieve the icon key, either directly or from the IconsLibrary.
	const iconKey = IconsLibrary[iconName as keyof typeof IconsLibrary] ?? iconName

	// Find the icon component from the context-based icon library.
	const iconObject = findIconById(icons, iconKey)

	// Determine if the icon should be generated from MDI and return the appropriate icon.
	if (iconLibrary === 'MDI' || !iconObject) {
		// For MDI icons, return the generated MDI icon component.
		const IconComponent = generateMDIIcon(iconKey, colorToken, widthToken, heightToken)
		return IconComponent
	} else {
		// For MUI icons, return the found icon or a default Help icon as a fallback.
		return iconObject ? (
			<iconObject.icon sx={{ color: colorToken, width: widthToken, height: heightToken }} />
		) : (
			<Help sx={{ color: colorToken, width: widthToken, height: heightToken }} />
		)
	}
}

export default IconGenerator
