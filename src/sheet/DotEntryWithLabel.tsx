import React, {useContext} from "react";
import DotEntry from "./DotEntry";
import Grid from "@mui/material/Unstable_Grid2";
import {MarkValueContext} from "../App";

interface DotEntryWithLabelProps {
    label: string;
    maxValue: number;
    currValue: number;
    setFunction: (value: number) => void;
}

export default function DotEntryWithLabel(props: DotEntryWithLabelProps): React.ReactElement {
    const markValue = useContext(MarkValueContext);
    return (
        <>
            <Grid xs={6}>
                <span
                    className={"label " + (markValue?.value === props.label.toLowerCase() ? "marked" : "")}>{props.label}</span>
            </Grid>
            <Grid xs={6}>
                <DotEntry maxValue={props.maxValue} currValue={props.currValue} setFunction={props.setFunction}/>
            </Grid>
        </>
    );
}