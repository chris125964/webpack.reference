import React from 'react';

interface TileContentProps {
  nr: string;
}

export const TileContent = ({ nr }: TileContentProps) => {
  return (
    <div>
      <h1>{nr}</h1>
    </div>
  );
};
