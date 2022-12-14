import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import {
    ApiResponse,
    extractTotalCount,
    mergeResponseResults,
} from 'shared/api';
import { CharactersParams, Character } from 'characters/model';
import { fetchCharacters } from 'characters/functions/fetchCharacters';

export interface UseCharactersResult {
    totalCount: number;
    characters: Character[];
    fetchNextPage: () => void;
    loading: boolean;
}

const characterRequestHandler = ({
    pageParam,
    queryKey,
}: QueryFunctionContext<[string, CharactersParams]>) => {
    const [, params] = queryKey;
    return fetchCharacters({ page: pageParam, params });
};

export function useCharacters(params?: CharactersParams): UseCharactersResult {
    const {
        data,
        hasNextPage = false,
        fetchNextPage,
        isLoading,
        isFetching,
    } = useInfiniteQuery<
        ApiResponse<Character[]>,
        Error,
        ApiResponse<Character[]>,
        [string, CharactersParams]
    >(['characters', params || {}], characterRequestHandler, {
        getNextPageParam: lastPage => lastPage.info.next, //eg. https://rickandmortyapi.com/api/character?page=2&name=rick
    });

    return {
        characters: mergeResponseResults<Character>(data?.pages),
        totalCount: extractTotalCount<Character[]>(data?.pages),
        loading: isLoading || isFetching,
        fetchNextPage: () => hasNextPage && fetchNextPage(),
    };
}
