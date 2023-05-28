import React from "react";
import DotEntry from "./DotEntry";
import Grid from "@mui/material/Unstable_Grid2";

interface DotEntryWithLabelProps {
    label: string;
    maxValue: number;
    currValue: number;
    setFunction: (value: number) => void;
}

export default function DotEntryWithLabel(props: DotEntryWithLabelProps): React.ReactElement {
    return (
        <>
            <Grid xs={6}>
                <span className="label">{props.label}</span>
            </Grid>
            <Grid xs={6}>
                <DotEntry maxValue={props.maxValue} currValue={props.currValue} setFunction={props.setFunction}/>
            </Grid>
        </>
    );
}