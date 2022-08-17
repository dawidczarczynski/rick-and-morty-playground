import { useState } from 'react';

import { extractTotalCount, mergeResponseResults } from 'shared/api';
import { Character } from 'characters/model/character';
import { CharactersParams } from 'characters/model/characterParams';
import { useAllCharactersRequest } from 'characters/hooks/useAllCharactersRequest';

export interface UseCharactersResult {
    totalCount: number;
    characters: Character[];
    fetchNextPage: () => void;
    hasNextPage: boolean;
    error: string | null;
    updateParams: (params: CharactersParams) => void;
}

export function useCharacters(): UseCharactersResult {
    const [params, updateParams] = useState<CharactersParams>({});

    const {
        data,
        error,
        hasNextPage = false,
        fetchNextPage
    } = useAllCharactersRequest(params);


    return {
        characters: mergeResponseResults<Character>(data?.pages),
        totalCount: extractTotalCount<Character[]>(data?.pages),
        fetchNextPage,
        error,
        hasNextPage,
        updateParams,
    };
}
