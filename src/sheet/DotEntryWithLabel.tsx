import React, {useContext, useEffect} from "react";
import DotEntry from "./DotEntry";
import Grid from "@mui/material/Unstable_Grid2";
import {MarkValueContext} from "../App";

interface DotEntryWithLabelProps {
    label: string;
    maxValue: number;
    currValue: number;
    setFunction: (value: number) => void;
    markSelector?: {
        type: string,
        value: string
    }
}

export default function DotEntryWithLabel(props: DotEntryWithLabelProps): React.ReactElement {
    const [marked, setMarked] = React.useState(false);
    const markValue = useContext(MarkValueContext);
    useEffect(() => {
        if (props.markSelector !== undefined)
            setMarked(markValue?.value === props.markSelector.value && markValue?.type === props.markSelector.type);
    }, [markValue, props.markSelector]);
    return (
        <>
            <Grid xs={6}>
                <span
                    className={"label " + (marked ? "marked" : "")}>{props.label}</span>
            </Grid>
            <Grid xs={6}>
                <DotEntry maxValue={props.maxValue} currValue={props.currValue} setFunction={props.setFunction}/>
            </Grid>
        </>
    );
}