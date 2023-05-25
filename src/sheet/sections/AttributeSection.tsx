import PropertyBlock from "./PropertyBlock";
import React from "react";
import SectionProps from "./SectionProps";

export default function AttributesSection({character, setCharacterProperty}: SectionProps) {
    return <div>
        <h2 className="section-heading">Attributes</h2>
        <div className="col-section">
            <PropertyBlock label={"Physical"} properties={["strength", "dexterity", "stamina"]}
                           character={character} setCharacterProperty={setCharacterProperty}/>
            <PropertyBlock label={"Social"} properties={["charisma", "manipulation", "appearance"]}
                           character={character} setCharacterProperty={setCharacterProperty}/>
            <PropertyBlock label={"Mental"} properties={["perception", "intelligence", "wits"]}
                           character={character} setCharacterProperty={setCharacterProperty}/>
        </div>
    </div>;
}