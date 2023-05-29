import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

interface DotEntryProps {
    maxValue: number;
    currValue: number;
    setFunction: (value: number) => void;
    square?: boolean;
    disabled?: boolean;
}

export default function DotEntry(props: DotEntryProps): React.ReactElement {
    return (
        <div>
            <Grid container columns={Math.min(props.maxValue, 10)}>
                {
                    createDots(props)
                }
            </Grid>
        </div>
    );


}

function createDots({maxValue, currValue, setFunction, square, disabled}: DotEntryProps): React.ReactElement[] {
    let dots: React.ReactElement[] = [];
    let filledImage = square ? require("./filled-square.png") : require("./filled-dot.png");
    let emptyImage = square ? require("./empty-square.png") : require("./empty-dot.png");
    for (let i = 0; i < maxValue; i++) {
        let item = <Grid xs={1} key={i}><img className={"dot"} src={i < currValue ? filledImage : emptyImage}
                                             alt={i < currValue ? "filled" : "empty"}
                                             onClick={disabled ? () => {
                                             } : () => setFunction((currValue === 1 && i === 0) ? 0 : i + 1)}/>
        </Grid>
        dots.push(item);
    }
    return dots;
}