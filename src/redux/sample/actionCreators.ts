import * as actionTypes from './actionTypes';

import { MemoryAction } from "./type"
import { MemoryState } from "../../enums/MemoryState"

export function clickTile(index: number, nr: number, dispatch: (action: MemoryAction) => void) {
    const action: MemoryAction = {
        type: actionTypes.SET_TILE,
        mem: { index, nr, status: MemoryState.NO_TILE_OPEN }
    }

    dispatch(action)
}