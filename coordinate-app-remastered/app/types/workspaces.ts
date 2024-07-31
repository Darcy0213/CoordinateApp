import { ChipColor } from "./general"
import { IconTypes } from "./icons"

export type WorkspaceOption = {
    id: string, name: string, color: ChipColor, icon: IconTypes | string, personRole?: string
}