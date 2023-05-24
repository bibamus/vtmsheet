import React from "react";

interface DotEntryProps {
    maxValue: number;
    currValue: number;
    setFunction: (value: number) => void;
    disabled?: boolean;
}

export default function DotEntry(props: DotEntryProps): React.ReactElement {
    return (
        <div>
            {
                createDots(props)
            }

        </div>
    );


}

function createDots({maxValue, currValue, setFunction, disabled}: DotEntryProps): React.ReactElement[] {
    let dots: React.ReactElement[] = [];
    for (let i = 0; i < maxValue; i++) {
        let item = <img key={i} src={i < currValue ? require("./filled.png") : require("./empty.png")}
                        alt={i < currValue ? "filled" : "empty"}
                        onClick={disabled ? () => {
                        } : () => setFunction((currValue === 1 && i === 0) ? 0 : i + 1)}/>
        dots.push(item);
    }
    return dots;
}