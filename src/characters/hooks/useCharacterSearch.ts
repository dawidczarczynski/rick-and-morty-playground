import { useEffect, useMemo, useState } from 'react';

import {
    CharacterSearchAttribute,
    CharactersParams,
} from 'characters/model/characterParams';
import { debounce } from 'shared/functions/debounce';

interface CharacterSearchParams {
    onSearch: (params: CharactersParams) => void;
}

export function useCharacterSearch({ onSearch }: CharacterSearchParams) {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [searchAttribute, setSearchAttribute] =
        useState<CharacterSearchAttribute>('name');
    const memoizedCallback = useMemo(() => debounce(onSearch), [onSearch]);

    useEffect(() => {
        searchPhrase && memoizedCallback({ [searchAttribute]: searchPhrase });
    }, [searchPhrase, searchAttribute, memoizedCallback]);

    return {
        searchPhrase,
        setSearchPhrase,
        searchAttribute,
        setSearchAttribute,
        clear: () => {
            setSearchPhrase('');
            setSearchAttribute('name');
            onSearch({});
        },
    };
}
