import MeritsAndFlawsBlock from "./MeritsAndFlawsBlock";
import React from "react";
import CharacterProps from "../CharacterProps";
import ResourcesBlock from "./ResourcesBlock";
import StatusBlock from "./StatusBlock";
import Grid from "@mui/material/Unstable_Grid2";


export default function MiscSection({character, characterDispatch}: CharacterProps) {
    return <>
        <Grid xs={12}>
            <h2 className="section-heading">Misc</h2>
        </Grid>
        <Grid xs={4}>
            <MeritsAndFlawsBlock character={character} characterDispatch={characterDispatch}/>
        </Grid>
        <Grid xs={4}>
            <ResourcesBlock character={character} characterDispatch={characterDispatch}/>
        </Grid>
        <Grid xs={4}>
            <StatusBlock character={character} characterDispatch={characterDispatch}/>
        </Grid>
    </>;
}