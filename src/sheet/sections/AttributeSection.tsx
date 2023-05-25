import PropertyBlock from "./PropertyBlock";
import React from "react";
import CharacterProps from "../CharacterProps";

export default function AttributesSection({character, characterDispatch}: CharacterProps) {
    return <div>
        <h2 className="section-heading">Attributes</h2>
        <div className="col-section">
            <PropertyBlock label={"Physical"} properties={["strength", "dexterity", "stamina"]}
                           character={character} characterDispatch={characterDispatch}/>
            <PropertyBlock label={"Social"} properties={["charisma", "manipulation", "appearance"]}
                           character={character} characterDispatch={characterDispatch}/>
            <PropertyBlock label={"Mental"} properties={["perception", "intelligence", "wits"]}
                           character={character} characterDispatch={characterDispatch}/>
        </div>
    </div>;
}