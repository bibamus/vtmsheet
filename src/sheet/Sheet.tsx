import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import CharacterProps from "./CharacterProps";
import {Box} from "@mui/material";
import HeaderSection from "./sections/HeaderSection";
import AttributesSection from "./sections/AttributeSection";
import AbilitiesSection from "./sections/AbilitiesSection";
import AdvantagesSection from "./sections/AdvantagesSection";
import MiscSection from "./sections/MiscSection";

interface SheetProps extends CharacterProps {
    initialized: boolean;
}

export default function Sheet({character, characterDispatch, initialized}: SheetProps): React.ReactElement {

    if (!initialized) return (<div>Loading...</div>);

    return (<Box className="sheet">
        <h1 className="section-heading">Vampires - The Masquerade</h1>
        <Grid container disableEqualOverflow columnSpacing={20}>
            <HeaderSection character={character} characterDispatch={characterDispatch}/>
            <AttributesSection character={character} characterDispatch={characterDispatch}/>
            <AbilitiesSection character={character} characterDispatch={characterDispatch}/>
            <AdvantagesSection character={character} characterDispatch={characterDispatch}/>
            <MiscSection character={character} characterDispatch={characterDispatch}/>
        </Grid>
    </Box>);


}