import React from "react";
import CharacterProps from "../CharacterProps";
import {ClanName} from "../../model/Character";

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

    return <div className={"col-section"}>
        <div>
            <div>
                <label className={"label"}>Name</label>
                <input value={character.characterName}
                       onChange={event => characterDispatch({
                           type: "setProperty",
                           property: "characterName",
                           value: event.target.value
                       })}/>
            </div>
            <div>
                <label className={"label"}>Player</label>
                <input value={character.playerName}
                       onChange={event => characterDispatch({
                           type: "setProperty",
                           property: "playerName",
                           value: event.target.value
                       })}/>
            </div>
            <div>
                <label className={"label"}>Chronicle</label>
                <input value={character.chronicle}
                       onChange={event => characterDispatch({
                           type: "setProperty",
                           property: "chronicle",
                           value: event.target.value
                       })}/>
            </div>
        </div>
        <div>
            <div>
                <label className={"label"}>Nature</label>
                <input value={character.nature} onChange={event => characterDispatch({
                    type: "setProperty",
                    property: "nature",
                    value: event.target.value
                })}/>
            </div>
            <div>
                <label className={"label"}>Demeanor</label>
                <input value={character.demeanor}
                       onChange={event => characterDispatch({
                           type: "setProperty",
                           property: "demeanor",
                           value: event.target.value
                       })}/>
            </div>
            <div>
                <label className={"label"}>Concept</label>
                <input value={character.concept}
                       onChange={event => characterDispatch({
                           type: "setProperty",
                           property: "concept",
                           value: event.target.value
                       })}/>
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
                       onChange={event => characterDispatch({
                           type: "setProperty",
                           property: "generation",
                           value: event.target.value
                       })}/>
            </div>
            <div>
                <label className={"label"}>Sire</label>
                <input value={character.sire} onChange={event => characterDispatch({
                    type: "setProperty",
                    property: "sire",
                    value: event.target.value
                })}/>
            </div>
        </div>
    </div>;
}