import React from "react";
import DotEntryWithLabel from "./DotEntryWithLabel";
import Character from "../model/Character";
import {capitalizeFirstLetter} from "../Helper";

interface PropertyBlockProps {
    label: string;
    properties: (keyof Character)[];
    character: Character;
    setCharacterProperty: (propertyName: keyof Character, value: number) => void;
}

export default function PropertyBlock({label,properties,character,setCharacterProperty} : PropertyBlockProps): React.ReactElement {
    return <div>
        <h3 className="property-block-heading">{label}</h3>,
        {
            properties.map(property => <DotEntryWithLabel key={property} label={capitalizeFirstLetter(property)}
                                                          maxValue={5}
                                                          currValue={character[property] as number}
                                                          setFunction={(value) => setCharacterProperty(property, value)}
            />)
        }
    </div>;
}