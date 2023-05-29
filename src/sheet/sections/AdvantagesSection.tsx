import React from "react";
import DisciplineBlock from "./DisciplineBlock";
import PropertyBlock from "./PropertyBlock";
import CharacterProps from "../CharacterProps";
import Grid from "@mui/material/Unstable_Grid2";
import BackgroundBlock from "./BackgroundBlock";

export default function AdvantagesSection({
                                              character,
                                              characterDispatch
                                          }: CharacterProps): React.ReactElement {


    return <>
        <Grid xs={12}>
            <h2 className="section-heading">Advantages</h2>
        </Grid>
        <Grid xs={4}>
            <DisciplineBlock character={character}
                             characterDispatch={characterDispatch}/>
        </Grid>
        <Grid xs={4}>
            <BackgroundBlock character={character} characterDispatch={characterDispatch}/>
        </Grid>
        <Grid xs={4}>
            <PropertyBlock label={"Virtues"} properties={["conscience", "selfControl", "courage"]}
                           character={character} characterDispatch={characterDispatch}/>
        </Grid>
    </>;
}

