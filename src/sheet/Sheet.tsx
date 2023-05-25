import React, {useEffect, useState} from 'react';
import Character, {Background, Discipline, Flaw, Merit} from "../model/Character";
import MeritsAndFlawsBlock from "./MeritsAndFlawsBlock";
import AttributesSection from "./sections/AttributeSection";
import AbilitiesSection from "./sections/AbilitiesSection";
import AdvantagesSection from "./sections/AdvantagesSection";

export default function Sheet(): React.ReactElement {

    const [character, setCharacter] = useState<Character>(new Character());


    useEffect(() => {
        console.log(JSON.stringify(character));


    }, [character]);


    function setCharacterArrayProperty<T extends Discipline | Background | Merit | Flaw>(
        propertyName: "disciplines" | "backgrounds" | "merits" | "flaws",
        index: number,
        value: Partial<T>
    ) {
        setCharacter((prevCharacter) => {
            const newArray = [...prevCharacter[propertyName]];
            newArray[index] = {...newArray[index], ...value};
            return {...prevCharacter, [propertyName]: newArray};
        });
    }


    function MiscSection() {
        return <div>
            <div className={"col-section"}>
                <MeritsAndFlawsBlock character={character} setArrayProperty={setCharacterArrayProperty}/>
            </div>
        </div>;
    }

    return (
        <div className="sheet">
            <h1 className="section-heading">Vampires - The Masquerade</h1>
            <AttributesSection character={character} setCharacterProperty={setCharacterProperty}
                               setCharacterArrayProperty={setCharacterArrayProperty}/>
            <AbilitiesSection character={character} setCharacterProperty={setCharacterProperty}
                              setCharacterArrayProperty={setCharacterArrayProperty}/>
            <AdvantagesSection character={character} setCharacterProperty={setCharacterProperty}
                               setCharacterArrayProperty={setCharacterArrayProperty}/>
            <MiscSection/>
        </div>
    );

    function setCharacterProperty<K extends keyof Character>(property: K, value: Character[K]): void {
        setCharacter(prevCharacter => ({
            ...prevCharacter,
            [property]: value,
        }));
    }
}