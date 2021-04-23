import './style.css'

import React, { useState } from 'react';

import { MemTile } from './MemTile';

interface TGridProps { }

export const MemGrid = ({ }: TGridProps) => {

    const [buttonStyle, setButtonStyle] = useState<string>("buttonRed")

    const renderTile = (nr: number, classX: string) => {
        return <MemTile key={nr} nr={nr} classStyle={classX} />
    }

    const renderTiles = () => {
        let arr = [];
        for (let loop = 0; loop < 30; loop += 1) {
            arr.push(loop);
        }
        return arr.map(x => renderTile(x, buttonStyle))
    }

    return (
        <div className="parent">
            {renderTiles()}
        </div>
    );
};
