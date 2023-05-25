import {PathName} from "../../model/Character";
import DotEntry from "../DotEntry";
import CharacterProps from "../CharacterProps";


export default function ResourcesBlock({character, characterDispatch}: CharacterProps): React.ReactElement {
    return <div>
        <div className={"path-block"}>
            <select className={"label property-block-heading"} value={character.pathName}
                    onChange={(event) => characterDispatch({
                        type: "setProperty",
                        property: "pathName",
                        value: event.target.value
                    })}>
                {Object.values(PathName).map(value => <option key={value}>{value}</option>)}
            </select>
            <DotEntry maxValue={10} currValue={character.pathValue}
                      setFunction={value => characterDispatch({type: "setProperty", property: "pathValue", value})}/>
        </div>
        <div>
            <h3 className="property-block-heading">Willpower</h3>
            <DotEntry maxValue={10} currValue={character.maxWillpower}
                      setFunction={value => characterDispatch({type: "setProperty", property: "maxWillpower", value})}/>
            <DotEntry square={true} maxValue={10} currValue={character.currentWillpower}
                      setFunction={value => characterDispatch({
                          type: "setProperty",
                          property: "currentWillpower",
                          value
                      })}/>
        </div>
        <div>
            <h3 className="property-block-heading">Blood Pool</h3>
            <DotEntry square={true} maxValue={30} currValue={character.bloodPool}
                      setFunction={value => characterDispatch({type: "setProperty", property: "bloodPool", value})}/>
        </div>
    </div>
}