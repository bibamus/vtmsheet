import MeritsAndFlawsBlock from "./MeritsAndFlawsBlock";
import React from "react";
import SectionProps from "./SectionProps";
import ResourcesBlock from "./ResourcesBlock";
import StatusBlock from "./StatusBlock";


export default function MiscSection({character, setCharacterProperty, setCharacterArrayProperty}: SectionProps) {
    return <div>
        <h2 className="section-heading">Misc</h2>
        <div className={"col-section"}>
            <MeritsAndFlawsBlock character={character} setArrayProperty={setCharacterArrayProperty}/>
            <ResourcesBlock character={character} setCharacterProperty={setCharacterProperty}/>
            <StatusBlock character={character} setCharacterProperty={setCharacterProperty}/>
        </div>
    </div>;
}