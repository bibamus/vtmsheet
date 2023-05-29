import React, {useCallback, useEffect} from "react";
import {Discipline, DisciplineName} from "../../model/Character";
import CharacterProps from "../CharacterProps";
import DotEntryWithLabel from "../DotEntryWithLabel";
import Grid from "@mui/material/Unstable_Grid2";


export default function DisciplineBlock({
                                            character,
                                            characterDispatch

                                        }: CharacterProps): React.ReactElement {

    const getValidDisciplines = useCallback(() => {
        return Object.values(DisciplineName)
            .filter(value => character.disciplines.find(discipline => discipline.name === value) == null);
    }, [character.disciplines])


    const [selectedDiscipline, setSelectedDiscipline] = React.useState<DisciplineName | null>(getValidDisciplines().length > 0 ? getValidDisciplines()[0] : null);


    useEffect(() => {
        setSelectedDiscipline(getValidDisciplines().length > 0 ? getValidDisciplines()[0] : null);
    }, [getValidDisciplines])

    function addDiscipline() {
        if (selectedDiscipline != null) {
            if (character.disciplines.find(discipline => discipline.name === selectedDiscipline) != null) {
                return;
            }
            characterDispatch({
                type: "addArrayProperty",
                property: "disciplines",
                value: {name: selectedDiscipline, level: 0}
            });
        }
    }


    function AddDisciplineRow(): React.ReactElement {
        return <div>
            <select className="label" value={selectedDiscipline ?? ""}
                    onChange={event => setSelectedDiscipline(event.target.value as DisciplineName)}>
                {getValidDisciplines().map(value => <option key={value}>{value}</option>)}
            </select>
            <button onClick={addDiscipline}>Add Discipline</button>
        </div>;
    }


    function updateDiscipline(discipline: Discipline, level: number) {
        characterDispatch({
            type: "setArrayProperty",
            property: "disciplines",
            index: character.disciplines.findIndex(value => value.name === discipline.name),
            value: {name: discipline.name, level: level}
        });
    }

    function createDisciplineEntry(discipline: Discipline): React.ReactElement {
        return <Grid container key={discipline.name}>
            <DotEntryWithLabel label={discipline.name} maxValue={5}
                               currValue={discipline.level}
                               setFunction={value => updateDiscipline(discipline, value)}/>
        </Grid>
    }

    return <div>
        <h3 className="property-block-heading">Disciplines</h3>
        {character.disciplines.map((discipline) => createDisciplineEntry(discipline))}
        <AddDisciplineRow/>
    </div>
}