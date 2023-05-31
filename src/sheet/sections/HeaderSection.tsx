import React from "react";
import CharacterProps from "../CharacterProps";
import {ClanName} from "../../model/Character";
import Grid from "@mui/material/Unstable_Grid2";

export default function HeaderSection({character, characterDispatch}: CharacterProps) {

    function ClanSelect() {
        return <select defaultValue={character.clan ?? ""}
                       onChange={event => characterDispatch({
                           type: "setProperty",
                           property: "clan",
                           value: event.target.value
                       })}>
            <option key={""}></option>
            {Object.values(ClanName).map(value => <option key={value}>{value}</option>)}
        </select>
    }

    return <>
        <Grid xs={4}>
            <Grid container>
                <Grid xs={6}>
                    <label className={"label"}>Name</label>
                </Grid>
                <Grid xs={6}>
                    <input className={"full-width"} value={character.characterName}
                           onChange={event => characterDispatch({
                               type: "setProperty",
                               property: "characterName",
                               value: event.target.value
                           })}/>
                </Grid>
                <Grid xs={6}>
                    <label className={"label"}>Player</label>
                </Grid>
                <Grid xs={6}>
                    <input className={"full-width"} value={character.playerName}
                           onChange={event => characterDispatch({
                               type: "setProperty",
                               property: "playerName",
                               value: event.target.value
                           })}/>
                </Grid>
                <Grid xs={6}>
                    <label className={"label"}>Chronicle</label>
                </Grid>
                <Grid xs={6}>
                    <input className={"full-width"} value={character.chronicle}
                           onChange={event => characterDispatch({
                               type: "setProperty",
                               property: "chronicle",
                               value: event.target.value
                           })}/>
                </Grid>
            </Grid>

        </Grid>

        <Grid xs={4}>
            <Grid container>
                <Grid xs={6}>
                    <label className={"label"}>Nature</label>
                </Grid>
                <Grid xs={6}>
                    <input className={"full-width"} value={character.nature} onChange={event => characterDispatch({
                        type: "setProperty",
                        property: "nature",
                        value: event.target.value
                    })}/>
                </Grid>
                <Grid xs={6}>
                    <label className={"label"}>Demeanor</label>
                </Grid>
                <Grid xs={6}>
                    <input className={"full-width"} value={character.demeanor}
                           onChange={event => characterDispatch({
                               type: "setProperty",
                               property: "demeanor",
                               value: event.target.value
                           })}/>
                </Grid>
                <Grid xs={6}>
                    <label className={"label"}>Concept</label>
                </Grid>
                <Grid xs={6}>
                    <input className={"full-width"} value={character.concept}
                           onChange={event => characterDispatch({
                               type: "setProperty",
                               property: "concept",
                               value: event.target.value
                           })}/>
                </Grid>
            </Grid>
        </Grid>
        <Grid xs={4}>
            <Grid container>
                <Grid xs={6}>
                    <label className={"label"}>Clan</label>
                </Grid>
                <Grid xs={6}>
                    <ClanSelect/>
                </Grid>
                <Grid xs={6}>
                    <label className={"label"}>Generation</label>
                </Grid>
                <Grid xs={6}>
                    <input value={character.generation}
                           onChange={event => characterDispatch({
                               type: "setProperty",
                               property: "generation",
                               value: event.target.value
                           })}/>
                </Grid>
                <Grid xs={6}>
                    <label className={"label"}>Sire</label>
                </Grid>
                <Grid xs={6}>
                    <input value={character.sire} onChange={event => characterDispatch({
                        type: "setProperty",
                        property: "sire",
                        value: event.target.value
                    })}/>
                </Grid>
            </Grid>
        </Grid>
    </>;
}