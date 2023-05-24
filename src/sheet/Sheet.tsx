import React, {useEffect, useState} from 'react';
import Character, {Background, BackgroundName, Discipline, Flaw, Merit} from "../model/Character";
import DotEntry from "./DotEntry";
import MeritsAndFlawsBlock from "./MeritsAndFlawsBlock";
import DisciplineBlock from "./DisciplineBlock";
import PropertyBlock from "./PropertyBlock";

export default function Sheet(): React.ReactElement {

    const [character, setCharacter] = useState<Character>(new Character());


    useEffect(() => {
        console.log(JSON.stringify(character));
    }, [character]);

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


    return (
        <div className="sheet">
            <h1 className="section-heading">Vampires - The Masquerade</h1>
            <div>
                <h2 className="section-heading">Attributes</h2>
                <div className="col-section">
                    <PropertyBlock label={"Physical"} properties={["strength", "dexterity", "stamina"]}
                                   character={character} setCharacterProperty={setCharacterProperty}/>
                    <PropertyBlock label={"Social"} properties={["charisma", "manipulation", "appearance"]}
                                   character={character} setCharacterProperty={setCharacterProperty}/>
                    <PropertyBlock label={"Mental"} properties={["perception", "intelligence", "wits"]}
                                   character={character} setCharacterProperty={setCharacterProperty}/>
                </div>
            </div>
            <div>
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
            </div>
            <div>
                <h2 className="section-heading">Advantages</h2>
                <div className="col-section">
                    <DisciplineBlock character={character} setArrayProperty={updateCharacterArrayProperty}/>
                    {createBackgroundBlock()}
                    <PropertyBlock label={"Virtues"} properties={["conscience", "selfControl", "courage"]}
                                   character={character} setCharacterProperty={setCharacterProperty}/>
                </div>
            </div>
            <div>
                <div className={"col-section"}>
                    <MeritsAndFlawsBlock character={character} setArrayProperty={updateCharacterArrayProperty}/>
                </div>
            </div>
        </div>
    );

    function setCharacterProperty<K extends keyof Character>(property: K, value: Character[K]): void {
        setCharacter(prevCharacter => ({
            ...prevCharacter,
            [property]: value,
        }));
    }
}