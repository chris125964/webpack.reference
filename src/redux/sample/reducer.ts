import { MemoryAction } from "./type";
import { MemoryEvent } from "../../enums/MemoryEvent";
import { MemoryState } from "../../enums/MemoryState";
import { change } from "../../logic/statemachine";

let initialState = {
    open1Index: -1,
    open1Value: -1,
    status: MemoryState.NO_TILE_OPEN
}

export default function reducer(currentState = initialState, action: MemoryAction) {

    switch (action.type) {
        case "SET_TILE":
            let currentStatus = currentState.status;
            let currentEvent = MemoryEvent.UNDEFINED;
            if (currentStatus === MemoryState.NO_TILE_OPEN) {
                // no tile open
                currentEvent = MemoryEvent.TILE_1_OPEN;
            } else {
                if (currentStatus === MemoryState.TWO_TILES_OPEN_NOT_FIT) {
                    // two tiles open -> must be closed before
                } else {
                    if (currentStatus === MemoryState.TWO_TILES_OPEN_AND_FIT) {
                        // tiles do match -> next tile

                    } else {
                        if (action.mem.index === currentState.open1Index) {
                            // Undo
                            console.log(`undo`);
                            currentEvent = MemoryEvent.TILE_UNDO;
                        } else if (action.mem.nr === currentState.open1Value) {
                            // found a pair
                            console.log(`found a pair`);
                            currentEvent = MemoryEvent.TILE_2_TRUE;

                        } else {
                            // tiles dont match
                            console.log(`tiles don't match`);
                            currentEvent = MemoryEvent.TILE_2_FALSE;
                        }
                    }
                }
            }
            let newStatus = change(currentStatus, currentEvent);
            let newState = {
                open1Index: action.mem.index,
                open1Value: action.mem.nr,
                status: newStatus
            }
            return newState;
        default:
            return currentState
    }
}