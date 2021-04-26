import './style.css'

import { Content, MemContent } from '../logic/content';
import React, { useState } from 'react';

import { MemTile } from './MemTile';
import { MemoryEvent } from '../enums/MemoryEvent';
import { MemoryState } from '../enums/MemoryState';
import { change } from '../logic/statemachine';

interface TGridProps { content: Content }

export const MemGrid = ({ content }: TGridProps) => {

    const [currentState, setCurrentState] = useState<MemoryState>(MemoryState.NO_TILE_OPEN);

    const changeState = () => {
        const newState = change(currentState, MemoryEvent.TILE_1_OPEN);
        console.log(`change state: ${currentState} -> ${newState}`);
        setCurrentState(newState)
    }

    const [buttonStyle, setButtonStyle] = useState<string>("buttonClosed")

    const renderTile = (index: number, content: MemContent, classX: string) => {
        return <MemTile loop={index} key={content.index * 100 + content.nr} nr={content.nr}
            classStyle={classX} content="hello" onChange={changeState}
        />
    }


    const renderTiles = () => {
        let arr = [];
        for (let loop = 0; loop < 30; loop += 1) {
            arr.push(content.getTile(loop));
        }
        return arr.map((content, index) => renderTile(index, content, buttonStyle))
    }

    return (
        <div className="parent">
            {renderTiles()}
        </div>
    );
};
