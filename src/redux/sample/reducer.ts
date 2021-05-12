import * as actionTypes from './actionTypes';

import { MemoryAction } from "./type";
import { MemoryEvent } from "../../enums/MemoryEvent";
import { MemoryState } from "../../enums/MemoryState";
import { Tile } from "../../model/tile";
import { TileState } from "../../enums/TileState";
import { change } from "../../logic/statemachine";

let iniTiles = Array(30).fill(TileState.CLOSED);


export interface RootState {
    tile1: Tile;
    tile2: Tile;
    status: MemoryState;
    tiles: TileState[];
    nrMoves: number;
    nrPairs: number;
    finished: boolean;
    newGame: boolean;
}

let initialState = {
    tile1: new Tile(),
    tile2: new Tile(),
    status: MemoryState.NO_TILE_OPEN,
    tiles: iniTiles,
    nrMoves: 0,
    nrPairs: 0,
    finished: false,
    newGame: false
}

const toggleTile = (tiles: TileState[], index: number, solved = false) => {
    const copyTiles = [...tiles];
    let tile = copyTiles[index];
    if (solved) {
        copyTiles[index] = TileState.SOLVED;
    } else {
        copyTiles[index] = tile === TileState.CLOSED ? TileState.OPEN : TileState.CLOSED;
    }
    return copyTiles;
}

export default function reducer(currentState = initialState, action: MemoryAction) {

    switch (action.type) {
        case actionTypes.SET_TILE:
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
                        // one tile open
                        if (action.mem.index === currentState.tile1.index) {
                            // Undo
                            console.log(`undo`);
                            currentEvent = MemoryEvent.TILE_UNDO;
                        } else if (action.mem.nr === currentState.tile1.value) {
                            // found a pair
                            console.log(`found a pair`);
                            currentEvent = MemoryEvent.TILE_2_TRUE;

                        } else {
                            // tiles do not match
                            console.log(`tiles don't match`);
                            currentEvent = MemoryEvent.TILE_2_FALSE;
                        }
                    }
                }
            }
            let newStatus = change(currentStatus, currentEvent);

            let newState;
            let tile1 = new Tile();
            let tile2 = new Tile();
            tile1.value = action.mem.nr;
            let nrPairs = currentState.nrPairs;

            let tiles;
            switch (newStatus) {
                case MemoryState.NO_TILE_OPEN:
                    tiles = toggleTile(currentState.tiles, action.mem.index);
                    break;
                case MemoryState.ONE_TILE_OPEN:
                    tile1.index = action.mem.index;
                    tiles = toggleTile(currentState.tiles, currentState.tile1.index);
                    tiles = toggleTile(tiles, currentState.tile2.index);
                    tiles = toggleTile(tiles, action.mem.index);
                    break;
                case MemoryState.TWO_TILES_OPEN_NOT_FIT:
                    tile1.index = currentState.tile1.index;
                    tile2.index = action.mem.index;
                    tiles = toggleTile(currentState.tiles, action.mem.index);
                    break
                case MemoryState.TWO_TILES_OPEN_AND_FIT:
                    tiles = toggleTile(currentState.tiles, action.mem.index, true);
                    tiles = toggleTile(tiles, currentState.tile1.index, true);
                    nrPairs += 1;
                    break;
                default:
                    tiles = toggleTile(currentState.tiles, action.mem.index);
                    break;
            }
            tile2.value = newStatus === MemoryState.TWO_TILES_OPEN_NOT_FIT ? action.mem.nr : currentState.tile2.value;
            newState = {
                tile1,
                tile2,
                status: newStatus,
                tiles,
                nrMoves: currentState.nrMoves + 1,
                nrPairs,
                finished: nrPairs === 15,
                newGame: false
            }
            return newState;
        case actionTypes.FINISH_GAME:
            let newState2 = { ...currentState }
            newState2.newGame = true;
            return newState2;
            break;
        default:
            return currentState
    }
}