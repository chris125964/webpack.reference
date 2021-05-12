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

export function finishGame(dispatch: (action: MemoryAction) => void) {
    const action: MemoryAction = {
        type: actionTypes.FINISH_GAME,
        mem: { index: 1, nr: 1, status: MemoryState.ERROR }
    }
    dispatch(action)
}