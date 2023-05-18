import React from "react";
import DotEntry from "./DotEntry";

interface DotEntryWithLabelProps {
    label: string;
    maxValue: number;
    currValue: number;
    setFunction: (value: number) => void;
}

export default function DotEntryWithLabel(props: DotEntryWithLabelProps): React.ReactElement {
    return (
        <div className="labeled-entry">
            <span className="label">{props.label}</span>
            <DotEntry maxValue={props.maxValue} currValue={props.currValue} setFunction={props.setFunction}/>
        </div>
    );
}