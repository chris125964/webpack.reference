import React, { useState } from 'react';

interface MemTileProps {
    nr: number;
    classStyle: string;
}

export const MemTile = ({ nr, classStyle }: MemTileProps) => {

    const [buttonStyle, setButtonStyle] = useState<string>("buttonRed")


    const changeColor = (nr: number) => () => {
        console.log(`changeColor`);
        if (buttonStyle === "buttonRed") {
            setButtonStyle("buttonGreen");
        } else {
            setButtonStyle("buttonRed")
        }
    }

    return <button key={nr} className={buttonStyle} onClick={changeColor(nr)}>{nr}</button>
};
