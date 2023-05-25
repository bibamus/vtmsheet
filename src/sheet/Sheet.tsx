import React, {useEffect, useState} from 'react';
import Character, {Background, Discipline, Flaw, Merit} from "../model/Character";
import AttributesSection from "./sections/AttributeSection";
import AbilitiesSection from "./sections/AbilitiesSection";
import AdvantagesSection from "./sections/AdvantagesSection";
import {characterDB} from "../indexeddb/CharacterDB";
import MiscSection from "./sections/MiscSection";

export default function Sheet(): React.ReactElement {

    const [character, setCharacter] = useState<Character>(new Character());
    const [initialized, setInitialized] = useState<boolean>(false);

    useEffect(() => {
        characterDB.characters.toArray().then((characters) => {
            if (characters.length > 0) {
                setCharacter(characters[0]);
            }
            setInitialized(true);
        });
    }, []);

    useEffect(() => {
        console.log(JSON.stringify(character));
        if (initialized) {
            (async () => await characterDB.characters.put(character))()
        }
    }, [initialized, character]);


    function setCharacterArrayProperty<T extends Discipline | Background | Merit | Flaw>(
        propertyName: "disciplines" | "backgrounds" | "merits" | "flaws",
        index: number,
        value: Partial<T>
    ) {
        setCharacter(prevCharacter => {
            const newArray = [...prevCharacter[propertyName]];
            newArray[index] = {...newArray[index], ...value};
            return {...prevCharacter, [propertyName]: newArray};
        });
    }

    function setCharacterProperty<K extends keyof Character>(property: K, value: Character[K]): void {
        setCharacter(prevCharacter => ({
            ...prevCharacter,
            [property]: value,
        }));
    }


    if (!initialized) return (<div>Loading...</div>);

    return (
        <div className="sheet">
            <h1 className="section-heading">Vampires - The Masquerade</h1>
            <AttributesSection character={character} setCharacterProperty={setCharacterProperty}
                               setCharacterArrayProperty={setCharacterArrayProperty}/>
            <AbilitiesSection character={character} setCharacterProperty={setCharacterProperty}
                              setCharacterArrayProperty={setCharacterArrayProperty}/>
            <AdvantagesSection character={character} setCharacterProperty={setCharacterProperty}
                               setCharacterArrayProperty={setCharacterArrayProperty}/>
            <MiscSection character={character} setCharacterProperty={setCharacterProperty}
                         setCharacterArrayProperty={setCharacterArrayProperty}/>
        </div>
    );


}