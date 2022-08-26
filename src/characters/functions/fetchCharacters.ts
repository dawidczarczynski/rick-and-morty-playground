import { CharactersParams, Character } from 'characters/model';
import { ApiRequestParams, makeRequest } from 'shared/api';

export const CHARACTERS_RESOURCE_URI =
    'https://rickandmortyapi.com/api/character';

interface FetchCharacterParams {
    page?: string;
    params?: CharactersParams;
}

export function fetchCharacters({ page, params }: FetchCharacterParams) {
    // Page param contain entire resource URI and parameters from orginal request
    // eg. https://rickandmortyapi.com/api/character?page=2&name=rick
    // so it need to use be used instead of static resource URI
    const requestURL = page || CHARACTERS_RESOURCE_URI;

    // Request params should be skipped in case of fetching next page
    // as they are already present in page param
    const requestParams = !page ? (params as ApiRequestParams) || {} : {};

    return makeRequest<Character[]>(requestURL, requestParams);
}
