import {DamageLevel} from "../../model/Character";
import React from "react";
import CharacterProps from "../CharacterProps";


export default function StatusBlock({character, characterDispatch}: CharacterProps): React.ReactElement {

    function DamageSelect({level, changeFunction}: {
        level: DamageLevel,
        changeFunction: (value: string) => void
    }): React.ReactElement {
        return <select className={"label"} value={level} onChange={event => changeFunction(event.target.value)}>
            <option value={DamageLevel.None}></option>
            <option value={DamageLevel.Bashing}>/</option>
            <option value={DamageLevel.Lethal}>x</option>
            <option value={DamageLevel.Aggravated}>*</option>
        </select>
    }


    return <div>
        <div>
            <h3 className="property-block-heading">Health</h3>
            <div className="labeled-entry">
                <span className="label">Bruised</span>
                <DamageSelect level={character.bruised} changeFunction={value => characterDispatch({
                    type: "setProperty",
                    property: "bruised",
                    value: value
                })}
                />
            </div>
            <div className="labeled-entry">
                <span className="label">Hurt (-1)</span>
                <DamageSelect level={character.hurt} changeFunction={value => characterDispatch({
                    type: "setProperty",
                    property: "hurt",
                    value: value
                })}/>
            </div>
            <div className="labeled-entry">
                <span className="label">Injured (-1)</span>
                <DamageSelect level={character.injured} changeFunction={value => characterDispatch({
                    type: "setProperty",
                    property: "injured",
                    value: value
                })}/>
            </div>
            <div className="labeled-entry">
                <span className="label">Wounded (-2)</span>
                <DamageSelect level={character.wounded} changeFunction={value => characterDispatch({
                    type: "setProperty",
                    property: "wounded",
                    value: value
                })}/>
            </div>
            <div className="labeled-entry">
                <span className="label">Mauled (-2)</span>
                <DamageSelect level={character.mauled} changeFunction={value => characterDispatch({
                    type: "setProperty",
                    property: "mauled",
                    value: value
                })}/>
            </div>
            <div className="labeled-entry">
                <span className="label">Crippled (-5)</span>
                <DamageSelect level={character.crippled} changeFunction={value => characterDispatch({
                    type: "setProperty",
                    property: "crippled",
                    value: value
                })}/>
            </div>
            <div className="labeled-entry">
                <span className="label">Incapacitated</span>
                <DamageSelect level={character.incapacitated} changeFunction={value => characterDispatch({
                    type: "setProperty",
                    property: "incapacitated",
                    value: value
                })}/>
            </div>
        </div>
        <div>
            <h3 className="property-block-heading">Weakness</h3>
            <input value={character.weakness} onChange={event => characterDispatch({
                type: "setProperty",
                property: "weakness",
                value: event.target.value
            })}/>
        </div>
        <div>
            <h3 className="property-block-heading">Experience</h3>
            <input value={character.experience} type={"number"}
                   onChange={event => characterDispatch({
                       type: "setProperty",
                       property: "experience",
                       value: event.target.value
                   })}/>
        </div>
    </div>
}