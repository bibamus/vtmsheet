import Character from "../../model/Character";

export default interface SectionProps {
    character: Character;
    setCharacterProperty: (property: keyof Character, value: any) => void;
    setCharacterArrayProperty: <T>(propertyName: "disciplines" | "backgrounds" | "merits" | "flaws",
                                   index: number,
                                   value: Partial<T>) => void;
}