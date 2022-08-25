import { useForm } from 'react-hook-form';
import { CharacterFiltersValue } from 'characters/model';

const defaultValues: CharacterFiltersValue = {
    phrase: '',
    attribute: 'name',
    status: null,
    gender: null,
};

export function useCharacterFiltersForm() {
    const filtersForm = useForm<CharacterFiltersValue>({ defaultValues });
    return {
        filtersForm,
        clearFiltersForm: () => {
            filtersForm.reset(defaultValues);
        },
    };
}
