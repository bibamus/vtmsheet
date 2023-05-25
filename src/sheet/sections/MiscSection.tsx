import MeritsAndFlawsBlock from "./MeritsAndFlawsBlock";
import React from "react";
import CharacterProps from "../CharacterProps";
import ResourcesBlock from "./ResourcesBlock";
import StatusBlock from "./StatusBlock";


export default function MiscSection({character, characterDispatch}: CharacterProps) {
    return <div>
        <h2 className="section-heading">Misc</h2>
        <div className={"col-section"}>
            <MeritsAndFlawsBlock character={character} characterDispatch={characterDispatch}/>
            <ResourcesBlock character={character} characterDispatch={characterDispatch}/>
            <StatusBlock character={character} characterDispatch={characterDispatch}/>
        </div>
    </div>;
}