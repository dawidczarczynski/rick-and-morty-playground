import { CharacterFiltersValue, CharactersParams } from 'characters/model';

export function getCharacterParamsFromFilters(
    filters: CharacterFiltersValue
): CharactersParams {
    const params: CharactersParams = {};

    if (filters.phrase) {
        params[filters.attribute] = filters.phrase;
    }

    if (filters.status) {
        params.status = filters.status;
    }

    if (filters.gender) {
        params.gender = filters.gender;
    }

    return params;
}
