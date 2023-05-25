import React from "react";
import DotEntryWithLabel from "../DotEntryWithLabel";
import Character from "../../model/Character";
import {capitalizeFirstLetter} from "../../Helper";
import {CharacterAction} from "../../state/CharacterReducer";

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
    return <div>
        <h3 className="property-block-heading">{label}</h3>,
        {
            properties.map(property => <DotEntryWithLabel key={property} label={capitalizeFirstLetter(property)}
                                                          maxValue={5}
                                                          currValue={character[property] as number}
                                                          setFunction={(value) => characterDispatch({
                                                              type: "setProperty",
                                                              property: property,
                                                              value: value
                                                          })}
            />)
        }
    </div>;
}