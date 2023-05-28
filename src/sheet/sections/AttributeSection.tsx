import PropertyBlock from "./PropertyBlock";
import React from "react";
import CharacterProps from "../CharacterProps";
import Grid from "@mui/material/Unstable_Grid2";

export default function AttributesSection({character, characterDispatch}: CharacterProps) {
    return <>
        <Grid xs={12}>
            <h2 className="section-heading">Attributes</h2>
        </Grid>
        <Grid xs={4}>
            <PropertyBlock label={"Physical"} properties={["strength", "dexterity", "stamina"]}
                           character={character} characterDispatch={characterDispatch}/>
        </Grid>
        <Grid xs={4}>
            <PropertyBlock label={"Social"} properties={["charisma", "manipulation", "appearance"]}
                           character={character} characterDispatch={characterDispatch}/>
        </Grid>
        <Grid xs={4}>
            <PropertyBlock label={"Mental"} properties={["perception", "intelligence", "wits"]}
                           character={character} characterDispatch={characterDispatch}/>
        </Grid>
    </>;
}