import React from "react";
import DotEntryWithLabel from "../DotEntryWithLabel";
import Character from "../../model/Character";
import {capitalizeFirstLetter} from "../../Helper";
import {CharacterAction} from "../../state/CharacterReducer";
import Grid from "@mui/material/Unstable_Grid2";
import {SearchItemType} from "../../topbar/SearchItems";

interface PropertyBlockProps {
    label: string;
    properties: (keyof Character)[];
    character: Character;
    setCharacterProperty?: (propertyName: keyof Character, value: number) => void;
    characterDispatch: (action: CharacterAction) => void;
}

export default function PropertyBlock({
                                          label,
                                          properties,
                                          character,
                                          characterDispatch
                                      }: PropertyBlockProps): React.ReactElement {
    return <Grid container>
        <Grid xs={12}>
            <h3 className="property-block-heading">{label}</h3>,
        </Grid>
        {
            properties.map(property => <DotEntryWithLabel key={property} label={capitalizeFirstLetter(property)}
                                                          maxValue={5}
                                                          currValue={character[property] as number}
                                                          setFunction={(value) => characterDispatch({
                                                              type: "setProperty",
                                                              property: property,
                                                              value: value
                                                          })}
                                                          markSelector={{type: SearchItemType.STAT, value: property}}/>)
        }
    </Grid>;
}