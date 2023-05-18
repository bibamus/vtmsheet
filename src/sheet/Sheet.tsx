import React, {useEffect, useState} from 'react';
import Character, {
    Background,
    BackgroundName,
    Discipline,
    DisciplineName,
    Flaw,
    FlawName,
    Merit,
    MeritName
} from "../model/Character";
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


    function createDisciplineEntry(index: number): React.ReactElement {
        let discipline = character.disciplines[index];
        return <div key={index} className="labeled-entry">
            <select className="label" defaultValue="" value={discipline?.name}
                    onChange={(choice) => updateCharacterArrayProperty<Discipline>("disciplines", index, {name: choice.currentTarget.value as DisciplineName})}>
                <option></option>
                {
                    Object.values(DisciplineName).map(value => <option key={value}>{value}</option>)
                }
            </select>
            <DotEntry disabled={discipline?.name == null} maxValue={5} currValue={discipline?.level ?? 0}
                      setFunction={value => updateCharacterArrayProperty<Discipline>("disciplines", index, {level: value})}/>
        </div>

    }

    function createBackgroundEntry(index: number): React.ReactElement {
        let background = character.backgrounds[index];
        return <div key={index} className="labeled-entry">
            <select className="label" defaultValue="" value={background?.name}
                    onChange={(choice) => updateCharacterArrayProperty<Background>("backgrounds", index, {name: choice.currentTarget.value as BackgroundName})}>
                <option></option>
                {
                    Object.values(BackgroundName).map(value => <option key={value}>{value}</option>)
                }
            </select>
            <DotEntry disabled={background?.name == null} maxValue={5} currValue={background?.level ?? 0}
                      setFunction={value => updateCharacterArrayProperty<Background>("backgrounds", index, {level: value})}/>
        </div>
    }

    function createDisciplineBlock(): React.ReactElement {
        return <div>
            <h3 className="property-block-heading">Disciplines</h3>
            {Array.from(Array(5).keys()).map(index => createDisciplineEntry(index))}
        </div>

    }


    function updateCharacterArrayProperty<T extends Discipline | Background | Merit | Flaw>(
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

    function createMeritEntry(index: number): React.ReactElement {
        let merit = character.merits[index];
        return <div key={index} className="labeled-entry">
            <select className="label" defaultValue="" value={merit?.name}
                    onChange={(choice) => updateCharacterArrayProperty<Merit>("merits", index, {name: choice.currentTarget.value as MeritName})}
            >
                <option></option>
                {
                    Object.values(MeritName).map(value => <option key={value}>{value}</option>)
                }
            </select>
            <select className="label" defaultValue="" value={merit?.cost ?? 0}
                    onChange={(choice) => updateCharacterArrayProperty<Merit>("merits", index, {cost: parseInt(choice.currentTarget.value)})}
            >
                <option></option>
                {Array.from(Array(7).keys()).map(index => <option>{index + 1}</option>)}
            </select>
        </div>
    }

    function createFlawEntry(index: number) {
        let flaw = character.flaws[index];
        return <div key={index} className="labeled-entry">
            <select className="label" defaultValue="" value={flaw?.name}
                    onChange={(choice) => updateCharacterArrayProperty<Flaw>("flaws", index, {name: choice.currentTarget.value as FlawName})}
            >
                <option></option>
                {
                    Object.values(FlawName).map(value => <option key={value}>{value}</option>)
                }
            </select>
            <select className="label"
                    onChange={(choice) => updateCharacterArrayProperty<Flaw>("flaws", index, {cost: parseInt(choice.currentTarget.value)})}
                    defaultValue="" value={flaw?.cost ?? 0}
            >
                <option></option>
                {Array.from(Array(7).keys()).map(index => <option>{index + 1}</option>)}
            </select>
        </div>
    }

    function createMeritsAndFlawsBlock(): React.ReactElement {
        return <div>
            <h3 className="property-block-heading">Merits</h3>
            {Array.from(Array(6).keys()).map(index => createMeritEntry(index))}
            <h3 className="property-block-heading">Flaws</h3>
            {Array.from(Array(6).keys()).map(index => createFlawEntry(index))}
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
            <div>
                <div className={"col-section"}>
                    {createMeritsAndFlawsBlock()}
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