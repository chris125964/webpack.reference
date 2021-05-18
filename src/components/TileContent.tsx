import React from 'react';

interface TileContentProps {
  nr: string;
}

export const TileContent = ({ nr }: TileContentProps) => {
  const zeroPad = (num: number, places: number) =>
    String(num).padStart(places, '0');
  return (
    <div>
      <img
        className="imageTile"
        src={`assets/1860-${zeroPad(parseInt(nr, 10), 3)}.jpg`}
      />
    </div>
  );
};
