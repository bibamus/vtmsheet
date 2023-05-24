import React from "react";
import Character, {Discipline, DisciplineName} from "../model/Character";
import DotEntry from "./DotEntry";

interface DisciplineBlockProps {
    character: Character;
    setArrayProperty: (propertyName: "disciplines",
                       index: number,
                       value: Partial<Discipline>) => void;
}

export default function DisciplineBlock({character, setArrayProperty}: DisciplineBlockProps): React.ReactElement {

    function createDisciplineEntry(index: number): React.ReactElement {
        let discipline = character.disciplines[index];
        return <div key={index} className="labeled-entry">
            <select className="label" defaultValue="" value={discipline?.name}
                    onChange={(choice) => setArrayProperty("disciplines", index, {name: choice.currentTarget.value as DisciplineName})}>
                <option></option>
                {
                    Object.values(DisciplineName).map(value => <option key={value}>{value}</option>)
                }
            </select>
            <DotEntry disabled={discipline?.name == null} maxValue={5} currValue={discipline?.level ?? 0}
                      setFunction={value => setArrayProperty("disciplines", index, {level: value})}/>
        </div>

    }

    return <div>
        <h3 className="property-block-heading">Disciplines</h3>
        {Array.from(Array(5).keys()).map(index => createDisciplineEntry(index))}
    </div>
}