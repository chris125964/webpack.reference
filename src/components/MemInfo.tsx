import './style.css';

import React from 'react';
import { RootState } from '../redux/sample/reducer';
import { useSelector } from 'react-redux';

interface MemInfoProps {}

export const MemInfo = ({}: MemInfoProps) => {
  const nrMoves = useSelector((state: RootState) => state.nrMoves);
  const nrPairs = useSelector((state: RootState) => state.nrPairs);
  return (
    <div className="info">
      <div>Anzahl der Clicks: {nrMoves}</div>
      <div>Anzahl der Paare: {nrPairs}</div>
    </div>
  );
};
