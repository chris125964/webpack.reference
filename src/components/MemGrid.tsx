import './style.css'

import * as actionTypes from '../redux/sample/actionTypes';

import { Content, MemContent } from '../logic/content';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MemTile } from './MemTile';
import { MemoryAction } from '../redux/sample/type';
import { MemoryEvent } from '../enums/MemoryEvent';
import { MemoryState } from '../enums/MemoryState';
import { change } from '../logic/statemachine';

interface TGridProps { content: Content }

export const MemGrid = ({ content }: TGridProps) => {

    const [currentState, setCurrentState] = useState<MemoryState>(MemoryState.NO_TILE_OPEN);
    const [memIndex, setMemIndex] = useState<number>(-1);
    const [memResult, setMemResult] = useState<number>(-1);

    const changeState = (index: number, tileResult: number) => {
        const newState = change(currentState, MemoryEvent.TILE_1_OPEN);
        console.log(`change state[${index}] = ${tileResult}: ${currentState}` +
            ` -> ${newState} -- bisher: [${memIndex}] = ${memResult}`);
        if (tileResult === memResult) {
            if (index === memIndex) {
                console.log(`Undo`);
            } else {
                console.log(`Paar gefunden`);
            }
        } else {
            console.log(`Kein Paar`);
        }
        setCurrentState(newState);
        setMemIndex(index);
        setMemResult(tileResult);
    }

    const [buttonStyle, setButtonStyle] = useState<string>("buttonClosed")

    const renderTile = (index: number, content: MemContent, classX: string) => {
        return <MemTile loop={index} key={content.index * 100 + content.nr} nr={content.nr}
            classStyle={classX} content={content.nr.toString()} onChange={changeState} click={clickTile}
        />
    }

    // interface RootState {
    //     userFirstName: string;
    //     userLastName: string;
    // }

    // const firstName = useSelector((state: RootState) => {
    //     return state.userFirstName
    // })
    // const lastName = useSelector((state: RootState) => {
    //     return state.userLastName
    // })

    const dispatch = useDispatch();

    const clickTile = (index: number, nr: number) => {
        const action: MemoryAction = {
            type: actionTypes.SET_TILE,
            mem: { index, nr, status: MemoryState.UNDEFINED }
        }
        dispatch({ type: "SET_TILE", mem: { index, nr } })
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
