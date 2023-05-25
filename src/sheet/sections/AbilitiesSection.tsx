import PropertyBlock from "./PropertyBlock";
import React from "react";
import SectionProps from "./SectionProps";

export default function AbilitiesSection({character, setCharacterProperty}: SectionProps) {
    return <div>
        <h2 className="section-heading">Abilities</h2>
        <div className="col-section">
            <PropertyBlock label={"Talents"}
                           properties={["alertness", "athletics", "brawl", "dodge", "empathy", "expression", "intimidation", "leadership", "streetwise", "subterfuge"]}
                           character={character} setCharacterProperty={setCharacterProperty}/>
            <PropertyBlock label={"Skills"}
                           properties={["animalKen", "crafts", "drive", "etiquette", "firearms", "melee", "performance", "security", "stealth", "survival"]}
                           character={character} setCharacterProperty={setCharacterProperty}/>
            <PropertyBlock label={"Knowledges"}
                           properties={["academics", "computer", "finance", "investigation", "law", "linguistics", "medicine", "occult", "politics", "science"]}
                           character={character} setCharacterProperty={setCharacterProperty}/>
        </div>
    </div>;
}