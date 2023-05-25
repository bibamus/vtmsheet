import React from "react";

interface DotEntryProps {
    maxValue: number;
    currValue: number;
    setFunction: (value: number) => void;
    square?: boolean;
    disabled?: boolean;
}

export default function DotEntry(props: DotEntryProps): React.ReactElement {
    return (
        <div className={"dot-container"}>
            {
                createDots(props)
            }

        </div>
    );


}

function createDots({maxValue, currValue, setFunction, square, disabled}: DotEntryProps): React.ReactElement[] {
    let dots: React.ReactElement[] = [];
    let filledImage = square ? require("./filled-square.png") : require("./filled-dot.png");
    let emptyImage = square ? require("./empty-square.png") : require("./empty-dot.png");
    for (let i = 0; i < maxValue; i++) {
        let item = <img className={"dot"} key={i} src={i < currValue ? filledImage : emptyImage}
                        alt={i < currValue ? "filled" : "empty"}
                        onClick={disabled ? () => {
                        } : () => setFunction((currValue === 1 && i === 0) ? 0 : i + 1)}/>
        dots.push(item);
        if (i % 10 === 9) {
            dots.push(<br key={i + 1}/>);
        }
    }
    return dots;
}