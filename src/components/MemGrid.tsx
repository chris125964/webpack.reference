import './style.css'
import './modal.css'

import * as actionTypes from '../redux/sample/actionTypes';

import { Content, MemContent } from '../logic/content';
import React, { useState } from 'react';

import { MemInfo } from './MemInfo';
import { MemTile } from './MemTile';
import { MemoryAction } from '../redux/sample/type';
import { MemoryEvent } from '../enums/MemoryEvent';
import { MemoryState } from '../enums/MemoryState';
import { Modal } from './Modal';
import { RootState } from '../redux/sample/reducer';
import { change } from '../logic/statemachine';
import { clickTile } from '../redux/sample/actionCreators';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

interface TGridProps { content: Content }

export const MemGrid = ({ content }: TGridProps) => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const dispatch = useDispatch();

    const finished = useSelector((state: RootState) => state.finished);
    // if (finished) {
    //     setShowModal(true);
    // }


    const renderTile = (index: number, content: MemContent) => {
        return <MemTile loop={index} key={content.index * 100 + content.nr} nr={content.nr} index={content.index}
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

    // const openModal = () => setShowModal(true);

    const closeModal = () => setShowModal(false);

    return (
        <div>
            <Modal show={finished} onClose={closeModal}></Modal>
            {/* <button onClick={openModal}>Modal</button> */}
            <MemInfo />
            <div className="parent">
                {renderTiles()}
            </div>
        </div>
    );
};
