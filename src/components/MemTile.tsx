import React, { useState } from 'react';

import { MemoryState } from '../enums/MemoryState';
import { TileContent } from './TileContent';

const closed = "buttonClosed"
const open = "buttonOpen"

interface MemTileProps {
    loop: number;
    nr: number;
    classStyle: string;
    content: string;
    onChange: (index: number, tileResult: number) => void;
}

export const MemTile = ({
    loop, nr, classStyle, content, onChange }: MemTileProps) => {

    const [buttonStyle, setButtonStyle] = useState<string>(closed)


    const changeColor = (nr: number) => () => {
        if (buttonStyle === closed) {
            setButtonStyle(open);
        } else {
            setButtonStyle(closed)
        }
        onChange(loop, nr)
    }

    // console.log(`MemTile(loop: ${loop}, nr: ${nr}): ${classStyle}`);
    const renderButton = (style: string) => {
        const testid = `button.${loop}`
        if (style === closed) {
            return <button key={nr} data-testid={testid} className={style} onClick={changeColor(nr)}>{content}</button>
        } else {
            return <button key={nr} data-testid={testid} className={style} onClick={changeColor(nr)}><TileContent nr={nr}></TileContent></button>
        }
    }


    return renderButton(buttonStyle)
};
