import React from "react";
import DisciplineBlock from "./DisciplineBlock";
import PropertyBlock from "./PropertyBlock";
import SectionProps from "./SectionProps";
import {Background, BackgroundName} from "../../model/Character";
import DotEntry from "../DotEntry";

export default function AdvantagesSection({
                                              character,
                                              setCharacterProperty,
                                              setCharacterArrayProperty
                                          }: SectionProps): React.ReactElement {

    function createBackgroundEntry(index: number): React.ReactElement {
        let background = character.backgrounds[index];
        return <div key={index} className="labeled-entry">
            <select className="label" defaultValue="" value={background?.name}
                    onChange={(choice) => setCharacterArrayProperty<Background>("backgrounds", index, {name: choice.currentTarget.value as BackgroundName})}>
                <option></option>
                {
                    Object.values(BackgroundName).map(value => <option key={value}>{value}</option>)
                }
            </select>
            <DotEntry disabled={background?.name == null} maxValue={5} currValue={background?.level ?? 0}
                      setFunction={value => setCharacterArrayProperty<Background>("backgrounds", index, {level: value})}/>
        </div>
    }

    function BackgroundBlock(): React.ReactElement {
        return <div>
            <h3 className="property-block-heading">Backgrounds</h3>
            {Array.from(Array(5).keys()).map(index => createBackgroundEntry(index))}
        </div>
    }


    return <div>
        <h2 className="section-heading">Advantages</h2>
        <div className="col-section">
            <DisciplineBlock character={character} setCharacterArrayProperty={setCharacterArrayProperty}/>
            <BackgroundBlock/>
            <PropertyBlock label={"Virtues"} properties={["conscience", "selfControl", "courage"]}
                           character={character} setCharacterProperty={setCharacterProperty}/>
        </div>
    </div>;
}

