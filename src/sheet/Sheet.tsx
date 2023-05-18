import React, {useEffect, useState} from 'react';
import Character, {BackgroundName, DisciplineName} from "../model/Character";
import DotEntryWithLabel from "./DotEntryWithLabel";
import {capitalizeFirstLetter} from "../Helper";
import DotEntry from "./DotEntry";

export default function Sheet(): React.ReactElement {

    const [character, setCharacter] = useState<Character>(new Character());


    useEffect(() => {
        console.log(JSON.stringify(character));
    }, [character]);


    function createPropertyBlock(label: string, properties: (keyof Character)[]): React.ReactElement {
        return <div>
            <h3 className="property-block-heading">{label}</h3>,
            {
                properties.map(property => <DotEntryWithLabel key={property} label={capitalizeFirstLetter(property)}
                                                              maxValue={5}
                                                              currValue={character[property] as number}
                                                              setFunction={(value) => setCharacterProperty(property, value)}
                />)
            }
        </div>;
    }

    function setCharacterDisciplineLevel(index: number, value: number) {
        if (value === 1 && character.disciplines[index]?.level === 1) {
            value = 0;
        }
        let newDisciplines = [...character.disciplines];
        newDisciplines[index] = {
            ...newDisciplines[index],
            level: value
        }
        setCharacter({
            ...character,
            disciplines: newDisciplines
        })
    }

    function setCharacterDisciplineName(index: number, value: string) {
        let newDisciplines = [...character.disciplines];
        newDisciplines[index] = {
            ...newDisciplines[index],
            name: value as DisciplineName
        }
        setCharacter({
            ...character,
            disciplines: newDisciplines
        })
    }

    function createDisciplineEntry(index: number): React.ReactElement {
        let discipline = character.disciplines[index];
        return <div key={index} className="labeled-entry">
            <select id={`disciplines${index}`} className="label" defaultValue="" value={discipline?.name}
                    onChange={(choice) => setCharacterDisciplineName(index, choice.currentTarget.value)}>
                <option></option>
                {
                    Object.values(DisciplineName).map(value => <option key={value}>{value}</option>)
                }
            </select>
            <DotEntry disabled={discipline?.name == null} maxValue={5} currValue={discipline?.level ?? 0}
                      setFunction={value => setCharacterDisciplineLevel(index, value)}/>
        </div>

    }

    function createBackgroundEntry(index: number): React.ReactElement {
        let background = character.backgrounds[index];
        return <div key={index} className="labeled-entry">
            <select id={`backgrounds${index}`} className="label" defaultValue="" value={background?.name}
                    onChange={(choice) => setCharacterBackgroundName(index, choice.currentTarget.value)}>
                <option></option>
                {
                    Object.values(BackgroundName).map(value => <option key={value}>{value}</option>)
                }
            </select>
            <DotEntry disabled={background?.name == null} maxValue={5} currValue={background?.level ?? 0}
                      setFunction={value => setCharacterBackgroundLevel(index, value)}/>
        </div>
    }

    function createDisciplineBlock(): React.ReactElement {
        return <div>
            <h3 className="property-block-heading">Disciplines</h3>
            {Array.from(Array(5).keys()).map(index => createDisciplineEntry(index))}
        </div>

    }

    function setCharacterBackgroundName(index: number, value: string) {
        let newBackgrounds = [...character.backgrounds];
        newBackgrounds[index] = {
            ...newBackgrounds[index],
            name: value as BackgroundName
        }
        setCharacter({
            ...character,
            backgrounds: newBackgrounds
        })
    }

    function setCharacterBackgroundLevel(index: number, value: number) {
        if (value === 1 && character.backgrounds[index]?.level === 1) {
            value = 0;
        }
        let newBackgrounds = [...character.backgrounds];
        newBackgrounds[index] = {
            ...newBackgrounds[index],
            level: value

        }
        setCharacter({
            ...character,
            backgrounds: newBackgrounds
        })
    }


    function createBackgroundBlock(): React.ReactElement {
        return <div>
            <h3 className="property-block-heading">Backgrounds</h3>
            {Array.from(Array(5).keys()).map(index => createBackgroundEntry(index))}
        </div>
    }

    function createVirtuesBlock(): React.ReactElement {
        return <div>
            <h3 className="property-block-heading">Virtues</h3>
            <DotEntryWithLabel label="Conscience" maxValue={5} currValue={character.conscience}
                               setFunction={(value) => setCharacterProperty("conscience", value)}/>
            <DotEntryWithLabel label="Self-Control" maxValue={5} currValue={character.selfControl}
                               setFunction={(value) => setCharacterProperty("selfControl", value)}/>
            <DotEntryWithLabel label="Courage" maxValue={5} currValue={character.courage}
                               setFunction={(value) => setCharacterProperty("courage", value)}/>
        </div>
    }

    return (
        <div className="Sheet">
            <h1 className="section-heading">Vampires - The Masquerade</h1>
            <div>
                <h2 className="section-heading">Attributes</h2>
                <div className="col-section">
                    {createPropertyBlock("Physical", ["strength", "dexterity", "stamina"])}
                    {createPropertyBlock("Social", ["charisma", "manipulation", "appearance"])}
                    {createPropertyBlock("Mental", ["perception", "intelligence", "wits"])}

                </div>
            </div>
            <div>
                <h2 className="section-heading">Abilities</h2>
                <div className="col-section">
                    {createPropertyBlock("Talents", ["alertness", "athletics", "brawl", "dodge", "empathy", "expression", "intimidation", "leadership", "streetwise", "subterfuge"])}
                    {createPropertyBlock("Skills", ["animalKen", "crafts", "drive", "etiquette", "firearms", "melee", "performance", "security", "stealth", "survival"])}
                    {createPropertyBlock("Knowledges", ["academics", "computer", "finance", "investigation", "law", "linguistics", "medicine", "occult", "politics", "science"])}
                </div>
            </div>
            <div>
                <h2 className="section-heading">Advantages</h2>
                <div className="col-section">
                    {createDisciplineBlock()}
                    {createBackgroundBlock()}
                    {createVirtuesBlock()}
                </div>
            </div>

        </div>
    );

    function setCharacterProperty(property: keyof Character, value: number) {
        if (value === 1 && character[property] === 1) {
            value = 0;
        }
        setCharacter({
            ...character, [property]: value
        })
    }
}