export type CharacterSearchAttribute = 'name' | 'species' | 'type';

export interface CharactersParams {
    name?: string;
    type?: string;
    species?: string;
}
