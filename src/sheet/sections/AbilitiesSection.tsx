import PropertyBlock from "./PropertyBlock";
import React from "react";
import CharacterProps from "../CharacterProps";
import Grid from "@mui/material/Unstable_Grid2";

export default function AbilitiesSection({character, characterDispatch}: CharacterProps) {
    return <>
        <Grid xs={12}>
            <h2 className="section-heading">Abilities</h2>
        </Grid>
        <Grid xs={4}>
            <PropertyBlock label={"Talents"}
                           properties={["alertness", "athletics", "brawl", "dodge", "empathy", "expression", "intimidation", "leadership", "streetwise", "subterfuge"]}
                           character={character} characterDispatch={characterDispatch}/>
        </Grid>
        <Grid xs={4}>
            <PropertyBlock label={"Skills"}
                           properties={["animalKen", "crafts", "drive", "etiquette", "firearms", "melee", "performance", "security", "stealth", "survival"]}
                           character={character} characterDispatch={characterDispatch}/>
        </Grid>
        <Grid xs={4}>
            <PropertyBlock label={"Knowledges"}
                           properties={["academics", "computer", "finance", "investigation", "law", "linguistics", "medicine", "occult", "politics", "science"]}
                           character={character} characterDispatch={characterDispatch}/>
        </Grid>
    </>;
}