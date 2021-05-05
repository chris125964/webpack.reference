import './style.css'

import * as actionTypes from '../redux/sample/actionTypes';

import { Content, MemContent } from '../logic/content';
import React, { useState } from 'react';

import { MemTile } from './MemTile';
import { MemoryAction } from '../redux/sample/type';
import { MemoryEvent } from '../enums/MemoryEvent';
import { MemoryState } from '../enums/MemoryState';
import { change } from '../logic/statemachine';
import { clickTile } from '../redux/sample/actionCreators';
import { useDispatch } from 'react-redux';

interface TGridProps { content: Content }

export const MemGrid = ({ content }: TGridProps) => {

    const [currentState, setCurrentState] = useState<MemoryState>(MemoryState.NO_TILE_OPEN);
    const [memIndex, setMemIndex] = useState<number>(-1);
    const [memResult, setMemResult] = useState<number>(-1);
    const dispatch = useDispatch();

    const renderTile = (index: number, content: MemContent) => {
        return <MemTile loop={index} key={content.index * 100 + content.nr} nr={content.nr}
            content={content.nr.toString()}
            click={clickTile} dispatch={dispatch}
        />
    }

    const renderTiles = () => {
        let arr = [];
        for (let loop = 0; loop < 30; loop += 1) {
            arr.push(content.getTile(loop));
        }
        return arr.map((content, index) => renderTile(index, content))
    }

    return (
        <div className="parent">
            {renderTiles()}
        </div>
    );
};
