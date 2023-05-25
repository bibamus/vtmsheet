import Character from "../../model/Character";

interface StatusBlockProps {
    character: Character;
    setCharacterProperty: (propertyName: keyof Character, value: number) => void;
}

export default function StatusBlock({character, setCharacterProperty}: StatusBlockProps): React.ReactElement {
    return <div>
    </div>;
}