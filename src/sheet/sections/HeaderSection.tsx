import React from "react";
import SectionProps from "./SectionProps";
import {ClanName} from "../../model/Character";

export default function HeaderSection({character, setCharacterProperty}: SectionProps) {

    function ClanSelect() {
        return <select defaultValue={character.clan ?? ""}
                       onChange={event => setCharacterProperty("clan", event.target.value)}>
            <option key={""}></option>
            {Object.values(ClanName).map(value => <option key={value}>{value}</option>)}
        </select>
    }

    return <div className={"col-section"}>
        <div>
            <div>
                <label className={"label"}>Name</label>
                <input value={character.characterName}
                       onChange={event => setCharacterProperty("characterName", event.target.value)}/>
            </div>
            <div>
                <label className={"label"}>Player</label>
                <input value={character.playerName}
                       onChange={event => setCharacterProperty("playerName", event.target.value)}/>
            </div>
            <div>
                <label className={"label"}>Chronicle</label>
                <input value={character.chronicle}
                       onChange={event => setCharacterProperty("chronicle", event.target.value)}/>
            </div>
        </div>
        <div>
            <div>
                <label className={"label"}>Nature</label>
                <input value={character.nature} onChange={event => setCharacterProperty("nature", event.target.value)}/>
            </div>
            <div>
                <label className={"label"}>Demeanor</label>
                <input value={character.demeanor}
                       onChange={event => setCharacterProperty("demeanor", event.target.value)}/>
            </div>
            <div>
                <label className={"label"}>Concept</label>
                <input value={character.concept}
                       onChange={event => setCharacterProperty("concept", event.target.value)}/>
            </div>
        </div>
        <div>
            <div>
                <label className={"label"}>Clan</label>
                <ClanSelect/>
            </div>
            <div>
                <label className={"label"}>Generation</label>
                <input value={character.generation}
                       onChange={event => setCharacterProperty("generation", event.target.value)}/>
            </div>
            <div>
                <label className={"label"}>Sire</label>
                <input value={character.sire} onChange={event => setCharacterProperty("sire", event.target.value)}/>
            </div>
        </div>
    </div>;
}