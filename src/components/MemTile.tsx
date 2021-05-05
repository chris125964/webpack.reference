import React, { useState } from 'react';

import { MemoryAction } from '../redux/sample/type';
import { MemoryState } from '../enums/MemoryState';
import { RootState } from '../redux/sample/reducer';
import { TileContent } from './TileContent';
import { TileState } from '../enums/TileState';
import { useSelector } from 'react-redux'

const closed = "buttonClosed"
const open = "buttonOpen"
const solved = "buttonSolved"

interface MemTileProps {
    loop: number;
    nr: number;
    content: string;
    click: (index: number, nr: number, disp: (action: MemoryAction) => void) => void;
    dispatch: (action: MemoryAction) => void
}

export const MemTile = ({
    loop, nr, content, click, dispatch }: MemTileProps) => {

    function getTileState(index: number): TileState {
        const tiles = useSelector((state: RootState) => state.tiles)
        return tiles[index];
    }

    let tileCharacter = getTileState(loop);

    const tt = useSelector((state: RootState) => state.tiles)

    const changeColor = (loop: number, nr: number, dispatch: (action: MemoryAction) => void) => () => {

        click(loop, nr, dispatch);
    }


    // console.log(`MemTile(loop: ${loop}, nr: ${nr}): ${classStyle}`);
    const renderButton = (tileState: TileState) => {
        const testid = `button.${loop}`
        let butt;
        let style: string;
        if (tileState === TileState.OPEN) {
            style = open;
            butt = <button key={nr} data-testid={testid} className={style}
                onClick={changeColor(loop, nr, dispatch)}>
                <TileContent nr={`${nr} -> ${tileCharacter}`} />
            </button>;
        } else if (tileState === TileState.CLOSED) {
            style = closed;
            butt = <button key={nr} data-testid={testid} className={style}
                onClick={changeColor(loop, nr, dispatch)}>
                {content}: {tileCharacter}
            </button>;
        } else {
            style = solved;
            butt = <button key={nr} data-testid={testid} className={style}>
                ???
            </button>;
        }
        return butt;
    }


    return renderButton(tileCharacter)
};
