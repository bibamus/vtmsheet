import React from "react";
import {FlawName, MeritName} from "../../model/Character";
import CharacterProps from "../CharacterProps";


export default function MeritsAndFlawsBlock({character, characterDispatch}: CharacterProps): React.ReactElement {

    const costArray = Array.from(Array(7).keys()).map(index => (index + 1).toString());

    function createCostOptions(): React.ReactElement {
        return createOptionsWithEmptyOption(costArray);
    }

    function createOptionsWithEmptyOption(values: string[]) {
        return <>
            <option key={""}></option>
            {values.map(value => <option key={value}>{value}</option>)}
        </>;
    }

    function createFlawEntry(index: number) {
        let flaw = character.flaws[index];
        return <div key={index} className="labeled-entry">
            <select className="label" defaultValue={flaw?.name}
                    onChange={(choice) => characterDispatch({
                        type: "setArrayProperty",
                        property: "flaws",
                        index,
                        value: {name: choice.currentTarget.value as FlawName}
                    })}
            >
                {
                    createOptionsWithEmptyOption(Object.values(FlawName))
                }
            </select>
            <select className="label"
                    onChange={(choice) => characterDispatch({
                        type: "setArrayProperty",
                        property: "flaws",
                        index,
                        value: {cost: parseInt(choice.currentTarget.value)}
                    })}
                    defaultValue={flaw?.cost ?? 0}
            >

                {createCostOptions()}
            </select>
        </div>
    }

    function createMeritEntry(index: number): React.ReactElement {
        let merit = character.merits[index];
        return <div key={index} className="labeled-entry">
            <select className="label" defaultValue={merit?.name}
                    onChange={(choice) => characterDispatch({
                        type: "setArrayProperty",
                        property: "merits",
                        index,
                        value: {name: choice.currentTarget.value as MeritName}
                    })}
            >
                {
                    createOptionsWithEmptyOption(Object.values(MeritName))
                }
            </select>
            <select className="label" defaultValue={merit?.cost ?? 0}
                    onChange={(choice) => characterDispatch({
                        type: "setArrayProperty",
                        property: "merits",
                        index,
                        value: {cost: parseInt(choice.currentTarget.value)}
                    })}
            >
                {createCostOptions()}
            </select>
        </div>
    }


    return <div>
        <h3 className="property-block-heading">Merits</h3>
        {Array.from(Array(6).keys()).map(index => createMeritEntry(index))}
        <h3 className="property-block-heading">Flaws</h3>
        {Array.from(Array(6).keys()).map(index => createFlawEntry(index))}
    </div>
}