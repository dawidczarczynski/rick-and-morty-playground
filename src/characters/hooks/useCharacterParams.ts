import { useState } from 'react';
import { CharactersParams } from 'characters/model/characterParams';
import { CharacterFiltersValue } from 'characters/model';
import { getCharacterParamsFromFilters } from 'characters/functions/getCharacterParamsFromFilters';

export function useCharacterParams() {
    const [params, updateParams] = useState<CharactersParams>({});

    return {
        params,
        updateParams: (filters: CharacterFiltersValue) => {
            const params = getCharacterParamsFromFilters(filters);
            updateParams(params);
        },
    };
}
