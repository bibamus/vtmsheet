import Character, {PathName} from "../../model/Character";
import DotEntry from "../DotEntry";

interface ResourcesBlockProps {
    character: Character;
    setCharacterProperty: (property: keyof Character, value: any) => void;
}

export default function ResourcesBlock({character, setCharacterProperty}: ResourcesBlockProps): React.ReactElement {
    return <div>
        <div className={"path-block"}>
            <select className={"label property-block-heading"} value={character.pathName}
                    onChange={(event) => setCharacterProperty("pathName", event.target.value)}>
                {Object.values(PathName).map(value => <option key={value}>{value}</option>)}
            </select>
            <DotEntry maxValue={10} currValue={character.pathValue}
                      setFunction={value => setCharacterProperty("pathValue", value)}/>
        </div>
        <div>
            <h3 className="property-block-heading">Willpower</h3>
            <DotEntry maxValue={10} currValue={character.maxWillpower}
                      setFunction={value => setCharacterProperty("maxWillpower", value)}/>
            <DotEntry square={true} maxValue={10} currValue={character.currentWillpower}
                      setFunction={value => setCharacterProperty("currentWillpower", value)}/>
        </div>
        <div>
            <h3 className="property-block-heading">Blood Pool</h3>
            <DotEntry square={true} maxValue={30} currValue={character.bloodPool}
                      setFunction={value => setCharacterProperty("bloodPool", value)}/>
        </div>
    </div>
}