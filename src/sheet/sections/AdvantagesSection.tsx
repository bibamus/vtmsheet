import React from "react";
import DisciplineBlock from "./DisciplineBlock";
import PropertyBlock from "./PropertyBlock";
import CharacterProps from "../CharacterProps";
import {BackgroundName} from "../../model/Character";
import DotEntry from "../DotEntry";
import Grid from "@mui/material/Unstable_Grid2";

export default function AdvantagesSection({
                                              character,
                                              characterDispatch
                                          }: CharacterProps): React.ReactElement {

    function createBackgroundEntry(index: number): React.ReactElement {
        let background = character.backgrounds[index];
        return <div key={index} className="labeled-entry">
            <select className="label" value={background?.name}
                    onChange={(choice) => characterDispatch({
                        type: "setArrayProperty",
                        property: "backgrounds",
                        index: index,
                        value: {name: choice.currentTarget.value as BackgroundName}
                    })}>
                <option></option>
                {
                    Object.values(BackgroundName).map(value => <option key={value}>{value}</option>)
                }
            </select>
            <DotEntry disabled={background?.name == null} maxValue={5} currValue={background?.level ?? 0}
                      setFunction={value => characterDispatch({
                          type: "setArrayProperty",
                          property: "backgrounds",
                          index: index,
                          value: {level: value}
                      })}/>
        </div>
    }

    function BackgroundBlock(): React.ReactElement {
        return <div>
            <h3 className="property-block-heading">Backgrounds</h3>
            {Array.from(Array(5).keys()).map(index => createBackgroundEntry(index))}
        </div>
    }


    return <>
        <Grid xs={12}>
            <h2 className="section-heading">Advantages</h2>
        </Grid>
        <Grid xs={4}>
            <DisciplineBlock character={character}
                             characterDispatch={characterDispatch}/>
        </Grid>
        <Grid xs={4}>
            <BackgroundBlock/>
        </Grid>
        <Grid xs={4}>
            <PropertyBlock label={"Virtues"} properties={["conscience", "selfControl", "courage"]}
                           character={character} characterDispatch={characterDispatch}/>
        </Grid>
    </>;
}

