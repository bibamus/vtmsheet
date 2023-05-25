import React from 'react';
import AttributesSection from "./sections/AttributeSection";
import AbilitiesSection from "./sections/AbilitiesSection";
import AdvantagesSection from "./sections/AdvantagesSection";
import MiscSection from "./sections/MiscSection";
import HeaderSection from "./sections/HeaderSection";
import CharacterProps from "./CharacterProps";

interface SheetProps extends CharacterProps {
    initialized: boolean;
}

export default function Sheet({character, characterDispatch, initialized}: SheetProps): React.ReactElement {

    if (!initialized) return (<div>Loading...</div>);

    return (<div className="sheet">
        <h1 className="section-heading">Vampires - The Masquerade</h1>
        <HeaderSection character={character} characterDispatch={characterDispatch}/>
        <AttributesSection character={character} characterDispatch={characterDispatch}/>
        <AbilitiesSection character={character} characterDispatch={characterDispatch}/>
        <AdvantagesSection character={character} characterDispatch={characterDispatch}/>
        <MiscSection character={character} characterDispatch={characterDispatch}/>
    </div>);


}