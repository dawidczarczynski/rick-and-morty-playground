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
    const [phrase, setPhrase] = useState('');
    const [attribute, setAttribute] =
        useState<CharacterSearchAttribute>('name');

    const memoizedCallback = useMemo(() => debounce(onSearch), [onSearch]);

    useEffect(() => {
        phrase && memoizedCallback({ [attribute]: phrase });
    }, [phrase, attribute, memoizedCallback]);

    return {
        phrase,
        setPhrase,
        attribute,
        setAttribute,
        clearSearch: () => {
            setPhrase('');
            setAttribute('name');
            onSearch({});
        },
    };
}
