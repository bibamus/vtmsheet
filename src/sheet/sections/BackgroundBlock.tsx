import React, {useCallback, useEffect} from "react";
import {Background, BackgroundName} from "../../model/Character";
import CharacterProps from "../CharacterProps";
import Grid from "@mui/material/Unstable_Grid2";
import DotEntryWithLabel from "../DotEntryWithLabel";

export default function BackgroundBlock({
                                            character,
                                            characterDispatch
                                        }: CharacterProps): React.ReactElement {


    const getValidBackgrounds = useCallback(() => {
        return Object.values(BackgroundName)
            .filter(value => character.backgrounds.find(background => background.name === value) == null);
    }, [character.backgrounds])


    const [selectedBackground, setSelectedBackground] = React.useState<BackgroundName | null>(getValidBackgrounds().length > 0 ? getValidBackgrounds()[0] : null);


    useEffect(() => {
        setSelectedBackground(getValidBackgrounds().length > 0 ? getValidBackgrounds()[0] : null);
    }, [getValidBackgrounds])


    function addBackground() {
        if (selectedBackground != null) {
            if (character.backgrounds.find(background => background.name === selectedBackground) != null) {
                return;
            }
            characterDispatch({
                type: "addArrayProperty",
                property: "backgrounds",
                value: {name: selectedBackground, level: 0}
            });
        }

    }

    function AddBackgroundRow(): React.ReactElement {
        return <div>
            <select className="label" value={selectedBackground ?? ""}
                    onChange={event => setSelectedBackground(event.target.value as BackgroundName)}>
                {getValidBackgrounds().map(value => <option key={value}>{value}</option>)}
            </select>
            <button onClick={addBackground}>Add Background</button>
        </div>;
    }

    function updateBackground(background: Background, value: number) {
        characterDispatch({
            type: "setArrayProperty",
            property: "backgrounds",
            index: character.backgrounds.findIndex(value => value.name === background.name),
            value: {name: background.name, level: value}
        });
    }

    function createBackgroundEntry(background: Background): React.ReactElement {
        return <Grid container key={background.name}>
            <DotEntryWithLabel label={background.name} maxValue={5}
                               currValue={background.level}
                               setFunction={value => updateBackground(background, value)}/>
        </Grid>
    }

    return <div>
        <h3 className="property-block-heading">Backgrounds</h3>
        {character.backgrounds.map((background) => createBackgroundEntry(background))}
        <AddBackgroundRow/>
    </div>
}