import React, {useCallback, useEffect} from "react";
import {Flaw, FlawName, Merit, MeritName} from "../../model/Character";
import CharacterProps from "../CharacterProps";
import Grid from "@mui/material/Unstable_Grid2";


export default function MeritsAndFlawsBlock({character, characterDispatch}: CharacterProps): React.ReactElement {

    const getValidMerits = useCallback(() => Object.values(MeritName)
        .filter(value => character.merits.find(merit => merit.name === value) == null), [character.merits]);

    const getValidFlaws = useCallback(() => Object.values(FlawName)
        .filter(value => character.flaws.find(flaw => flaw.name === value) == null), [character.flaws]);


    const costArray = Array.from(Array(7).keys()).map(index => (index + 1).toString());

    const [selectedMeritName, setSelectedMeritName] = React.useState<MeritName | null>(getValidMerits().length > 0 ? getValidMerits()[0] : null);
    const [selectedMeritCost, setSelectedMeritCost] = React.useState<string>(costArray[0]);

    const [selectedFlawName, setSelectedFlawName] = React.useState<FlawName | null>(getValidFlaws().length > 0 ? getValidFlaws()[0] : null);
    const [selectedFlawCost, setSelectedFlawCost] = React.useState<string>(costArray[0]);


    useEffect(() => {
        setSelectedMeritName(getValidMerits().length > 0 ? getValidMerits()[0] : null);
    }, [getValidMerits])

    useEffect(() => {
        setSelectedFlawName(getValidFlaws().length > 0 ? getValidFlaws()[0] : null);
    }, [getValidFlaws]);


    function addMerit() {
        if (selectedMeritName != null) {
            if (character.merits.find(merit => merit.name === selectedMeritName) != null) {
                return;
            }
            characterDispatch({
                type: "addArrayProperty",
                property: "merits",
                value: {name: selectedMeritName, cost: parseInt(selectedMeritCost)}
            });
        }

    }

    function addFlaw() {
        if (selectedFlawName != null) {
            if (character.flaws.find(flaw => flaw.name === selectedFlawName) != null) {
                return;
            }
            characterDispatch({
                type: "addArrayProperty",
                property: "flaws",
                value: {name: selectedFlawName, cost: parseInt(selectedFlawCost)}
            });
        }
    }

    function AddMeritRow(): React.ReactElement {
        return <Grid container>
            <Grid xs={6}>
                <select className="label constrained" value={selectedMeritName ?? ""}
                        onChange={event => setSelectedMeritName(event.target.value as MeritName)}>
                    {getValidMerits().map(value => <option key={value}>{value}</option>)}
                </select>
            </Grid>
            <Grid xs={5}>
                <select className="label" value={selectedMeritCost}
                        onChange={event => setSelectedMeritCost(event.target.value)}>
                    {createCostOptions()}
                </select>
            </Grid>
            <Grid xs={1}>
                <button onClick={addMerit}>Add Merit</button>
            </Grid>
        </Grid>
    }

    function AddFlawRow(): React.ReactElement {
        return <Grid container>
            <Grid xs={6}>
                <select className="label constrained" value={selectedFlawName ?? ""}
                        onChange={event => setSelectedFlawName(event.target.value as FlawName)}>
                    {getValidFlaws().map(value => <option key={value}>{value}</option>)}
                </select>
            </Grid>
            <Grid xs={5}>
                <select className="label" value={selectedFlawCost}
                        onChange={event => setSelectedFlawCost(event.target.value)}>
                    {createCostOptions()}
                </select>
            </Grid>
            <Grid xs={1}>
                <button onClick={addFlaw}>Add Flaw</button>
            </Grid>
        </Grid>
    }

    function createCostOptions(): React.ReactElement {
        return createOptionsWithEmptyOption(costArray);
    }

    function createOptionsWithEmptyOption(values: string[]) {
        return <>
            <option key={""}></option>
            {values.map(value => <option key={value}>{value}</option>)}
        </>;
    }

    function createFlawEntry(flaw: Flaw) {
        return <Grid container key={flaw.name}>
            <Grid xs={6}>
                <div className="label">{flaw.name}</div>
            </Grid>
            <Grid xs={5}>
                <div className="label text-right">{flaw.cost}</div>
            </Grid>
            <Grid xs={1}>
                <button onClick={() => characterDispatch({
                    type: "removeArrayProperty",
                    property: "flaws",
                    value: flaw
                })}>Remove
                </button>
            </Grid>
        </Grid>
    }

    function createMeritEntry(merit: Merit): React.ReactElement {
        return <Grid container key={merit.name}>
            <Grid xs={6}>
                <div className="label">{merit.name}</div>
            </Grid>
            <Grid xs={5}>
                <div className="label text-right">{merit.cost}</div>
            </Grid>
            <Grid xs={1}>
                <button onClick={() => characterDispatch({
                    type: "removeArrayProperty",
                    property: "merits",
                    value: merit
                })}>Remove
                </button>
            </Grid>
        </Grid>

    }


    return <div>
        <h3 className="property-block-heading">Merits</h3>
        {character.merits.map(merit => createMeritEntry(merit))}
        <AddMeritRow/>
        <h3 className="property-block-heading">Flaws</h3>
        {character.flaws.map(flaw => createFlawEntry(flaw))}
        <AddFlawRow/>
    </div>
}