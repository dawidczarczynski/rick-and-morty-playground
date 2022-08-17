import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import { Character } from 'characters/model/character';
import { CharactersParams } from 'characters/model/characterParams';
import { ApiResponse, ApiRequestParams, makeRequest } from 'shared/api';

const CHARACTERS_RESOURCE_NAME = 'character';
const CHARACTERS_RESOURCE_URI = 'https://rickandmortyapi.com/api/character';

function fetchCharacters({
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

export function useAllCharactersRequest(params: CharactersParams) {
    return useInfiniteQuery<
        ApiResponse<Character[]>,
        string,
        ApiResponse<Character[]>,
        [string, CharactersParams]
    >([CHARACTERS_RESOURCE_NAME, params], fetchCharacters, {
        getNextPageParam: lastPage => lastPage.info.next, //eg. https://rickandmortyapi.com/api/character?page=2&name=rick
    });
}
