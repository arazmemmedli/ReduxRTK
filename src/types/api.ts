export interface Word {
    word: string;
    phonetics: Phonetic[];
    meanings: Meaning[];
}

interface Phonetic {
    text: string;
    audio: string;
}

interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
}

interface Definition {
    definition: string;
    examples: string;
    synonyms?: string[];
}