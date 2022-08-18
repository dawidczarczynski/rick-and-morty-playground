import { useEffect } from 'react';
import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import { Character } from 'characters/model/character';
import { CharactersParams } from 'characters/model/characterParams';
import { ApiResponse, ApiRequestParams, makeRequest } from 'shared/api';
import { useLoading } from 'shared/hooks/useLoading';
import { useError } from 'shared/hooks/useError';

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
    const query = useInfiniteQuery<
        ApiResponse<Character[]>,
        Error,
        ApiResponse<Character[]>,
        [string, CharactersParams]
    >([CHARACTERS_RESOURCE_NAME, params], fetchCharacters, {
        getNextPageParam: lastPage => lastPage.info.next, //eg. https://rickandmortyapi.com/api/character?page=2&name=rick
    });

    // Handle global loader for both loading and fetching more statuses
    const { updateLoading } = useLoading();
    useEffect(() => {
        updateLoading(query.isLoading || query.isFetching);
    }, [query.isLoading, query.isFetching, updateLoading]);

    // Handle global error message
    const { setError } = useError();
    useEffect(() => {
        if (query.error) {
            setError('Failed to fetch characters list!');
        }
    }, [query.error, setError])

    return query;
}
