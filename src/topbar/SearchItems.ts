export interface SearchItem {
    type: string;
    value: string;
    name: string;
}


export const searchItems: SearchItem[] = [
    {type: "stat", name: "Strength", value: "strength"},
    {type: "stat", name: "Dexterity", value: "dexterity"},
    {type: "stat", name: "Stamina", value: "stamina"},
    {type: "stat", name: "Intelligence", value: "intelligence"},

]