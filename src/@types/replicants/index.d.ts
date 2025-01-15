import NodeCG from "@nodecg/types"
import { GAMES, MAP_STATUS } from "../../common/constants"
import { ValueOf } from "../value_of"

interface Graphics {
    isShowing?: boolean
    duration?: number
}

interface Person_Info {
    nameFirst?: string
    nameLast?: string
    socialmedia?: string
}

export interface LowerThird {
    value?: Person_Info
    graphics?: Graphics
}
