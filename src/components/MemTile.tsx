import React, { useState } from 'react';

import { MemoryAction } from '../redux/sample/type';
import { MemoryState } from '../enums/MemoryState';
import { RootState } from '../redux/sample/reducer';
import { TileContent } from './TileContent';
import { TileState } from '../enums/TileState';
import { useSelector } from 'react-redux';

const closed = 'buttonClosed';
const open = 'buttonOpen';
const solved = 'buttonSolved';

interface MemTileProps {
  loop: number;
  nr: number;
  content: string;
  index: number;
  click: (
    index: number,
    nr: number,
    disp: (action: MemoryAction) => void,
  ) => void;
  dispatch: (action: MemoryAction) => void;
}

export const MemTile = ({
  loop,
  nr,
  content,
  index,
  click,
  dispatch,
}: MemTileProps) => {
  function getTileState(index: number): TileState {
    const tiles = useSelector((state: RootState) => state.tiles);
    return tiles[index];
  }

  let tileCharacter = getTileState(loop);

  const changeColor =
    (loop: number, nr: number, dispatch: (action: MemoryAction) => void) =>
    () => {
      click(loop, nr, dispatch);
    };

  const renderButton = (tileState: TileState) => {
    const testid = `button.${nr}.${index}`;
    let style: string;
    let clickFunc = undefined;
    let buttonContent;
    switch (tileState) {
      case TileState.OPEN:
        style = open;
        clickFunc = changeColor(loop, nr, dispatch);
        buttonContent = <TileContent nr={`${nr}`} />;
        break;
      case TileState.CLOSED:
        style = closed;
        clickFunc = changeColor(loop, nr, dispatch);
        buttonContent = content;
        break;
      case TileState.SOLVED:
        style = solved;
        buttonContent = <TileContent nr={`${nr}`} />;
        break;
      default:
        break;
    }

    return (
      <button
        key={nr}
        data-testid={testid}
        className={style}
        onClick={clickFunc}
      >
        {buttonContent}
      </button>
    );
  };

  return renderButton(tileCharacter);
};
