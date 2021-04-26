import { MemoryEvent } from '../enums/MemoryEvent';
import { MemoryState } from '../enums/MemoryState';

export const change = (
    currentState: MemoryState,
    event: MemoryEvent,
): MemoryState => {
    let newState = MemoryState.NO_TILE_OPEN;

    switch (currentState) {
        case MemoryState.NO_TILE_OPEN:
            newState = MemoryState.ONE_TILE_OPEN;
            break;
        case MemoryState.ONE_TILE_OPEN:
            newState = changeStateOneTileOpen(event);
            // if (isOpen) {
            // undo
            // newState = MemoryState.NO_TILE_OPEN;
            // } else {
            // newState = MemoryState.NO_TILE_OPEN;
            // }
            //   if (event === MemoryEvent.TILE_2_TRUE) {
            //     newState = MemoryState.NO_TILE_OPEN;
            //   } else if (event === MemoryEvent.TILE_2_FALSE) {
            //     newState = MemoryState.TWO_TILES_OPEN_NOT_FIT;
            //   } else if (event === MemoryEvent.TILE_UNDO) {
            //     newState = MemoryState.NO_TILE_OPEN;
            // }
            break;
        // case MemoryState.TWO_TILES_OPEN_NOT_FIT:
        //     break;
        default:
            console.log(`current state ${currentState} is not yet treated`);
            break;
    }
    // console.log(
    //   `currentState (${currentState}) + event (${event}) = newState (${newState})`,
    // );

    return newState;
};

const changeStateOneTileOpen = (event: MemoryEvent) => {
    let newState = MemoryState.UNDEFINED;
    if (event === MemoryEvent.TILE_UNDO) {
        // undo
        newState = MemoryState.NO_TILE_OPEN;
    } else {
        if (event === MemoryEvent.TILE_2_TRUE) {
            //     newState = MemoryState.TWO_TILES_OPEN_AND_FIT;
            // } else {
            newState = MemoryState.TWO_TILES_OPEN_NOT_FIT;
        }
    }
    return newState;
};
