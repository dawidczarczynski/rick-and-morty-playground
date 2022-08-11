import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Character } from 'characters/model/character';
import {
    extractTotalCount,
    makeRequest,
    mergeResponseResults,
} from 'shared/api';

export interface UseCharactersResult {
    isLoading: boolean;
    totalCount: number;
    characters: Character[];
    fetchNextPage: () => void;
    hasNextPage: boolean;
    error?: string;
}

const CHARACTERS_RESOURCE_NAME = 'character';
const CHARACTERS_RESOURCE_URI = 'https://rickandmortyapi.com/api/character';

export function useCharacters(): UseCharactersResult {
    const {
        isLoading,
        error,
        data,
        hasNextPage = false,
        fetchNextPage,
    } = useInfiniteQuery(
        [CHARACTERS_RESOURCE_NAME],
        ({ pageParam }) =>
            makeRequest<Character[]>(pageParam || CHARACTERS_RESOURCE_URI),
        {
            getNextPageParam: lastPage => lastPage.info.next,
        }
    );

    // TODO: Check if memo needed
    const { characters, totalCount } = useMemo(
        () => ({
            characters: mergeResponseResults<Character>(data?.pages),
            totalCount: extractTotalCount<Character[]>(data?.pages),
        }),
        [data]
    );

    return {
        isLoading,
        characters,
        totalCount,
        fetchNextPage,
        error: error as string,
        hasNextPage,
    };
}
