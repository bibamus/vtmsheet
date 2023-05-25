import React from "react";
import {DisciplineName} from "../../model/Character";
import DotEntry from "../DotEntry";
import CharacterProps from "../CharacterProps";


export default function DisciplineBlock({
                                            character,
                                            characterDispatch

                                        }: CharacterProps): React.ReactElement {

    function createDisciplineEntry(index: number): React.ReactElement {
        let discipline = character.disciplines[index];
        return <div key={index} className="labeled-entry">
            <select className="label" value={discipline?.name}
                    onChange={(choice) => characterDispatch({
                        type: "setArrayProperty",
                        property: "disciplines",
                        index: index,
                        value: {name: choice.currentTarget.value as DisciplineName}
                    })}>
                <option></option>
                {
                    Object.values(DisciplineName).map(value => <option key={value}>{value}</option>)
                }
            </select>
            <DotEntry disabled={discipline?.name == null} maxValue={5} currValue={discipline?.level ?? 0}
                      setFunction={value => characterDispatch({
                          type: "setArrayProperty",
                          property: "disciplines",
                          index: index,
                          value: {level: value}
                      })}/>
        </div>

    }

    return <div>
        <h3 className="property-block-heading">Disciplines</h3>
        {Array.from(Array(5).keys()).map(index => createDisciplineEntry(index))}
    </div>
}