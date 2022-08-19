import { extractTotalCount, mergeResponseResults } from 'shared/api';
import { Character } from 'characters/model/character';
import { CharactersParams } from 'characters/model/characterParams';
import { useAllCharactersRequest } from 'characters/hooks/useAllCharactersRequest';

export interface UseCharactersResult {
    totalCount: number;
    characters: Character[];
    fetchNextPage: () => void;
    loading: boolean;
}

export function useCharacters(params: CharactersParams): UseCharactersResult {
    const {
        data,
        hasNextPage = false,
        fetchNextPage,
        isLoading,
        isFetching,
    } = useAllCharactersRequest(params);

    return {
        characters: mergeResponseResults<Character>(data?.pages),
        totalCount: extractTotalCount<Character[]>(data?.pages),
        loading: isLoading || isFetching,
        fetchNextPage: () => hasNextPage && fetchNextPage(),
    };
}
