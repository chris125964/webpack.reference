import './style.css';
import './modal.css';

import * as actionTypes from '../redux/sample/actionTypes';

import { Content, MemContent } from '../logic/content';
import React, { useState } from 'react';
import { clickTile, finishGame } from '../redux/sample/actionCreators';

import { MemInfo } from './MemInfo';
import { MemTile } from './MemTile';
import { MemoryAction } from '../redux/sample/type';
import { MemoryEvent } from '../enums/MemoryEvent';
import { MemoryState } from '../enums/MemoryState';
import { Modal } from './Modal';
import { RootState } from '../redux/sample/reducer';
import { change } from '../logic/statemachine';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

interface TGridProps {
  content: Content;
  onNewGame: () => void;
}

export const MemGrid = ({ content, onNewGame }: TGridProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const finished = useSelector((state: RootState) => state.finished);
  const newGame = useSelector((state: RootState) => state.newGame);

  const renderTile = (index: number, content: MemContent) => {
    return (
      <MemTile
        loop={index}
        key={content.index * 100 + content.nr}
        nr={content.nr}
        index={content.index}
        indexx={content.indexx}
        content={content.nr.toString()}
        click={clickTile}
        dispatch={dispatch}
      />
    );
  };

  const renderTiles = () => {
    let arr = [];
    for (let loop = 0; loop < 30; loop += 1) {
      arr.push(content.getTile(loop));
    }
    return arr.map((content, index) => renderTile(index, content));
  };

  const closeModal = () => {
    setShowModal(false);
    finishGame(dispatch);
  };

  return (
    <div>
      <Modal show={finished && !newGame} onClose={closeModal}></Modal>
      <MemInfo onNewGame={onNewGame} />
      <div className="parent">{renderTiles()}</div>
    </div>
  );
};
