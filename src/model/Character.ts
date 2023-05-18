import {v4 as uuidv4} from 'uuid';
import exp from "constants";


export default class Character {

    readonly id: string = uuidv4()

    readonly characterName: string = "";
    readonly playerName: string = "";

    readonly generation: number = 13;

    readonly strength: number = 0;
    readonly dexterity: number = 0;
    readonly stamina: number = 0;

    readonly charisma: number = 0;
    readonly manipulation: number = 0;
    readonly appearance: number = 0;

    readonly perception: number = 0;
    readonly intelligence: number = 0;
    readonly wits: number = 0;

    readonly alertness: number = 0;
    readonly athletics: number = 0;
    readonly brawl: number = 0;
    readonly dodge: number = 0;
    readonly empathy: number = 0;
    readonly expression: number = 0;
    readonly intimidation: number = 0;
    readonly leadership: number = 0;
    readonly streetwise: number = 0;
    readonly subterfuge: number = 0;

    readonly animalKen: number = 0;
    readonly crafts: number = 0;
    readonly drive: number = 0;
    readonly etiquette: number = 0;
    readonly firearms: number = 0;
    readonly melee: number = 0;
    readonly performance: number = 0;
    readonly security: number = 0;
    readonly stealth: number = 0;
    readonly survival: number = 0;

    readonly academics: number = 0;
    readonly computer: number = 0;
    readonly finance: number = 0;
    readonly investigation: number = 0;
    readonly law: number = 0;
    readonly linguistics: number = 0;
    readonly medicine: number = 0;
    readonly occult: number = 0;
    readonly politics: number = 0;
    readonly science: number = 0;

    readonly disciplines: Discipline[] = [];

    readonly backgrounds: Background[] = [];

    readonly conscience: number = 0;
    readonly selfControl: number = 0;
    readonly courage: number = 0;

    readonly merits: Merit[] = [];
    readonly flaws: Flaw[] = [];


}

export interface Discipline {
    name: DisciplineName;
    level: number;
}

export interface Background {
    name: BackgroundName;
    level: number;
}

export enum DisciplineName {
    Animalism = "Animalism",
    Auspex = "Auspex",
    Celerity = "Celerity",
    Dominate = "Dominate",
    Fortitude = "Fortitude",
    Obfuscate = "Obfuscate",
    Potence = "Potence",
    Presence = "Presence",
    Protean = "Protean",
    Quietus = "Quietus",
    Thaumaturgy = "Thaumaturgy",
    Vicissitude = "Vicissitude",
}

export interface Merit {
    name: MeritName;
    cost: number;
}

export interface Flaw {
    name: FlawName;
    cost: number;
}

export enum BackgroundName {
    Allies = "Allies",
    AlternateIdentity = "Alternate Identity",
    BlackHandMembership = "Black Hand Membership",
    Contacts = "Contacts",
    Domain = "Domain",
    Fame = "Fame",
    Generation = "Generation",
    Herd = "Herd",
    Influence = "Influence",
    Mentor = "Mentor",
    Resources = "Resources",
    Retainers = "Retainers",
    Status = "Status"
}

export enum MeritName {
    AcuteSense = "Acute Sense",
    Ambidextrous = "Ambidextrous",
    BlushOfHealth = "Blush of Health",
    EatFood = "Eat Food",
    EnchantingVoice = "Enchanting Voice",
    FriendlyFace = "Friendly Face",
    IronWill = "Iron Will",
    NaturalLearner = "Natural Learner",
    NaturalLinguist = "Natural Linguist",
    NightVision = "Night Vision",
    PerfectBalance = "Perfect Balance",
    SanguinaryAnimism = "Sanguinary Animism",
    SmallFrame = "Small Frame",
    TrueFaith = "True Faith",
    Unbondable = "Unbondable",
    Unyielding = "Unyielding",
    Blase = "Blase",
    CodeOfHonor = "Code of Honor"
}

export enum FlawName {
    Addiction = "Addiction",
    Amnesia = "Amnesia",
    Anachronism = "Anachronism",
    Archaic = "Archaic",
    AwkwardGesture = "Awkward Gesture",
    BadSight = "Bad Sight",
    Beconing = "Beconing",
    BitterTaste = "Bitter Taste"
}