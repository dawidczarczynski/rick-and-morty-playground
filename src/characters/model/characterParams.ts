export type CharacterSearchAttribute = 'name' | 'species' | 'type';
export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';
export type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface CharactersParams {
    name?: string;
    type?: string;
    species?: string;
    status?: CharacterStatus;
    gender?: CharacterGender;
}
