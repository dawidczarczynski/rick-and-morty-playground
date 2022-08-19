import { useState } from 'react';
import { CharactersParams } from 'characters/model/characterParams';

export function useCharacterParams() {
    const [params, updateParams] = useState<CharactersParams>({});

    return {
        params,
        updateParams,
        clearParams: () => updateParams({}),
    };
}
