import { useForm } from 'react-hook-form';
import { CharacterFiltersValue, CharactersParams } from 'characters/model';
import { useDebounce } from 'shared/hooks/useDebounce';
import { getCharacterParamsFromFilters } from 'characters/functions/getCharacterParamsFromFilters';

interface CharacterSearchParams {
    onChange: (params: CharactersParams) => void;
}

const defaultValues: CharacterFiltersValue = {
    phrase: '',
    attribute: 'name',
    status: null,
    gender: null,
};

export function useCharacterFilters({ onChange }: CharacterSearchParams) {
    const form = useForm<CharacterFiltersValue>({ defaultValues });
    const callback = useDebounce({ callback: onChange });
    const params = getCharacterParamsFromFilters(form.watch());

    callback(params);

    return {
        form,
        clearFilters: () => {
            form.reset(defaultValues);
            onChange({});
        },
    };
}
