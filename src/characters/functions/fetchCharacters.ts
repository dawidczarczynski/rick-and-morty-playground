import { QueryFunctionContext } from '@tanstack/react-query';
import { CharactersParams, Character } from 'characters/model';
import { ApiRequestParams, makeRequest } from 'shared/api';

const CHARACTERS_RESOURCE_URI = 'https://rickandmortyapi.com/api/character';

export function fetchCharacters({
    pageParam,
    queryKey,
}: QueryFunctionContext<[string, CharactersParams], string>) {
    const [, queryParams] = queryKey;

    // Page param contain entire resource URI and parameters from orginal request
    // eg. https://rickandmortyapi.com/api/character?page=2&name=rick
    // so it need to use be used instead of static resource URI
    const requestURL = pageParam || CHARACTERS_RESOURCE_URI;

    // Request params should be skipped in case of fetching next page
    // as they are already present in page param
    const requestParams = !pageParam
        ? (queryParams as unknown as ApiRequestParams)
        : {};

    return makeRequest<Character[]>(requestURL, requestParams);
}
